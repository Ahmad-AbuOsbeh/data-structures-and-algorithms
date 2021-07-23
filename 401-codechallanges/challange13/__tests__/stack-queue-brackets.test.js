"use strict";
const validateBrackets = require("../stack-queue-brackets");

describe("validate Brackets Tests ", () => {
  it("1.check this string : {} ", () => {
    expect(validateBrackets("{}")).toBe(true);
  });

  it("2.check this string : {}(){} ", () => {
    expect(validateBrackets("{}(){}")).toBe(true);
  });

  it("3.check this string : ()[[Extra Characters]] ", () => {
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
  });

  it("4.check this string : (){}[[]]	 ", () => {
    expect(validateBrackets("(){}[[]]	")).toBe(true);
  });

  it("5.check this string : {}{Code}[Fellows](())	 ", () => {
    expect(validateBrackets("{}{Code}[Fellows](())	")).toBe(true);
  });

  it("6.check this string : [({}]	 ", () => {
    expect(validateBrackets("[({}]")).toBe(false);
  });

  it("7.check this string : (](	 ", () => {
    expect(validateBrackets("(](")).toBe(false);
  });

  it("8.check this string : {(})	 ", () => {
    expect(validateBrackets("{(})	")).toBe(false);
  });

  it("9.check this string : {	 ", () => {
    expect(validateBrackets("{")).toBe(false);
  });

  it("10.check this string : )	 ", () => {
    expect(validateBrackets(")")).toBe(false);
  });

  it("11.check this string : [}	 ", () => {
    expect(validateBrackets("[}")).toBe(false);
  });
});
