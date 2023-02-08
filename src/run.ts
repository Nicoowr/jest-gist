import { Test } from "./index";


export const testsToExecute: Test<any>[] = [];

export const run = () => {
  const onlyTestsToExecute = testsToExecute.filter(test => test.options === "only");
  if (onlyTestsToExecute.length) {
    onlyTestsToExecute.forEach(test => {
      const result = test.scenario();

      console.log(result);
    });
  } else {
    testsToExecute.forEach(test => {
      const result = test.scenario();

      console.log(result);
    });
  }
};
