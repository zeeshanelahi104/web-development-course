console.log("===== FUNCTIONS - PART 1: BASICS & TYPES =====");
console.log("");

/**
 * SECTION 1: WHAT ARE FUNCTIONS?
 */
console.log("📌 SECTION 1: WHAT ARE FUNCTIONS?");
console.log("━".repeat(50));

// Without function - repeated code
console.log("Without function:");
console.log("  Square of 5 is 25");
console.log("  Square of 6 is 36");
console.log("  Square of 7 is 49");

// With function - reusable
console.log("\nWith function:");
function square(x) {
    return x * x;
}
console.log("  Square of 5 is", square(5));
console.log("  Square of 6 is", square(6));
console.log("  Square of 7 is", square(7));

console.log("\n✅ Benefits of Functions:");
console.log("  • Reusability - Write once, use many times");
console.log("  • Modularity - Break complex problems");
console.log("  • Maintainability - Fix in one place");
console.log("  • Abstraction - Hide complexity");
console.log("  • Testing - Test independently");

/**
 * SECTION 2: FUNCTION DECLARATION
 */
console.log("\n📌 SECTION 2: FUNCTION DECLARATION");
console.log("━".repeat(50));

// Function Declaration - Hoisted
console.log("1️⃣ Function Declaration:");
sayHello("John"); // Can be called before declaration (hoisting)

function sayHello(name) {
    console.log(`  Hello, ${name}!`);
}

console.log("  Function name:", sayHello.name);
console.log("  Function length (parameters):", sayHello.length);

// Function with parameters and return
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

console.log("\n2️⃣ Function with return:");
console.log("  add(5, 3) =", add(5, 3));
console.log("  multiply(5, 3) =", multiply(5, 3));
console.log("  divide(10, 2) =", divide(10, 2));
console.log("  divide(10, 0) =", divide(10, 0));

// Function without return (returns undefined)
function logMessage(message) {
    console.log(`  Log: ${message}`);
    // No return statement
}
const result = logMessage("Test");
console.log("  Function without return:", result); // undefined

/**
 * SECTION 3: FUNCTION EXPRESSION
 */
console.log("\n📌 SECTION 3: FUNCTION EXPRESSION");
console.log("━".repeat(50));

// Function Expression - Not hoisted
// greet2("Bob"); // Error! Cannot access before initialization

const greet2 = function(name) {
    return `Hello, ${name} from function expression!`;
};

console.log("1️⃣ Function Expression:");
console.log("  Result:", greet2("Bob"));
console.log("  Function name:", greet2.name); // Anonymous function

// Named Function Expression (for recursion)
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log("\n2️⃣ Named Function Expression:");
console.log("  factorial(5) =", factorial(5));
console.log("  Function name:", factorial.name); // "fact"

// Function expression in objects
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("\n3️⃣ Function expression in objects:");
console.log("  calculator.add(10, 5) =", calculator.add(10, 5));

/**
 * SECTION 4: ARROW FUNCTIONS (ES6+)
 */
console.log("\n📌 SECTION 4: ARROW FUNCTIONS");
console.log("━".repeat(50));

// Arrow function - multiple parameters
const addArrow = (a, b) => {
    return a + b;
};

// Arrow function - single parameter (parentheses optional)
const squareArrow = x => x * x; // Implicit return

// Arrow function - no parameters
const greetArrow = () => "Hello World!";

console.log("1️⃣ Arrow Function Variations:");
console.log("  addArrow(5, 3) =", addArrow(5, 3));
console.log("  squareArrow(5) =", squareArrow(5));
console.log("  greetArrow() =", greetArrow());

// Arrow function with object literal (needs parentheses)
const createUser = (name, age) => ({ name, age });
console.log("\n2️⃣ Arrow function returning object:");
console.log("  createUser('Alice', 25) =", createUser("Alice", 25));

// Arrow function in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
console.log("\n3️⃣ Arrow functions with arrays:");
console.log("  Doubled:", doubled);
console.log("  Evens:", evens);

// Arrow function with setTimeout
console.log("\n4️⃣ Arrow function with setTimeout:");
setTimeout(() => {
    console.log("  This runs after 1 second (arrow function)");
}, 1000);

/**
 * SECTION 5: PARAMETERS & ARGUMENTS
 */
console.log("\n📌 SECTION 5: PARAMETERS & ARGUMENTS");
console.log("━".repeat(50));

// Default parameters
console.log("1️⃣ Default Parameters:");
function greet3(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log("  greet3() =", greet3());
console.log("  greet3('John') =", greet3("John"));
console.log("  greet3('Jane', 'Hi') =", greet3("Jane", "Hi"));

// Rest parameters (...)
console.log("\n2️⃣ Rest Parameters:");
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("  sumAll(1, 2, 3) =", sumAll(1, 2, 3));
console.log("  sumAll(1, 2, 3, 4, 5) =", sumAll(1, 2, 3, 4, 5));

// Rest with other parameters
function introduce(greeting, ...names) {
    return `${greeting}, ${names.join(", ")}!`;
}
console.log("  introduce('Hello', 'Alice', 'Bob', 'Charlie') =", 
    introduce("Hello", "Alice", "Bob", "Charlie"));

// arguments object (old way - not in arrow functions)
console.log("\n3️⃣ arguments Object (function declaration only):");
function showArguments() {
    console.log("  arguments:", arguments);
    console.log("  arguments.length:", arguments.length);
    console.log("  First argument:", arguments[0]);
}
showArguments(1, 2, 3, "hello");

/**
 * SECTION 6: RETURN VALUES
 */
console.log("\n📌 SECTION 6: RETURN VALUES");
console.log("━".repeat(50));

// Multiple return statements
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
console.log("1️⃣ Multiple returns:");
console.log("  Score 95:", getGrade(95));
console.log("  Score 85:", getGrade(85));
console.log("  Score 75:", getGrade(75));

// Returning arrays
console.log("\n2️⃣ Returning arrays:");
function getMinMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}
const [min, max] = getMinMax([10, 5, 8, 3, 12]);
console.log("  Min:", min, "Max:", max);

// Returning objects
console.log("\n3️⃣ Returning objects:");
function createPoint(x, y) {
    return { x, y, distance: Math.sqrt(x * x + y * y) };
}
const point = createPoint(3, 4);
console.log("  Point:", point);

// Early returns
console.log("\n4️⃣ Early returns (guard clauses):");
function processUser(user) {
    if (!user) return "No user provided";
    if (!user.name) return "User has no name";
    if (user.age < 18) return "User is underage";
    
    return `Processing ${user.name}`;
}
console.log("  processUser(null):", processUser(null));
console.log("  processUser({}):", processUser({}));
console.log("  processUser({ name: 'John', age: 25 }):", 
    processUser({ name: "John", age: 25 }));

/**
 * SECTION 7: FUNCTION PROPERTIES
 */
console.log("\n📌 SECTION 7: FUNCTION PROPERTIES");
console.log("━".repeat(50));

function exampleFunction(a, b, c) {
    return a + b + c;
}

console.log("1️⃣ Function Properties:");
console.log("  name:", exampleFunction.name);
console.log("  length (parameter count):", exampleFunction.length);
console.log("  toString():", exampleFunction.toString());

// Custom properties
console.log("\n2️⃣ Custom Function Properties:");
function counter() {
    counter.count++;
    return counter.count;
}
counter.count = 0;
console.log("  counter():", counter());
console.log("  counter():", counter());
console.log("  counter():", counter());
console.log("  counter.count:", counter.count);

/**
 * SECTION 8: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
 */
console.log("\n📌 SECTION 8: IIFE (Immediately Invoked)");
console.log("━".repeat(50));

// Basic IIFE
(function() {
    console.log("  IIFE executed immediately!");
})();

// IIFE with parameters
((name, age) => {
    console.log(`  IIFE: ${name} is ${age} years old`);
})("Alice", 30);

// IIFE with return value
const result2 = (function(a, b) {
    return a + b;
})(5, 3);
console.log("  IIFE return value:", result2);

// IIFE for private scope
const module = (function() {
    let privateVar = "I'm private";
    
    return {
        getPrivate() {
            return privateVar;
        },
        setPrivate(value) {
            privateVar = value;
        }
    };
})();
console.log("  Module pattern:", module.getPrivate());
module.setPrivate("New value");
console.log("  After set:", module.getPrivate());
console.log("  Cannot access privateVar directly:", module.privateVar);

/**
 * SECTION 9: COMPARISON TABLE
 */
console.log("\n📌 SECTION 9: COMPARISON");
console.log("━".repeat(50));

console.log("\n📊 Function Type Comparison:");
console.log("┌─────────────────┬──────────────┬────────────┬─────────────┐");
console.log("│ Type            │ Hoisted      │ this       │ Use Case    │");
console.log("├─────────────────┼──────────────┼────────────┼─────────────┤");
console.log("│ Declaration     │ ✅ Yes       │ Dynamic    │ General     │");
console.log("│ Expression      │ ❌ No        │ Dynamic    │ Callbacks   │");
console.log("│ Arrow           │ ❌ No        │ Lexical    │ Callbacks   │");
console.log("│ IIFE            │ N/A          │ Dynamic    │ Privacy     │");
console.log("└─────────────────┴──────────────┴────────────┴─────────────┘");

/**
 * SECTION 10: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 10: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create a function that calculates BMI
console.log("\n✅ Exercise 1: BMI Calculator");
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category;
    
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    
    return { bmi: bmi.toFixed(1), category };
}
const bmiResult = calculateBMI(70, 1.75);
console.log("  BMI Result:", bmiResult);

// Exercise 2: Create a function with default params
console.log("\n✅ Exercise 2: Discount Calculator");
function calculatePrice(originalPrice, discountPercent = 0, taxRate = 0.1) {
    const discounted = originalPrice * (1 - discountPercent / 100);
    const withTax = discounted * (1 + taxRate);
    return {
        original: originalPrice,
        discounted: discounted.toFixed(2),
        final: withTax.toFixed(2)
    };
}
console.log("  Price calculation:", calculatePrice(100, 20));

// Exercise 3: Rest parameter function
console.log("\n✅ Exercise 3: Average Calculator");
function average(...numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((total, n) => total + n, 0);
    return sum / numbers.length;
}
console.log("  average(10, 20, 30):", average(10, 20, 30));
console.log("  average(5, 15, 25, 35):", average(5, 15, 25, 35));

/**
 * SECTION 11: COMMON MISTAKES
 */
console.log("\n📌 SECTION 11: COMMON MISTAKES");
console.log("━".repeat(50));

console.log("\n❌ Mistake 1: Forgetting to return");
function double1(x) {
    x * 2; // No return
}
console.log("  double1(5):", double1(5)); // undefined

console.log("\n❌ Mistake 2: Using arrow function for object method");
const obj = {
    name: "Test",
    getName: () => {
        return this.name; // this is not obj!
    }
};
console.log("  Arrow method this:", obj.getName()); // undefined

console.log("\n❌ Mistake 3: Not handling default parameters properly");
function multiply2(a, b = a) { // b uses a's value
    return a * b;
}
console.log("  multiply2(5):", multiply2(5)); // 25

console.log("\n✅ Best Practices:");
console.log("  1. Use function declarations for regular functions");
console.log("  2. Use arrow functions for callbacks");
console.log("  3. Always specify default parameters");
console.log("  4. Keep functions small and focused");
console.log("  5. Use meaningful function names");
console.log("  6. Document complex functions with JSDoc");

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - FUNCTIONS PART 1");
console.log("━".repeat(50));
console.log("✅ Function Declaration - Hoisted, named");
console.log("✅ Function Expression - Not hoisted, stored in variable");
console.log("✅ Arrow Function - Concise, lexical this");
console.log("✅ Parameters - Inputs to functions");
console.log("✅ Return - Output from functions");
console.log("✅ Default Parameters - Fallback values");
console.log("✅ Rest Parameters - Variable number of arguments");
console.log("✅ IIFE - Immediately executed, private scope");

console.log("\n🎯 When to use which:");
console.log("  • Regular reusable function → Declaration");
console.log("  • Callback functions → Arrow function");
console.log("  • Methods needing 'this' → Declaration or expression");
console.log("  • Privacy/module pattern → IIFE");
console.log("  • One-liner transformations → Arrow (implicit return)");

console.log("\n===== END OF FUNCTIONS PART 1 =====");