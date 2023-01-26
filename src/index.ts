type TestPasses = {
    testPasses: true;
};

type TestFails<T> = {
    testPasses: false;
    expectedResult: T;
    actualResult: T;
}

type TestResult<T> = TestPasses | TestFails<T>

export const test = <T>(description: string, scenario: () => TestResult<T>): void => {
    const result = scenario();

    console.log(result);
}

export const expect = <T>(actualResult: T, expectedResult: T): TestResult<T> => {
    return {
        testPasses: typeof actualResult === typeof expectedResult && JSON.stringify(actualResult) === JSON.stringify(expectedResult),
        expectedResult: expectedResult,
        actualResult: actualResult
    };
}

// toEqual
// toMatch