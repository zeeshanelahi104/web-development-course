console.log("===== VAR vs LET vs CONST =====");

/**
 * 🔹 1. VAR EXAMPLE
 */
console.log("\n👉 VAR EXAMPLE");

console.log(a); // undefined (hoisted)
var a = 10;

var a = 20; // redeclaration allowed
console.log("var a:", a);

/**
 * 🔹 2. LET EXAMPLE
 */
console.log("\n👉 LET EXAMPLE");

try {
  console.log(b); // ReferenceError
} catch (err) {
  console.log("Error:", err.message);
}

let b = 30;
b = 40; // reassignment allowed
console.log("let b:", b);

// let b = 50; ❌ redeclaration not allowed

/**
 * 🔹 3. CONST EXAMPLE
 */
console.log("\n👉 CONST EXAMPLE");

const c = 50;
console.log("const c:", c);

// c = 60; ❌ error

/**
 * 🔹 4. BLOCK SCOPE
 */
console.log("\n👉 BLOCK SCOPE");

if (true) {
  var x = 100;
  let y = 200;
  const z = 300;
}

console.log("var x:", x); // ✅ works

try {
  console.log(y); // ❌ error
} catch (err) {
  console.log("y error:", err.message);
}

try {
  console.log(z); // ❌ error
} catch (err) {
  console.log("z error:", err.message);
}

/**
 * 🔹 5. CONST WITH OBJECT
 */
console.log("\n👉 CONST OBJECT");

const user = { name: "Zeeshan" };

user.name = "Ali"; // ✅ allowed (mutation)
console.log("Updated user:", user);

/**
 * 🔹 SUMMARY
 */
console.log("\n===== SUMMARY =====");
console.log("var → function scoped, hoisted, redeclaration allowed");
console.log("let → block scoped, TDZ, no redeclaration");
console.log("const → block scoped, no reassignment");