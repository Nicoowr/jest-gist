import {test, expect} from "."
test("Test a function which should work", () => {
    // GIVEN
    const expectedResult = 2
    // WHEN
    const actualResult = 2
    // THEN
    return expect(expectedResult, actualResult)
})

test("Test a function which returns an object", () => {
    // GIVEN
    const expectedResult = {foo: "bar"}
    // WHEN
    const actualResult = {foo: "bar"}
    // THEN
    return expect(expectedResult, actualResult)
})

test("Test a function which returns an object", () => {
    // GIVEN
    const expectedResult = {foo: "bar"}
    // WHEN
    const actualResult = {foo: "baz"}
    // THEN
    return expect(expectedResult, actualResult)
})