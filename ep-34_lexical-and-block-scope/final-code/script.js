// 'use strict'

// const username = 'Anurag'
// let userAge = 25
// var a = 50

// // function add() {
// //   const username = 'Akash'
// //   const x = 5
// //   const y = 8
// //   console.log(x + y)
// //   console.log(username)
// // }

// function subtract() {
//   const x = 15
//   const y = 18
//   const z = 28
//   // console.log(x - y)
//   // console.log(username)

//   function child() {
//   // debugger

//     const childName = 'Golu'
//     // console.log(childName);
//     // console.log(x,z);

//     if(true){
//       let num1 = 78
//       var num2 = 987
//       console.log(num1);
//       console.log(num2);
//     }
//     console.log(num2);

//     function grandChild() {
//       const grandChildName = 'Molu'
//       // console.log(grandChildName);
//     }
//     grandChild()
//   }


//   child()

// }

// // add()
// subtract()

// console.log('Program Ended')






'use strict';

console.log("===== LEXICAL & BLOCK SCOPE DEMO START =====");

/**
 * 🔹 GLOBAL SCOPE VARIABLES
 */
console.log("\n👉 Global Scope Variables:");

const username = 'Anurag';  // global const
let userAge = 25;           // global let
var a = 50;                 // global var

console.log("Global username:", username);
console.log("Global userAge:", userAge);
console.log("Global a:", a);

/**
 * 🔹 LEXICAL SCOPE DEMONSTRATION
 * Lexical scope = functions can access variables from their parent functions
 * based on where the function is WRITTEN, not where it's CALLED
 */

function subtract() {
  console.log("\n👉 subtract() function - Level 1:");
  
  const x = 15;
  const y = 18;
  const z = 28;
  
  console.log("subtract() local variables: x=", x, ", y=", y, ", z=", z);
  console.log("Accessing global username from subtract():", username);
  
  /**
   * child() is LEXICALLY inside subtract()
   * So child() has access to subtract()'s variables (x, y, z)
   * This is LEXICAL SCOPING!
   */
  function child() {
    console.log("\n  👉 child() function - Level 2 (Lexically inside subtract):");
    
    const childName = 'Golu';
    console.log("  child() local variable: childName =", childName);
    
    // Lexical scope - accessing parent function's variables
    console.log("  Accessing parent (subtract) variables via lexical scope:");
    console.log("  x (from subtract) =", x);
    console.log("  z (from subtract) =", z);
    console.log("  Accessing global username =", username);
    
    /**
     * 🔹 BLOCK SCOPE DEMONSTRATION
     * Block scope = variables declared with let/const inside {} are trapped there
     * var ignores block scope!
     */
    console.log("\n  📦 Block Scope Demo (inside if statement):");
    
    if(true) {
      // Block scoped variables (let/const)
      let num1 = 78;      // Block-scoped - ONLY inside this if block
      const num3 = 999;   // Block-scoped - ONLY inside this if block
      
      // Function scoped variable (var)
      var num2 = 987;     // NOT block-scoped - accessible outside the if block
      
      console.log("    Inside if block:");
      console.log("    let num1 =", num1);      // ✅ Works
      console.log("    const num3 =", num3);    // ✅ Works
      console.log("    var num2 =", num2);      // ✅ Works
    }
    
    // Accessing variables after the block
    console.log("\n  After if block:");
    
    try {
      console.log("    Trying to access num1 (let):", num1);
    } catch(error) {
      console.log("    ❌ num1 (let) is BLOCK SCOPED - cannot access outside if block:", error.message);
    }
    
    try {
      console.log("    Trying to access num3 (const):", num3);
    } catch(error) {
      console.log("    ❌ num3 (const) is BLOCK SCOPED - cannot access outside if block:", error.message);
    }
    
    console.log("    ✅ num2 (var) is NOT block scoped - accessible here:", num2);
    
    /**
     * 🔹 NESTED LEXICAL SCOPE - Level 3
     * grandChild() is LEXICALLY inside child()
     * So it can access child() AND subtract() variables!
     */
    function grandChild() {
      console.log("\n    👉 grandChild() function - Level 3 (Lexically inside child):");
      
      const grandChildName = 'Molu';
      console.log("    grandChild() local: grandChildName =", grandChildName);
      
      // Lexical scope chain: grandChild → child → subtract → global
      console.log("    Lexical Scope Chain:");
      console.log("    → Accessing child's variable: childName =", childName);
      console.log("    → Accessing subtract's variable: x =", x);
      console.log("    → Accessing global variable: username =", username);
    }
    
    grandChild();
  }
  
  child();
  
  // Demonstrating that parent cannot access child's variables
  console.log("\n👉 Back in subtract() (parent function):");
  try {
    console.log("Trying to access childName from parent:", childName);
  } catch(error) {
    console.log("❌ Cannot access childName - parent cannot see child's variables!");
    console.log("   (Lexical scope works inward, not outward)");
  }
}

/**
 * 🔹 EXECUTE THE MAIN FUNCTION
 */
console.log("\n👉 Executing subtract() - This will demonstrate lexical scope and block scope:");
subtract();

/**
 * 🔹 EXTRA: Lexical Scope vs Dynamic Scope
 */
console.log("\n===== LEXICAL SCOPE EXPLANATION =====");
console.log("Lexical scope means: functions remember the scope where they were CREATED,");
console.log("not where they are EXECUTED.");
console.log("");
console.log("In our example:");
console.log("- child() was CREATED inside subtract()");
console.log("- So child() ALWAYS has access to subtract()'s variables");
console.log("- This is true no matter where child() is called from!");

/**
 * 🔹 BLOCK SCOPE SUMMARY
 */
console.log("\n===== BLOCK SCOPE SUMMARY =====");
console.log("📦 Blocks = { } (if, for, while, etc.)");
console.log("| Keyword | Block Scoped? |");
console.log("| var     | ❌ No         |");
console.log("| let     | ✅ Yes        |");
console.log("| const   | ✅ Yes        |");

console.log("\n===== LEXICAL & BLOCK SCOPE DEMO END =====");
console.log("\n💡 Tip: Use 'debugger' inside child() and see the Scope panel in DevTools!");