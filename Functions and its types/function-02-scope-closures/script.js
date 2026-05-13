console.log("===== FUNCTIONS - PART 2: SCOPE, CLOSURES & HOISTING =====");
console.log("");

/**
 * SECTION 1: GLOBAL VS LOCAL SCOPE
 */
console.log("📌 SECTION 1: GLOBAL VS LOCAL SCOPE");
console.log("━".repeat(50));

// Global scope variables
const globalVar = "I'm global";
let globalLet = "Also global";
var globalVarOld = "Global too";

console.log("Global scope variables:");
console.log("  globalVar:", globalVar);
console.log("  globalLet:", globalLet);
console.log("  globalVarOld:", globalVarOld);

function demonstrateScope() {
    // Local scope variables
    const localVar = "I'm local to function";
    let localLet = "Also local";
    var localVarOld = "Local too";
    
    console.log("\nInside function - can access both:");
    console.log("  Global:", globalVar);
    console.log("  Local:", localVar);
    
    // Can modify global variables
    globalLet = "Modified from inside function";
    
    return localVar;
}

demonstrateScope();
console.log("\nAfter function call:");
console.log("  Modified global:", globalLet);

// Cannot access local variables outside
try {
    console.log(localVar);
} catch(e) {
    console.log("  Cannot access localVar outside:", e.message);
}

/**
 * SECTION 2: BLOCK SCOPE (let/const vs var)
 */
console.log("\n📌 SECTION 2: BLOCK SCOPE");
console.log("━".repeat(50));

console.log("1️⃣ var - Function Scoped (NOT Block Scoped):");
if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
}
console.log("  varVariable accessible:", varVariable); // Works!
try {
    console.log("  letVariable:", letVariable);
} catch(e) {
    console.log("  letVariable NOT accessible:", e.message);
}
try {
    console.log("  constVariable:", constVariable);
} catch(e) {
    console.log("  constVariable NOT accessible:", e.message);
}

console.log("\n2️⃣ Block Scope Examples:");
{
    let blockScoped = "Only in this block";
    var functionScoped = "Leaks out";
    console.log("  Inside block - blockScoped:", blockScoped);
}
console.log("  Outside block - functionScoped:", functionScoped);
try {
    console.log("  Outside block - blockScoped:", blockScoped);
} catch(e) {
    console.log("  blockScoped not accessible:", e.message);
}

console.log("\n3️⃣ Loop Block Scope:");
for (let i = 0; i < 3; i++) {
    // i is block-scoped to the loop
    console.log(`  Loop iteration ${i}`);
}
try {
    console.log("  i outside loop:", i);
} catch(e) {
    console.log("  i not accessible outside:", e.message);
}

// var in loops - leaks!
for (var j = 0; j < 3; j++) {
    // j leaks outside
}
console.log("  j outside loop (var):", j); // Works! (bad)

/**
 * SECTION 3: LEXICAL SCOPE
 */
console.log("\n📌 SECTION 3: LEXICAL SCOPE");
console.log("━".repeat(50));

// Lexical scope = inner functions can access outer function variables
function outer() {
    const outerVar = "I'm from outer";
    
    function inner() {
        const innerVar = "I'm from inner";
        console.log("  Inner can access:", outerVar);
        console.log("  Inner can access:", innerVar);
    }
    
    inner();
    
    // Outer cannot access inner's variables
    try {
        console.log(innerVar);
    } catch(e) {
        console.log("  Outer cannot access innerVar:", e.message);
    }
}

outer();

// Nested lexical scope chain
console.log("\n✅ Lexical Scope Chain:");
function level1() {
    const var1 = "Level 1";
    
    function level2() {
        const var2 = "Level 2";
        
        function level3() {
            const var3 = "Level 3";
            console.log("  Level 3 can access:", var1, var2, var3);
        }
        
        level3();
        console.log("  Level 2 can access:", var1, var2);
        // Cannot access var3
    }
    
    level2();
    console.log("  Level 1 can access:", var1);
}

level1();

/**
 * SECTION 4: CLOSURES - THE HEART OF JAVASCRIPT
 */
console.log("\n📌 SECTION 4: CLOSURES");
console.log("━".repeat(50));

// Basic closure example
console.log("1️⃣ Basic Closure:");
function createCounter() {
    let count = 0; // This variable is "closed over"
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("  counter1():", counter1()); // 1
console.log("  counter1():", counter1()); // 2
console.log("  counter1():", counter1()); // 3
console.log("  counter2():", counter2()); // 1 (separate closure!)
console.log("  counter2():", counter2()); // 2

// Closure with parameters
console.log("\n2️⃣ Closure with Parameters:");
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("  double(5):", double(5));
console.log("  triple(5):", triple(5));
console.log("  quadruple(5):", quadruple(5));

// Practical closure - Private variables
console.log("\n3️⃣ Private Variables with Closure:");
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. New balance: $${balance}`;
            }
            return "Invalid deposit amount";
        },
        
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            }
            return "Insufficient funds or invalid amount";
        },
        
        getBalance() {
            return `Current balance: $${balance}`;
        }
    };
}

const myAccount = createBankAccount(1000);
console.log("  Bank Account:");
console.log("  ", myAccount.getBalance());
console.log("  ", myAccount.deposit(500));
console.log("  ", myAccount.withdraw(200));
console.log("  ", myAccount.getBalance());
console.log("  Cannot access balance directly:", myAccount.balance); // undefined

// Closure in loops - classic problem and solution
console.log("\n4️⃣ Closure in Loops - Classic Problem:");

// Problem: All functions capture the same variable
console.log("  ❌ Problem (using var):");
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`    var loop: ${i}`); // All print 4!
    }, 100);
}

// Solution 1: Use let (creates new binding each iteration)
console.log("  ✅ Solution 1 (using let):");
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`    let loop: ${i}`); // Prints 1,2,3 correctly
    }, 200);
}

// Solution 2: IIFE closure
console.log("  ✅ Solution 2 (IIFE closure):");
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(`    IIFE closure: ${j}`); // Prints 1,2,3 correctly
        }, 300);
    })(i);
}

// Closure for memoization (caching)
console.log("\n5️⃣ Memoization with Closure:");
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            console.log(`  Returning cached result for ${args}`);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        console.log(`  Computing and caching result for ${args}`);
        return result;
    };
}

function expensiveOperation(n) {
    // Simulate expensive calculation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
}

const memoizedExpensive = memoize(expensiveOperation);
console.log("  First call:", memoizedExpensive(5));
console.log("  Second call (cached):", memoizedExpensive(5));
console.log("  Different argument:", memoizedExpensive(6));

/**
 * SECTION 5: HOISTING
 */
console.log("\n📌 SECTION 5: HOISTING");
console.log("━".repeat(50));

// Function hoisting
console.log("1️⃣ Function Hoisting:");
sayHi("John"); // Works! Function is hoisted

function sayHi(name) {
    console.log(`  Hello, ${name}!`);
}

// Variable hoisting with var
console.log("\n2️⃣ var Hoisting:");
console.log("  Before declaration:", varVariable2); // undefined, not error!
var varVariable2 = "I'm hoisted";
console.log("  After declaration:", varVariable2);

// What happens during hoisting:
// var varVariable2; // Declaration hoisted
// console.log(varVariable2); // undefined
// varVariable2 = "I'm hoisted";

// let/const hoisting (TDZ)
console.log("\n3️⃣ let/const Hoisting (Temporal Dead Zone):");
try {
    console.log(letVariable); // ReferenceError!
} catch(e) {
    console.log("  Cannot access let before declaration:", e.message);
}
let letVariable = "I'm in TDZ";

try {
    console.log(constVariable); // ReferenceError!
} catch(e) {
    console.log("  Cannot access const before declaration:", e.message);
}
const constVariable = "I'm also in TDZ";

console.log("\n4️⃣ Function Expression Hoisting:");
// sayHello(); // Error! Not hoisted
const sayHello = function() {
    console.log("  Hello from function expression");
};
sayHello(); // Works after declaration

console.log("\n5️⃣ Arrow Function Hoisting:");
// greet(); // Error! Not hoisted
const greet = () => console.log("  Hello from arrow function");
greet(); // Works after declaration

/**
 * SECTION 6: TEMPORAL DEAD ZONE (TDZ) IN DETAIL
 */
console.log("\n📌 SECTION 6: TEMPORAL DEAD ZONE (TDZ)");
console.log("━".repeat(50));

console.log("What is TDZ?");
console.log("  The period between entering scope and declaration where variables");
console.log("  exist but cannot be accessed.");

{
    // Start of block scope - TDZ starts for myVar
    console.log("  Before TDZ zone");
    
    try {
        console.log(myVar); // ReferenceError - in TDZ
    } catch(e) {
        console.log("  Cannot access:", e.message);
    }
    
    let myVar = "Declared"; // TDZ ends here
    console.log("  After TDZ:", myVar);
}

// TDZ with typeof (safe for var, unsafe for let)
console.log("\n✅ typeof behavior:");
console.log("  typeof undeclaredVar:", typeof undeclaredVar); // "undefined"
try {
    console.log(typeof tdzVar); // ReferenceError!
} catch(e) {
    console.log("  typeof on let in TDZ:", e.message);
}
let tdzVar = "value";

/**
 * SECTION 7: PRACTICAL CLOSURE EXAMPLES
 */
console.log("\n📌 SECTION 7: PRACTICAL CLOSURE EXAMPLES");
console.log("━".repeat(50));

// 1. Debounce function
console.log("\n✅ Debounce Function:");
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedLog = debounce((msg) => {
    console.log("  Debounced:", msg);
}, 500);

debouncedLog("First call");
debouncedLog("Second call");
debouncedLog("Third call");
setTimeout(() => {
    console.log("  After 600ms - only last call executes");
}, 600);

// 2. Once function (ensures function runs only once)
console.log("\n✅ Once Function:");
function once(func) {
    let hasRun = false;
    let result;
    
    return function(...args) {
        if (!hasRun) {
            hasRun = true;
            result = func.apply(this, args);
        }
        return result;
    };
}

const initialize = once(() => {
    console.log("  Initializing... (only once)");
    return { status: "initialized", timestamp: Date.now() };
});

console.log("  First call:", initialize());
console.log("  Second call:", initialize()); // Same result, no re-initialization

// 3. Currying with closures
console.log("\n✅ Currying:");
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

const add5 = curryAdd(5);
const add5and3 = add5(3);
console.log("  curryAdd(5)(3)(2):", curryAdd(5)(3)(2));
console.log("  add5(3)(2):", add5(3)(2));
console.log("  add5and3(2):", add5and3(2));

// 4. Event handlers with closure
console.log("\n✅ Event Handler Factory:");
function createClickHandler(message) {
    return function() {
        console.log("  Handler says:", message);
    };
}

const handler1 = createClickHandler("Button 1 clicked");
const handler2 = createClickHandler("Button 2 clicked");
console.log("  Created handlers:", handler1, handler2);
// In real app: button1.onclick = handler1

/**
 * SECTION 8: COMMON PITFALLS WITH CLOSURES
 */
console.log("\n📌 SECTION 8: COMMON PITFALLS");
console.log("━".repeat(50));

console.log("\n❌ Pitfall 1: Memory leaks with closures");
function createLargeClosure() {
    const largeArray = new Array(1000000).fill("data");
    
    return function() {
        // This closure keeps largeArray in memory!
        console.log("  Closure using largeArray length:", largeArray.length);
    };
}
const leaky = createLargeClosure();
console.log("  largeArray stays in memory even after function returns");

console.log("\n❌ Pitfall 2: Unexpected variable sharing");
function createFunctions() {
    const functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(`  Value: ${i}`); // All print 3!
        });
    }
    return functions;
}
const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

console.log("\n✅ Solution: Use let or IIFE");
function createFunctionsFixed() {
    const functions = [];
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(`  Value: ${i}`); // Prints 0,1,2
        });
    }
    return functions;
}
const fixedFuncs = createFunctionsFixed();
fixedFuncs[0]();
fixedFuncs[1]();
fixedFuncs[2]();

/**
 * SECTION 9: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 9: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create a counter with increment/decrement
console.log("\n✅ Exercise 1: Counter with Closure");
function createAdvancedCounter(initial = 0) {
    let count = initial;
    
    return {
        increment(step = 1) {
            count += step;
            return count;
        },
        decrement(step = 1) {
            count -= step;
            return count;
        },
        reset() {
            count = initial;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const myCounter = createAdvancedCounter(10);
console.log("  Initial:", myCounter.getValue());
console.log("  Increment:", myCounter.increment());
console.log("  Increment by 5:", myCounter.increment(5));
console.log("  Decrement:", myCounter.decrement());
console.log("  Reset:", myCounter.reset());

// Exercise 2: Create a function that remembers its calls
console.log("\n✅ Exercise 2: Function Call Tracker");
function createTracker() {
    let callCount = 0;
    let history = [];
    
    return function(func, ...args) {
        callCount++;
        const startTime = performance.now();
        const result = func(...args);
        const endTime = performance.now();
        
        history.push({
            callNumber: callCount,
            args,
            result,
            duration: (endTime - startTime).toFixed(2) + "ms",
            timestamp: new Date()
        });
        
        return {
            result,
            stats: { callCount, lastCall: history[history.length - 1] }
        };
    };
}

const tracker = createTracker();
const square2 = (x) => x * x;
console.log("  Call 1:", tracker(square2, 5));
console.log("  Call 2:", tracker(square2, 10));
console.log("  Call 3:", tracker(square2, 15));

// Exercise 3: Rate limiter with closure
console.log("\n✅ Exercise 3: Rate Limiter");
function rateLimiter(limit, interval) {
    let calls = [];
    
    return function(fn, ...args) {
        const now = Date.now();
        calls = calls.filter(time => now - time < interval);
        
        if (calls.length < limit) {
            calls.push(now);
            return fn(...args);
        } else {
            return `Rate limit exceeded. Max ${limit} calls per ${interval/1000}s`;
        }
    };
}

const limitedLog = rateLimiter(2, 2000);
console.log("  Call 1:", limitedLog(() => "Success 1"));
console.log("  Call 2:", limitedLog(() => "Success 2"));
console.log("  Call 3:", limitedLog(() => "Success 3"));

/**
 * SECTION 10: SUMMARY
 */
console.log("\n📝 SUMMARY - FUNCTIONS PART 2");
console.log("━".repeat(50));
console.log("✅ Scope - Where variables are accessible");
console.log("  • Global - Accessible everywhere");
console.log("  • Function - Accessible only inside function");
console.log("  • Block - Accessible only inside {} (let/const)");
console.log("✅ Lexical Scope - Inner functions access outer variables");
console.log("✅ Closure - Function that remembers its lexical scope");
console.log("✅ Hoisting - Declarations moved to top");
console.log("  • Function declarations - Fully hoisted");
console.log("  • var - Hoisted as undefined");
console.log("  • let/const - Hoisted but in TDZ");
console.log("✅ TDZ - Cannot access before declaration");

console.log("\n🎯 Common Closure Use Cases:");
console.log("  • Private variables");
console.log("  • Function factories");
console.log("  • Memoization/Caching");
console.log("  • Debouncing/Throttling");
console.log("  • Event handlers");
console.log("  • Module pattern");

console.log("\n===== END OF FUNCTIONS PART 2 =====");