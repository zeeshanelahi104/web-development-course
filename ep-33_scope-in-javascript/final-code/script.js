// const username = 'Anurag'
// let userAge = 25
// var a = 50

// function add() {
//   debugger
//   const username = 'Akash'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

// function subtract() {
//   const x = 15
//   const y = 18
//   console.log(x - y)
//   console.log(username)
// }

// add()
// subtract()

// console.log('Program Ended')




console.log("===== SCOPE DEMO START =====");

/**
 * 🔹 GLOBAL SCOPE
 * Variables declared outside any function are in global scope
 * They can be accessed from anywhere in the code
 */
console.log("\n👉 Global Scope Variables:");

const username = 'Anurag';  // global (const)
let userAge = 25;           // global (let)
var a = 50;                 // global (var)

console.log("Global username:", username);
console.log("Global userAge:", userAge);
console.log("Global a:", a);

/**
 * 🔹 FUNCTION SCOPE
 * Variables declared inside a function are only accessible within that function
 * Functions create their own scope
 */

function add() {
  console.log("\n👉 Inside add() function:");
  
  // Local variable - shadows the global username
  const username = 'Akash';  // local to add()
  const x = 5;
  const y = 8;
  
  console.log("Local username (shadows global):", username);
  console.log("x + y =", x + y);
  
  // Accessing global variable
  console.log("Global userAge accessed from inside add():", userAge);
  console.log("Global a accessed from inside add():", a);
  
  // add() finished - local variables destroyed
}

function subtract() {
  console.log("\n👉 Inside subtract() function:");
  
  const x = 15;
  const y = 18;
  
  console.log("x - y =", x - y);
  
  // No local username, so uses global username
  console.log("username (from global scope):", username);
  console.log("userAge (from global scope):", userAge);
  console.log("a (from global scope):", a);
}

/**
 * 🔹 SCOPE CHAIN DEMONSTRATION
 */
console.log("\n👉 Scope Chain:");
console.log("When a variable is used, JS looks in:");
console.log("1. Current function scope");
console.log("2. Outer/parent function scope");
console.log("3. Global scope");
console.log("If not found → ReferenceError");

/**
 * 🔹 NESTED FUNCTIONS (Closure/Scope Chain)
 */
function outer() {
  const outerVar = "I'm from outer";
  
  function inner() {
    const innerVar = "I'm from inner";
    console.log("\n👉 Nested function scope:");
    console.log("Accessing innerVar:", innerVar);
    console.log("Accessing outerVar (up scope chain):", outerVar);
    console.log("Accessing globalVar (up to global):", username);
  }
  
  inner();
  // console.log(innerVar); // Error! Cannot access innerVar here
}

/**
 * 🔹 EXECUTING FUNCTIONS
 */
console.log("\n👉 Executing Functions:");

add();
subtract();
outer();

/**
 * 🔹 TRYING TO ACCESS FUNCTION SCOPED VARIABLES OUTSIDE
 */
console.log("\n👉 Accessing variables outside their scope:");

try {
  console.log(x); // x is defined inside add() - not accessible here
} catch(error) {
  console.log("Error accessing 'x' outside add():", error.message);
}

try {
  console.log(innerVar); // innerVar is defined inside outer()'s inner() - not accessible
} catch(error) {
  console.log("Error accessing 'innerVar' outside inner():", error.message);
}

/**
 * 🔹 SUMMARY
 */
console.log("\n===== SUMMARY =====");
console.log("✅ Global scope: accessible everywhere");
console.log("✅ Function scope: accessible only inside that function");
console.log("✅ Scope chain: inner can access outer, but not vice versa");
console.log("✅ var = function-scoped | let/const = block-scoped");

console.log("\n===== SCOPE DEMO END =====");
console.log("\n💡 Tip: Use 'debugger' keyword and open DevTools to see scope in action!");