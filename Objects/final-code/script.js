console.log("===== FUNCTIONS IN JAVASCRIPT - COMPLETE GUIDE =====");
console.log("");

/**
 * ============================================
 * 1. FUNCTION DECLARATION (Named Function)
 * ============================================
 */
console.log("1️⃣ FUNCTION DECLARATION");
console.log("━".repeat(50));

// Function Declaration - Hoisted (can be called before declaration)
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript functions.`;
}

console.log("Function Declaration Example:");
console.log(greetUser("Alice"));
console.log("✓ Can be called BEFORE declaration (hoisting)");
console.log("✓ Has a name (useful for debugging)");
console.log("");

/**
 * ============================================
 * 2. FUNCTION EXPRESSION
 * ============================================
 */
console.log("2️⃣ FUNCTION EXPRESSION");
console.log("━".repeat(50));

// Function Expression - Not hoisted (cannot be called before declaration)
const square = function(x) {
    return x * x;
};

console.log("Function Expression Example:");
console.log(`Square of 5 is: ${square(5)}`);
console.log("✓ Stored in a variable");
console.log("✓ NOT hoisted (cannot be called before definition)");
console.log("✓ Can be anonymous (no name)");
console.log("");

// Named Function Expression (rare but possible)
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log("");

/**
 * ============================================
 * 3. ARROW FUNCTION (ES6+)
 * ============================================
 */
console.log("3️⃣ ARROW FUNCTION");
console.log("━".repeat(50));

// Basic arrow function
const add = (a, b) => {
    return a + b;
};

// Implicit return (single expression)
const multiply = (a, b) => a * b;

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const sayHello = () => "Hello World!";

console.log("Arrow Function Examples:");
console.log(`Add: ${add(5, 3)}`);
console.log(`Multiply: ${multiply(5, 3)}`);
console.log(`Double: ${double(10)}`);
console.log(`Say Hello: ${sayHello()}`);
console.log("✓ Shorter syntax");
console.log("✓ No 'function' keyword");
console.log("✓ No 'this' binding (lexical this)");
console.log("✓ Implicit return for single expressions");
console.log("");

/**
 * ============================================
 * 4. IIFE (Immediately Invoked Function Expression)
 * ============================================
 */
console.log("4️⃣ IIFE (Immediately Invoked Function Expression)");
console.log("━".repeat(50));

// IIFE - Runs immediately when defined
(function() {
    const privateVar = "This is private";
    console.log("IIFE executing immediately!");
    console.log(`Private variable: ${privateVar}`);
})();

// IIFE with parameters
((name, age) => {
    console.log(`IIFE with parameters: ${name} is ${age} years old`);
})("Bob", 30);

console.log("✓ Runs immediately when defined");
console.log("✓ Creates private scope (doesn't pollute global)");
console.log("✓ Used for module patterns");
console.log("");

/**
 * ============================================
 * 5. CONSTRUCTOR FUNCTION
 * ============================================
 */
console.log("5️⃣ CONSTRUCTOR FUNCTION");
console.log("━".repeat(50));

// Constructor function (convention: capitalize first letter)
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.getInfo = function() {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

// Creating objects using 'new' keyword
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2021);

console.log("Constructor Function Example:");
console.log(car1.getInfo());
console.log(car2.getInfo());
console.log("✓ Used to create multiple similar objects");
console.log("✓ Convention: Capitalized name");
console.log("✓ Uses 'new' keyword");
console.log("");

/**
 * ============================================
 * 6. GENERATOR FUNCTION
 * ============================================
 */
console.log("6️⃣ GENERATOR FUNCTION");
console.log("━".repeat(50));

// Generator function (uses * and yield)
function* numberGenerator() {
    console.log("Generator started");
    yield 1;
    console.log("After first yield");
    yield 2;
    console.log("After second yield");
    yield 3;
    console.log("Generator finished");
    return 4;
}

const gen = numberGenerator();
console.log("Generator Example:");
console.log(`First call: ${gen.next().value}`);
console.log(`Second call: ${gen.next().value}`);
console.log(`Third call: ${gen.next().value}`);
console.log(`Fourth call (done): ${gen.next().value}`);
console.log("✓ Can pause execution with 'yield'");
console.log("✓ Returns multiple values over time");
console.log("✓ Uses function* syntax");
console.log("");

// Practical generator example - Fibonacci sequence
function* fibonacci() {
    let a = 0, b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log("Fibonacci Generator:");
console.log(`Fib 1: ${fib.next().value}`);
console.log(`Fib 2: ${fib.next().value}`);
console.log(`Fib 3: ${fib.next().value}`);
console.log(`Fib 4: ${fib.next().value}`);
console.log(`Fib 5: ${fib.next().value}`);
console.log("");

/**
 * ============================================
 * 7. ASYNC FUNCTION
 * ============================================
 */
console.log("7️⃣ ASYNC FUNCTION");
console.log("━".repeat(50));

// Async function always returns a Promise
async function fetchUserData() {
    return { id: 1, name: "John Doe" };
}

// Async function with await
async function getData() {
    console.log("Async function started");
    
    // Simulating API call with Promise
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Async User", age: 25 });
        }, 1000);
    });
    
    console.log("Data received:", data);
    return data;
}

console.log("Async Function Example:");
fetchUserData().then(data => console.log("Promise returned:", data));

// Execute async function
getData().then(result => console.log("Final result:", result));

console.log("✓ Always returns a Promise");
console.log("✓ Can use 'await' keyword");
console.log("✓ Makes asynchronous code look synchronous");
console.log("");

/**
 * ============================================
 * 8. CALLBACK FUNCTION
 * ============================================
 */
console.log("8️⃣ CALLBACK FUNCTION");
console.log("━".repeat(50));

// Function that accepts a callback
function processUserInput(name, callback) {
    console.log(`Processing user: ${name}`);
    const result = callback(name);
    console.log(`Callback result: ${result}`);
    return result;
}

// Using callback
const upperCaseName = processUserInput("Alice", function(name) {
    return name.toUpperCase();
});

// Callback with array methods
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("Callback Example:");
console.log(`Original: ${numbers}`);
console.log(`Doubled: ${doubledNumbers}`);
console.log("✓ Function passed as argument");
console.log("✓ Executed inside another function");
console.log("✓ Used in async operations, event handlers");
console.log("");

/**
 * ============================================
 * 9. HIGHER ORDER FUNCTION
 * ============================================
 */
console.log("9️⃣ HIGHER ORDER FUNCTION");
console.log("━".repeat(50));

// Higher Order Function (returns a function)
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

// Higher Order Function (accepts a function)
function applyOperation(a, b, operation) {
    return operation(a, b);
}

console.log("Higher Order Function Examples:");
console.log(`Triple of 5: ${triple(5)}`);
console.log(`Quadruple of 5: ${quadruple(5)}`);
console.log(`Sum: ${applyOperation(10, 5, (x, y) => x + y)}`);
console.log(`Product: ${applyOperation(10, 5, (x, y) => x * y)}`);
console.log("✓ Takes function as argument OR returns function");
console.log("✓ Enables functional programming");
console.log("");

/**
 * ============================================
 * 10. RECURSIVE FUNCTION
 * ============================================
 */
console.log("🔟 RECURSIVE FUNCTION");
console.log("━".repeat(50));

// Recursive function - calls itself
function factorialRecursive(n) {
    // Base case
    if (n <= 1) return 1;
    // Recursive case
    return n * factorialRecursive(n - 1);
}

// Another example - sum of array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log("Recursive Function Examples:");
console.log(`Factorial of 5: ${factorialRecursive(5)}`);
console.log(`Sum of [1,2,3,4,5]: ${sumArray([1,2,3,4,5])}`);

// Tree traversal example
const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 3, children: [
            { value: 4, children: [] },
            { value: 5, children: [] }
        ]}
    ]
};

function traverseTree(node) {
    console.log(`Node value: ${node.value}`);
    node.children.forEach(child => traverseTree(child));
}

console.log("Tree traversal:");
traverseTree(tree);
console.log("✓ Function calls itself");
console.log("✓ Must have base case to avoid infinite loop");
console.log("✓ Used for tree traversal, mathematical sequences");
console.log("");

/**
 * ============================================
 * ADDITIONAL FUNCTION CONCEPTS
 * ============================================
 */
console.log("📚 ADDITIONAL FUNCTION CONCEPTS");
console.log("━".repeat(50));

/**
 * Default Parameters
 */
console.log("\n📌 Default Parameters:");
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet("John")); // Hello, John!
console.log(greet("Jane", "Hi")); // Hi, Jane!

/**
 * Rest Parameters (...)
 */
console.log("\n📌 Rest Parameters:");
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum of 1,2,3: ${sumAll(1, 2, 3)}`);
console.log(`Sum of 1,2,3,4,5: ${sumAll(1, 2, 3, 4, 5)}`);

/**
 * Spread Operator with Functions
 */
console.log("\n📌 Spread Operator:");
const nums = [10, 20, 30];
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(`Max of ${nums}: ${findMax(...nums)}`);

/**
 * Function Properties
 */
console.log("\n📌 Function Properties:");
function myFunction() {
    console.log("Executing myFunction");
}
myFunction.description = "This is a custom function";
console.log(`Function description: ${myFunction.description}`);
console.log(`Function name: ${myFunction.name}`);
console.log(`Function length (parameters): ${myFunction.length}`);

/**
 * Function Methods - call(), apply(), bind()
 */
console.log("\n📌 Function Methods (call, apply, bind):");
const person = {
    firstName: "John",
    lastName: "Doe"
};

function introduce(city, country) {
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
}

console.log(`call(): ${introduce.call(person, "New York", "USA")}`);
console.log(`apply(): ${introduce.apply(person, ["London", "UK"])}`);

const boundFunction = introduce.bind(person, "Paris");
console.log(`bind(): ${boundFunction("France")}`);

/**
 * ============================================
 * COMPARISON TABLE
 * ============================================
 */
console.log("\n📊 FUNCTIONS COMPARISON TABLE");
console.log("━".repeat(50));
console.log("| Type               | Hoisted | this binding | Syntax         |");
console.log("|--------------------|---------|--------------|----------------|");
console.log("| Function Declaration | ✅ Yes | Dynamic      | function f(){} |");
console.log("| Function Expression | ❌ No  | Dynamic      | const f = func |");
console.log("| Arrow Function      | ❌ No  | Lexical      | () => {}       |");
console.log("| IIFE                | N/A     | Dynamic      | (function(){})()|");
console.log("| Constructor         | ❌ No  | New object   | new Func()     |");
console.log("| Generator           | ✅ Yes | Dynamic      | function*(){}  |");
console.log("| Async               | ✅ Yes | Dynamic      | async function |");

/**
 * ============================================
 * PRACTICAL EXAMPLES
 * ============================================
 */
console.log("\n💡 PRACTICAL USE CASES");
console.log("━".repeat(50));

// 1. Event Handler
console.log("\n1. Event Handler (simulated):");
function handleClick(event) {
    console.log("Button clicked!", event);
}
console.log("handleClick function ready for event handling");

// 2. Form Validation
function validateForm(data) {
    const errors = {};
    if (!data.username) errors.username = "Username required";
    if (!data.email) errors.email = "Email required";
    return errors;
}
console.log("Validation function:", validateForm({ username: "john" }));

// 3. API Call Function
async function fetchAPI(endpoint) {
    try {
        console.log(`Fetching from ${endpoint}...`);
        // Simulated API call
        return { data: "API Response", status: 200 };
    } catch (error) {
        console.error("API Error:", error);
    }
}
fetchAPI("/users");

// 4. Debounce Function (Higher Order)
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 500);
console.log("Debounce function created (will execute after 500ms of no calls)");

// 5. Memoization (Caching)
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const expensiveFunction = (n) => {
    console.log(`Computing for ${n}...`);
    return n * n;
};
const memoized = memoize(expensiveFunction);
console.log(`First call: ${memoized(5)}`);
console.log(`Second call (cached): ${memoized(5)}`);

/**
 * ============================================
 * COMMON PITFALLS
 * ============================================
 */
console.log("\n⚠️ COMMON PITFALLS & BEST PRACTICES");
console.log("━".repeat(50));

console.log("\n❌ Pitfall 1: Forgetting 'return'");
function noReturn() {
    const x = 10;
    // No return statement
}
console.log(`noReturn() returns: ${noReturn()}`); // undefined

console.log("\n❌ Pitfall 2: Not handling async/await errors");
async function badAsync() {
    try {
        // Always use try-catch with async/await
        const data = await Promise.reject("Error!");
    } catch (error) {
        console.log("Caught error:", error);
    }
}

console.log("\n✅ Best Practices:");
console.log("1. Use meaningful function names");
console.log("2. Keep functions small and focused (Single Responsibility)");
console.log("3. Use default parameters instead of manual checks");
console.log("4. Prefer arrow functions for callbacks");
console.log("5. Use async/await over raw Promises");
console.log("6. Document complex functions with JSDoc comments");

/**
 * ============================================
 * SUMMARY
 * ============================================
 */
console.log("\n📝 SUMMARY");
console.log("━".repeat(50));
console.log("✅ Functions are reusable blocks of code");
console.log("✅ 10+ types of functions with different use cases");
console.log("✅ Function Declarations are hoisted, Expressions are not");
console.log("✅ Arrow functions have lexical 'this' binding");
console.log("✅ Higher Order Functions enable functional programming");
console.log("✅ Recursive functions must have base case");
console.log("✅ Async functions simplify Promise handling");
console.log("✅ Generators can pause/resume execution");

console.log("\n🎯 When to use which function type:");
console.log("- Function Declaration: Regular reusable functions");
console.log("- Arrow Function: Callbacks, array methods, preserving 'this'");
console.log("- IIFE: Module patterns, isolating code");
console.log("- Constructor: Creating multiple similar objects");
console.log("- Generator: Iterators, infinite sequences");
console.log("- Async: API calls, file operations, database queries");

console.log("\n===== FUNCTIONS GUIDE COMPLETED =====");
console.log("💡 Open DevTools → Sources → Add breakpoints to see execution!");