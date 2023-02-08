import {test, expect} from "."
test("Test a function which should work", () => {
    // GIVEN
    const expectedResult = 2
    // WHEN
    const actualResult = 2
    // THEN
    return expect(actualResult).toEqual(expectedResult)
})

test("Test a function which tests the equality of two objects which are the same", () => {
    // GIVEN
    const expectedResult = {foo: "bar"}
    // WHEN
    const actualResult = {foo: "bar"}
    // THEN
    return expect(actualResult).toEqual(expectedResult)
})

test("Test a function which tests the equality of two objects which are not the same", () => {
    // GIVEN
    const expectedResult = {foo: "bar"}
    // WHEN
    const actualResult = {foo: "baz"}
    // THEN
    return expect(actualResult).toEqual(expectedResult)
})

test("Test a function which tests that a number is greater than another", () => {
    // GIVEN
    const expectedNumberToBeGreaterThan = 5
    // WHEN
    const actualValue = 6
    // THEN
    return expect(actualValue).toBeGreaterThan(expectedNumberToBeGreaterThan)
})

test("Test a function which tests that a number is greater than another but it's not the case", () => {
    // GIVEN
    const expectedNumberToBeGreaterThan = 5
    // WHEN
    const actualValue = 4
    // THEN
    return expect(actualValue).toBeGreaterThan(expectedNumberToBeGreaterThan)
})

test("Test a function which tests that a number is greater than another but the actual value is not a number", () => {
    // GIVEN
    const expectedNumberToBeGreaterThan = 5
    // WHEN
    const actualValue = "6"
    // THEN
    return expect(actualValue).toBeGreaterThan(expectedNumberToBeGreaterThan)
})