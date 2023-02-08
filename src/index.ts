import { testsToExecute } from "./run";

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

export type TestResult<T> = TestPasses | TestFails<T>

type TestOptions = "skip" | "only" | "none"

export type Test<T> = {
  description: string; scenario: () => TestResult<T>; options: TestOptions
}

export const test = <T>(description: string, scenario: () => TestResult<T>, options: TestOptions = "none"): void => {
  if (options === "skip") {
    return;
  }
  testsToExecute.push({ description, scenario, options });

};
