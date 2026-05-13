// // debugger

// console.log(a)

// var a = 'Zeeshan'

// hi()


// // Function Definition
// // Function Declaration
// function hi() {
//     console.log('Hello');
// }

// // Function Definition
// // Function Expression
// var sayHi = function() {    //anonymous function
//     console.log('Hiii');
// }

// // IIFE


// sayHi()


console.log("===== HOISTING DEMO START =====");

/**
 * 🔹 VAR HOISTING
 */
console.log("\n👉 var hoisting:");
console.log(a); // undefined
var a = 10;
console.log("After initialization:", a);

/**
 * 🔹 FUNCTION HOISTING
 */
console.log("\n👉 function hoisting:");

greet();

function greet() {
  console.log("Hello! Function is hoisted completely.");
}

/**
 * 🔹 LET & CONST HOISTING (TDZ)
 */
console.log("\n👉 let & const hoisting (TDZ):");

try {
  console.log(b); // ReferenceError
} catch (error) {
  console.log("Error accessing b before declaration:", error.message);
}

let b = 20;
console.log("b after initialization:", b);

/**
 * 🔹 CONST Example
 */
try {
  console.log(c);
} catch (error) {
  console.log("Error accessing c before declaration:", error.message);
}

const c = 30;
console.log("c after initialization:", c);

/**
 * 🔹 Summary
 */
console.log("\n===== SUMMARY =====");
console.log("var → undefined");
console.log("function → fully hoisted");
console.log("let/const → TDZ (error before initialization)");

console.log("\n===== HOISTING DEMO END =====");