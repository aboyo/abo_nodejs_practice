const expect = require("chai").expect;
const testModule = require("../exercise");

// exercise 1 test.
describe("test number with commas:", () => {
  it("9527=>9,527", () => {
    expect(testModule.exercise1(9527)).to.equal("9,527");
  });
  it("3345678=>3,345,678", () => {
    expect(testModule.exercise1(3345678)).to.equal("3,345,678");
  });
  it("-1234.45=>-1,234.45", () => {
    expect(testModule.exercise1(-1234.45)).to.equal("-1,234.45");
  });
});

// exercise 2 test.
describe("test pipe function:", () => {
  const increment = (x) => {
    return x + 1;
  };
  const initValue = 5;
  it("test pipe function for once increment: (5+1=6)", () => {
    expect(testModule.exercise2(initValue, increment)).to.equal(6);
  });
  it("test pipe function for 3 times increment: (5+1+1+1=8)", () => {
    expect(
      testModule.exercise2(initValue, increment, increment, increment)
    ).to.equal(8);
  });
});
