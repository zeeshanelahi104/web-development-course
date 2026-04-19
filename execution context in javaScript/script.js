// debugger

// sayHi()

// const username = 'Zeeshan'
// const userAge = 25

// function sayHi() {
//     const a = 14
//     const b = 12
//     add(7, 9)
// }

// function add(x, y) {
//     kuchhBhi()
//     return x + y
// }

// function kuchhBhi() {
//     console.log('Kuchh bhi');
// }

// console.log('Program Ended');


debugger

// console.log("===== JAVASCRIPT EXECUTION START =====");

/**
 * =========================================
 * 🔹 STEP 1: GLOBAL EXECUTION CONTEXT (GEC)
 * =========================================
 */
console.log("\n[Step 1] Global Execution Context Created");

/**
 * =========================================
 * 🔹 STEP 2: CREATION PHASE
 * =========================================
 * Memory Allocation:
 * - Variables → undefined
 * - Functions → stored completely
 */
console.log("\n[Step 2] Creation Phase (Hoisting)");

console.log("Value of a before initialization:", a); // undefined

var a = 10;

hello(); // works due to hoisting

function hello() {
  console.log("Hello function is hoisted");
}

/**
 * =========================================
 * 🔹 STEP 3: EXECUTION PHASE
 * =========================================
 */
console.log("\n[Step 3] Execution Phase");

console.log("Value of a after initialization:", a);

/**
 * =========================================
 * 🔹 STEP 4: FUNCTION CALL → NEW CONTEXT
 * =========================================
 */
function greet(name) {
  console.log("\n[Step 4] Function Execution Context (greet)");

  var message = "Hello " + name;

  console.log("message:", message);

  /**
   * =========================================
   * 🔹 STEP 5: INNER FUNCTION CONTEXT
   * =========================================
   */
  function inner() {
    console.log("[Step 5] Inner Function Execution Context");
    console.log("Accessing parent variable:", message);
  }

  inner();
}

console.log("\nCalling greet() → pushed to Call Stack");
greet("Zeeshan");

/**
 * =========================================
 * 🔹 STEP 6: CALL STACK FLOW
 * =========================================
 */
console.log("\n[Step 6] Call Stack Execution");

function first() {
  console.log("first() pushed");
  second();
  console.log("first() finished → popped");
}

function second() {
  console.log("second() pushed");
  third();
  console.log("second() finished → popped");
}

function third() {
  console.log("third() pushed");
  console.log("third() finished → popped");
}

first();

/**
 * =========================================
 * 🔹 STEP 7: SCOPE CHAIN
 * =========================================
 */
console.log("\n[Step 7] Scope Chain");

var x = 100;

function outer() {
  var y = 200;

  function inner() {
    var z = 300;

    console.log("x:", x); // global
    console.log("y:", y); // outer
    console.log("z:", z); // inner
  }

  inner();
}

outer();

/**
 * =========================================
 * 🔹 STEP 8: THIS KEYWORD
 * =========================================
 */
console.log("\n[Step 8] this keyword");

console.log("Global this:", this);

const obj = {
  name: "Zeeshan",
  show: function () {
    console.log("this.name:", this.name);
  },
};

obj.show();

/**
 * =========================================
 * 🔹 FINAL SUMMARY
 * =========================================
 */
console.log("\n===== FINAL SUMMARY =====");
console.log("1. JS creates Global Execution Context first");
console.log("2. Creation Phase → memory allocation");
console.log("3. Execution Phase → code runs");
console.log("4. Functions create new Execution Context");
console.log("5. Call Stack manages everything");

console.log("\n===== JAVASCRIPT EXECUTION END =====");