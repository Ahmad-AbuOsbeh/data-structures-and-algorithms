"use strict";
const Stack = require("./Stack");

//create validate brackets function will check :Round Brackets : (), Square Brackets : [], and Curly Brackets : {}
function validateBrackets(string) {
  //new stack to help with checking balancing
  let stack = new Stack();

  //convert string to array
  let arr = string.split("");

  // create array to store excessive symplos "}", "]", and ")"
  let characters = [];
  arr.forEach((item) => {
    //if starting sympol >> push into stack
    if (item == "{" || item == "[" || item == "(") {
      // console.log("push this", item);
      stack.push(item);
    }
    //check if closing sympol match the peek of stak >> pop from stack
    else if (item == "}" && stack.peek() == "{") {
      stack.pop();
      // console.log("pop this from stack", item);
    } else if (item == "]" && stack.peek() == "[") {
      stack.pop();
      // console.log("pop this from stack", item);
    } else if (item == ")" && stack.peek() == "(") {
      stack.pop();
      // console.log("pop this from stack", item);
    }
    //if the sympol didn' push or poped from stack, then it excessive sympol >> push into characters array
    else {
      characters.push(item);
    }
  });
  // console.log("stack.peek()", stack.peek());

  // check if the peek has value, then string not balanced OR if the characters array contain any excessive sympol >> also string not balanced
  if (
    stack.peek() ||
    characters.includes("}") ||
    characters.includes("]") ||
    characters.includes(")")
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBrackets;
