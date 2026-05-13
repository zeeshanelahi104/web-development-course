console.log("===== FUNCTIONS - PART 4: HIGHER-ORDER FUNCTIONS =====");
console.log("");

/**
 * SECTION 1: WHAT ARE HIGHER-ORDER FUNCTIONS?
 */
console.log("📌 SECTION 1: WHAT ARE HIGHER-ORDER FUNCTIONS?");
console.log("━".repeat(50));

// Higher-Order Function = takes a function as argument OR returns a function
console.log("1️⃣ HOF that takes a function:");
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const addHOF = (x, y) => x + y;
const multiplyHOF = (x, y) => x * y;

console.log("  applyOperation(5, 3, add):", applyOperation(5, 3, addHOF));
console.log("  applyOperation(5, 3, multiply):", applyOperation(5, 3, multiplyHOF));

console.log("\n2️⃣ HOF that returns a function:");
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double2 = createMultiplier(2);
const triple2 = createMultiplier(3);
console.log("  double2(5):", double2(5));
console.log("  triple2(5):", triple2(5));

/**
 * SECTION 2: BUILT-IN HIGHER-ORDER FUNCTIONS
 */
console.log("\n📌 SECTION 2: BUILT-IN HIGHER-ORDER FUNCTIONS");
console.log("━".repeat(50));

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
console.log("1️⃣ map() - Transform:");
const squared2 = numbers2.map(n => n * n);
const doubled3 = numbers2.map(n => n * 2);
const stringified = numbers2.map(n => `Number ${n}`);
console.log("  Squared:", squared2);
console.log("  Doubled:", doubled3);
console.log("  Stringified:", stringified);

// filter - filter elements
console.log("\n2️⃣ filter() - Filter:");
const evens2 = numbers2.filter(n => n % 2 === 0);
const odds = numbers2.filter(n => n % 2 !== 0);
const greaterThan5 = numbers2.filter(n => n > 5);
console.log("  Evens:", evens2);
console.log("  Odds:", odds);
console.log("  Greater than 5:", greaterThan5);

// reduce - reduce to single value
console.log("\n3️⃣ reduce() - Reduce:");
const sum2 = numbers2.reduce((acc, curr) => acc + curr, 0);
const product2 = numbers2.reduce((acc, curr) => acc * curr, 1);
const max2 = numbers2.reduce((max, curr) => Math.max(max, curr), -Infinity);
console.log("  Sum:", sum2);
console.log("  Product:", product2);
console.log("  Max:", max2);

// forEach - iterate
console.log("\n4️⃣ forEach() - Iterate:");
numbers2.slice(0, 5).forEach(n => console.log("  ", n));

// some/every - test conditions
console.log("\n5️⃣ some() / every() - Test:");
const hasEven = numbers2.some(n => n % 2 === 0);
const allPositive = numbers2.every(n => n > 0);
const allEven = numbers2.every(n => n % 2 === 0);
console.log("  Has even numbers:", hasEven);
console.log("  All positive:", allPositive);
console.log("  All even:", allEven);

// find/findIndex - find elements
console.log("\n6️⃣ find() / findIndex() - Find:");
const firstEven = numbers2.find(n => n % 2 === 0);
const firstEvenIndex = numbers2.findIndex(n => n % 2 === 0);
console.log("  First even:", firstEven);
console.log("  First even index:", firstEvenIndex);

/**
 * SECTION 3: FUNCTION COMPOSITION
 */
console.log("\n📌 SECTION 3: FUNCTION COMPOSITION");
console.log("━".repeat(50));

// Basic composition
console.log("1️⃣ Basic Composition:");
const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const composeLeft = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const shout = compose(exclaim, toUpper);
const excited = composeLeft(toUpper, exclaim);
const repeatedShout = compose(repeat, exclaim, toUpper);

console.log("  shout('hello'):", shout("hello"));
console.log("  excited('hello'):", excited("hello"));
console.log("  repeatedShout('hi'):", repeatedShout("hi"));

// Pipe function (compose from left to right)
console.log("\n2️⃣ Pipe Function:");
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const processString = pipe(
    str => str.toLowerCase(),
    str => str.split(''),
    arr => arr.reverse(),
    arr => arr.join(''),
    str => str.toUpperCase()
);

console.log("  processString('Hello World'):", processString("Hello World"));

// Practical composition example
console.log("\n3️⃣ Practical Composition:");
const users2 = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "David", age: 20, active: true }
];

const getActiveUsers = users => users.filter(u => u.active);
const getNames = users => users.map(u => u.name);
const sortNames = names => [...names].sort();
const joinNames = names => names.join(", ");

const getActiveUserNames = pipe(
    getActiveUsers,
    getNames,
    sortNames,
    joinNames
);

console.log("  Active users:", getActiveUserNames(users2));

/**
 * SECTION 4: CURRYING
 */
console.log("\n📌 SECTION 4: CURRYING");
console.log("━".repeat(50));

// Manual currying
console.log("1️⃣ Manual Currying:");
function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("  add3(1)(2)(3):", add3(1)(2)(3));

// Arrow function currying
const curriedAdd = a => b => c => a + b + c;
console.log("  curriedAdd(1)(2)(3):", curriedAdd(1)(2)(3));

// Generic curry function
console.log("\n2️⃣ Generic Curry Function:");
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, [...args, ...moreArgs]);
        };
    };
}

const multiply3 = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply3);

console.log("  curriedMultiply(2)(3)(4):", curriedMultiply(2)(3)(4));
console.log("  curriedMultiply(2, 3)(4):", curriedMultiply(2, 3)(4));
console.log("  curriedMultiply(2)(3, 4):", curriedMultiply(2)(3, 4));

// Practical currying - discount calculator
console.log("\n3️⃣ Practical Currying - Discount:");
const applyDiscount = curry((discount, price) => price * (1 - discount / 100));

const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);
const fiftyPercentOff = applyDiscount(50);

console.log("  Ten percent off $100:", tenPercentOff(100));
console.log("  Twenty percent off $100:", twentyPercentOff(100));
console.log("  Fifty percent off $100:", fiftyPercentOff(100));

// Currying with configuration
console.log("\n4️⃣ Currying for Configuration:");
const createApiCall = curry((baseUrl, endpoint, params) => {
    const url = `${baseUrl}/${endpoint}?${new URLSearchParams(params)}`;
    return `Calling: ${url}`;
});

const apiV1 = createApiCall("https://api.example.com/v1");
const apiV2 = createApiCall("https://api.example.com/v2");

const usersApi = apiV1("users");
const productsApi = apiV1("products");

console.log("  Users API:", usersApi({ id: 1, fields: "name,email" }));
console.log("  Products API:", productsApi({ category: "electronics" }));

/**
 * SECTION 5: PARTIAL APPLICATION
 */
console.log("\n📌 SECTION 5: PARTIAL APPLICATION");
console.log("━".repeat(50));

// Partial application vs Currying
console.log("1️⃣ Partial Application:");
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

function greet4(greeting, punctuation, name) {
    return `${greeting}, ${name}${punctuation}`;
}

const sayHello2 = partial(greet4, "Hello", "!");
const sayHi2 = partial(greet4, "Hi", "~");

console.log("  sayHello2('John'):", sayHello2("John"));
console.log("  sayHi2('Jane'):", sayHi2("Jane"));

// Partial with placeholder
console.log("\n2️⃣ Partial with Placeholder:");
function partialWithPlaceholder(fn, ...presetArgs) {
    return function(...laterArgs) {
        const args = [];
        let laterIndex = 0;
        
        for (const arg of presetArgs) {
            if (arg === partialWithPlaceholder._) {
                args.push(laterArgs[laterIndex++]);
            } else {
                args.push(arg);
            }
        }
        
        args.push(...laterArgs.slice(laterIndex));
        return fn(...args);
    };
}

partialWithPlaceholder._ = Symbol("placeholder");

const greet5 = (greeting, name, punctuation) => `${greeting}, ${name}${punctuation}`;
const greetHello = partialWithPlaceholder(greet5, "Hello", partialWithPlaceholder._, "!");
console.log("  greetHello('Alice'):", greetHello("Alice"));

/**
 * SECTION 6: PURE FUNCTIONS & IMMUTABILITY
 */
console.log("\n📌 SECTION 6: PURE FUNCTIONS & IMMUTABILITY");
console.log("━".repeat(50));

// Pure function - same input always same output, no side effects
console.log("1️⃣ Pure Functions:");
// Impure - modifies external state
let counter3 = 0;
function impureIncrement() {
    return ++counter3; // Side effect!
}

// Pure - no side effects
function pureAdd(a, b) {
    return a + b; // Same input = same output
}

console.log("  pureAdd(2, 3):", pureAdd(2, 3));
console.log("  pureAdd(2, 3):", pureAdd(2, 3)); // Always 5

// Immutability examples
console.log("\n2️⃣ Immutability:");
const originalArr2 = [1, 2, 3];

// Impure (modifies original)
function impurePush(arr, item) {
    arr.push(item);
    return arr;
}

// Pure (returns new array)
function purePush(arr, item) {
    return [...arr, item];
}

const impureResult = impurePush(originalArr2, 4);
console.log("  Impure - original changed:", originalArr2);

const originalArr3 = [1, 2, 3];
const pureResult = purePush(originalArr3, 4);
console.log("  Pure - original unchanged:", originalArr3);
console.log("  Pure - new array:", pureResult);

// Immutable updates
console.log("\n3️⃣ Immutable Updates:");
const user3 = { name: "Alice", age: 25, address: { city: "NYC" } };

// Immutable update
const updatedUser = {
    ...user3,
    age: 26,
    address: { ...user3.address, zip: "10001" }
};

console.log("  Original:", user3);
console.log("  Updated:", updatedUser);
console.log("  Original unchanged:", user3);

/**
 * SECTION 7: FUNCTIONAL PROGRAMMING PATTERNS
 */
console.log("\n📌 SECTION 7: FUNCTIONAL PROGRAMMING PATTERNS");
console.log("━".repeat(50));

// 1. MapReduce pattern
console.log("\n✅ MapReduce Pattern:");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapReduce = (arr, mapFn, reduceFn, initial) => 
    arr.map(mapFn).reduce(reduceFn, initial);

const sumOfSquares = mapReduce(
    data,
    n => n * n,
    (acc, val) => acc + val,
    0
);
console.log("  Sum of squares:", sumOfSquares);

// 2. Transducer pattern
console.log("\n✅ Transducer Pattern:");
const compose2 = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const filter = predicate => reducer => (acc, val) => 
    predicate(val) ? reducer(acc, val) : acc;
const map = transform => reducer => (acc, val) => 
    reducer(acc, transform(val));

const transduce = (transducer, reducer, initial, array) => 
    array.reduce(transducer(reducer), initial);

const doubleEvenNumbers = compose2(
    filter(n => n % 2 === 0),
    map(n => n * 2)
);

const result3 = transduce(
    doubleEvenNumbers,
    (acc, val) => [...acc, val],
    [],
    [1, 2, 3, 4, 5, 6]
);
console.log("  Double even numbers:", result3);

// 3. Lens pattern for immutable updates
console.log("\n✅ Lens Pattern:");
const lens = (getter, setter) => ({
    get: obj => getter(obj),
    set: (val, obj) => setter(val, obj),
    over: (fn, obj) => setter(fn(getter(obj)), obj)
});

const propLens = prop => lens(
    obj => obj[prop],
    (val, obj) => ({ ...obj, [prop]: val })
);

const user4 = { name: "John", age: 30, address: { city: "Boston" } };
const nameLens = propLens("name");
const ageLens = propLens("age");

console.log("  Original:", user4);
console.log("  Name:", nameLens.get(user4));
console.log("  Updated age:", ageLens.set(31, user4));

/**
 * SECTION 8: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 8: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create a pipe function for data transformation
console.log("\n✅ Exercise 1: Data Transformation Pipeline");
const products2 = [
    { name: "Laptop", price: 1000, category: "Electronics", inStock: true },
    { name: "Shirt", price: 30, category: "Clothing", inStock: false },
    { name: "Phone", price: 500, category: "Electronics", inStock: true },
    { name: "Jeans", price: 60, category: "Clothing", inStock: true }
];

const electronicsPipeline = pipe(
    products => products.filter(p => p.category === "Electronics"),
    products => products.filter(p => p.inStock),
    products => products.map(p => ({ ...p, priceWithTax: p.price * 1.1 })),
    products => products.sort((a, b) => a.price - b.price)
);

console.log("  Electronics in stock:", electronicsPipeline(products2));

// Exercise 2: Create a curry function for logging
console.log("\n✅ Exercise 2: Curried Logger");
const log = curry((level, timestamp, message) => {
    return `[${level}] ${timestamp}: ${message}`;
});

const currentTime = () => new Date().toISOString();
const infoLog = log("INFO")(currentTime());
const errorLog = log("ERROR")(currentTime());

console.log("  Info:", infoLog("Application started"));
console.log("  Error:", errorLog("Something went wrong"));

// Exercise 3: Function composition for validation
console.log("\n✅ Exercise 3: Validation Pipeline");
const isNotEmpty = str => str && str.trim().length > 0;
const isEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isMinLength = min => str => str.length >= min;

const validateEmail = pipe(
    isNotEmpty,
    isEmail,
    isValid => isValid ? "Valid email" : "Invalid email"
);

console.log("  'test@email.com':", validateEmail("test@email.com"));
console.log("  'invalid':", validateEmail("invalid"));

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - FUNCTIONS PART 4");
console.log("━".repeat(50));
console.log("✅ Higher-Order Function - Takes/returns functions");
console.log("✅ Built-in HOFs - map, filter, reduce, forEach");
console.log("✅ Function Composition - Combine functions");
console.log("✅ Currying - Transform multi-arg function to chain");
console.log("✅ Partial Application - Fix some arguments");
console.log("✅ Pure Functions - No side effects, deterministic");
console.log("✅ Immutability - Don't modify, create new copies");

console.log("\n🎯 When to use:");
console.log("  • Data transformation → map/filter/reduce");
console.log("  • Reusable logic → Currying");
console.log("  • Pipeline processing → Composition");
console.log("  • State management → Immutability");
console.log("  • Predictable code → Pure functions");

console.log("\n===== END OF FUNCTIONS PART 4 =====");
console.log("\n🎉 Congratulations! You've completed all Function topics!");