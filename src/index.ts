type TestPasses = {
  testPasses: true;
};

type TestFails<T = any> = {
  testPasses: false;
  expectedResult: T;
  actualResult: T;
} | {
  testPasses: false;
  expectedValueToBeGreatherThan: number;
  actualValue: T;
}

type TestResult<T> = TestPasses | TestFails<T>

type Expect<T> = {
  toEqual: (expectedResult: T) => TestResult<T>
  toBeGreaterThan: (comparedNumber: number) => TestResult<T>
}

const isNumber = (value: any): value is number => typeof value === "number";

export const test = <T>(description: string, scenario: () => TestResult<T>): void => {
  const result = scenario();

  console.log(result);
};

export const expect = <T = any>(actualResult: T): Expect<T> => {
  return {
    toEqual: (expectedResult: T): TestResult<T> => {
      const testResult = typeof actualResult === typeof expectedResult && JSON.stringify(actualResult) === JSON.stringify(expectedResult);
      if (testResult === true) {
        return {
          testPasses: true
        };
      }
      return ({
        testPasses: false,
        actualResult,
        expectedResult
      });
    },
    toBeGreaterThan: (comparedNumber: number) => {
      if (isNumber(actualResult)) {
        const testResult = actualResult > comparedNumber;
        if (testResult === true) {
          return {
            testPasses: true
          };
        }
        return ({
          testPasses: false,
          actualValue: actualResult,
          expectedValueToBeGreatherThan: comparedNumber
        });
      }
      return {
        testPasses: false,
        actualValue: actualResult,
        expectedValueToBeGreatherThan: comparedNumber
      };
    }
  };
};

// toEqual