// debugger

// // sayHi()

// // const username = 'Anurag'
// // const userAge = 25

// // function sayHi() {
// //     const a = 14
// //     const b = 12
// //     add(7, 9)
// // }

// // function add(x, y) {
// //     kuchhBhi()
// //     return x + y
// // }

// // function kuchhBhi() {
// //     console.log('Kuchh bhi');
// // }

// function introduceMe() {
//     console.log('Hi, My name is Anurag.');
//     introduceMe()
// }

// introduceMe()

// console.log('Program Ended');






console.log("===== CALL STACK DEMO START =====");

/**
 * Step-by-step Call Stack Execution
 */

function first() {
  console.log("👉 first() pushed to stack");

  second();

  console.log("👉 first() finished → popped from stack");
}

function second() {
  console.log("👉 second() pushed to stack");

  third();

  console.log("👉 second() finished → popped from stack");
}

function third() {
  console.log("👉 third() pushed to stack");

  console.log("👉 third() finished → popped from stack");
}

console.log("👉 Global Execution Context pushed");

first();

console.log("👉 Global Execution Context finished");

console.log("===== CALL STACK DEMO END =====");

/**
 * 🔥 Bonus: Stack Overflow Example
 */

function recursive() {
  console.log("Calling recursive...");
  recursive(); // infinite recursion
}

// Uncomment to test (will crash)
// recursive();