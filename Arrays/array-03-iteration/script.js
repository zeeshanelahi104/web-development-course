console.log("===== ARRAYS - PART 3: ITERATION METHODS =====");
console.log("");

/**
 * SECTION 1: TRADITIONAL LOOPS
 */
console.log("📌 SECTION 1: TRADITIONAL LOOPS");
console.log("━".repeat(50));

const fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log("Array:", fruits);

// 1. for loop - most control
console.log("\n1️⃣ for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`  Index ${i}: ${fruits[i]}`);
}

// 2. for...of loop (ES6) - values only
console.log("\n2️⃣ for...of loop:");
for (const fruit of fruits) {
    console.log(`  ${fruit}`);
}

// 3. for...in loop (not recommended for arrays)
console.log("\n3️⃣ for...in loop (NOT recommended for arrays):");
for (const index in fruits) {
    console.log(`  Index ${index}: ${fruits[index]}`);
}

// 4. while loop
console.log("\n4️⃣ while loop:");
let i = 0;
while (i < fruits.length) {
    console.log(`  ${fruits[i]}`);
    i++;
}

// 5. do...while loop
console.log("\n5️⃣ do...while loop:");
let j = 0;
do {
    console.log(`  ${fruits[j]}`);
    j++;
} while (j < fruits.length);

/**
 * SECTION 2: forEach() METHOD
 */
console.log("\n📌 SECTION 2: forEach() Method");
console.log("━".repeat(50));

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// Basic forEach
console.log("\n1️⃣ Basic forEach:");
numbers.forEach(function(num) {
    console.log(`  Number: ${num}`);
});

// forEach with index
console.log("\n2️⃣ forEach with index:");
numbers.forEach((num, index) => {
    console.log(`  Index ${index}: ${num}`);
});

// forEach with array reference
console.log("\n3️⃣ forEach with full parameters:");
numbers.forEach((num, index, array) => {
    console.log(`  ${num} is at index ${index} of [${array}]`);
});

// Practical example - calculate sum
console.log("\n✅ Practical - Calculate sum:");
let sum = 0;
numbers.forEach(num => sum += num);
console.log(`  Sum of [${numbers}] = ${sum}`);

// forEach vs for loop performance
console.log("\n⚠️ Note: forEach is slower than for loop but more readable");

/**
 * SECTION 3: map() - TRANSFORM ARRAYS
 */
console.log("\n📌 SECTION 3: map() - Transform Arrays");
console.log("━".repeat(50));

const prices = [10, 20, 30, 40, 50];
console.log("Original prices:", prices);

// Double each price
const doubled = prices.map(price => price * 2);
console.log("\n1️⃣ Double each price:", doubled);

// Add tax
const withTax = prices.map(price => price * 1.1);
console.log("2️⃣ Add 10% tax:", withTax);

// Format as currency
const formatted = prices.map(price => `$${price}.00`);
console.log("3️⃣ Format as currency:", formatted);

// Transform objects
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
];
const productNames = products.map(product => product.name);
console.log("4️⃣ Extract names:", productNames);

const discounted = products.map(product => ({
    name: product.name,
    price: product.price * 0.9,
    discount: "10% off"
}));
console.log("5️⃣ Add discount:", discounted);

// Chaining map
const result = [1, 2, 3, 4]
    .map(x => x * 2)
    .map(x => x + 1);
console.log("6️⃣ Chained map:", result);

/**
 * SECTION 4: filter() - FILTER ARRAYS
 */
console.log("\n📌 SECTION 4: filter() - Filter Arrays");
console.log("━".repeat(50));

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original:", nums);

// Filter even numbers
const evens = nums.filter(num => num % 2 === 0);
console.log("\n1️⃣ Even numbers:", evens);

// Filter numbers greater than 5
const greaterThan5 = nums.filter(num => num > 5);
console.log("2️⃣ Numbers > 5:", greaterThan5);

// Filter with objects
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "David", age: 16, active: false }
];

const adults = users.filter(user => user.age >= 18);
console.log("3️⃣ Adults:", adults);

const activeUsers = users.filter(user => user.active);
console.log("4️⃣ Active users:", activeUsers);

// Complex filtering
const adultActiveUsers = users.filter(user => user.age >= 18 && user.active);
console.log("5️⃣ Adult active users:", adultActiveUsers);

// Filter falsy values
const mixed = [0, 1, false, 2, "", 3, null, undefined, "hello"];
const truthy = mixed.filter(Boolean);
console.log("6️⃣ Remove falsy values:", truthy);

/**
 * SECTION 5: reduce() - REDUCE TO SINGLE VALUE
 */
console.log("\n📌 SECTION 5: reduce() - Reduce to Single Value");
console.log("━".repeat(50));

const values = [1, 2, 3, 4, 5];
console.log("Array:", values);

// Sum all numbers
const sum1 = values.reduce((acc, curr) => acc + curr, 0);
console.log("\n1️⃣ Sum:", sum1);

// Product of all numbers
const product = values.reduce((acc, curr) => acc * curr, 1);
console.log("2️⃣ Product:", product);

// Find maximum
const max = values.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("3️⃣ Maximum:", max);

// Count occurrences
const fruits2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits2.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("4️⃣ Count occurrences:", count);

// Group by property
const people = [
    { name: "Alice", age: 25, city: "NYC" },
    { name: "Bob", age: 30, city: "LA" },
    { name: "Charlie", age: 25, city: "NYC" },
    { name: "David", age: 30, city: "Chicago" }
];
const byAge = people.reduce((acc, person) => {
    if (!acc[person.age]) acc[person.age] = [];
    acc[person.age].push(person);
    return acc;
}, {});
console.log("5️⃣ Group by age:", byAge);

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("6️⃣ Flatten array:", flat);

/**
 * SECTION 6: find() and findIndex()
 */
console.log("\n📌 SECTION 6: find() and findIndex()");
console.log("━".repeat(50));

const inventory = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Mouse", price: 20, inStock: false },
    { id: 3, name: "Keyboard", price: 50, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: false }
];
console.log("Inventory:", inventory);

// find() - returns first match
console.log("\n1️⃣ find() - First match:");
const laptop = inventory.find(item => item.name === "Laptop");
console.log("  Found:", laptop);

const inStock = inventory.find(item => item.inStock);
console.log("  First in stock:", inStock);

// findIndex() - returns index
console.log("\n2️⃣ findIndex() - Index of match:");
const mouseIndex = inventory.findIndex(item => item.name === "Mouse");
console.log("  Mouse index:", mouseIndex);

const notFound = inventory.find(item => item.name === "Phone");
console.log("  Not found:", notFound); // undefined

// find with complex condition
const expensiveInStock = inventory.find(item => item.price > 100 && item.inStock);
console.log("  Expensive and in stock:", expensiveInStock);

/**
 * SECTION 7: some() and every()
 */
console.log("\n📌 SECTION 7: some() and every() - Test Conditions");
console.log("━".repeat(50));

const scores = [85, 92, 78, 88, 95];
console.log("Scores:", scores);

// some() - at least one passes
console.log("\n1️⃣ some() - At least one:");
const hasPassing = scores.some(score => score >= 90);
console.log("  Any score >= 90?", hasPassing);

const hasPerfect = scores.some(score => score === 100);
console.log("  Any perfect score?", hasPerfect);

// every() - all must pass
console.log("\n2️⃣ every() - All must pass:");
const allPassing = scores.every(score => score >= 60);
console.log("  All scores >= 60?", allPassing);

const allExcellent = scores.every(score => score >= 90);
console.log("  All scores >= 90?", allExcellent);

// Practical examples
console.log("\n✅ Practical Examples:");
const shoppingCart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Mouse", price: 20, quantity: 2 },
    { item: "USB Cable", price: 10, quantity: 3 }
];

const hasExpensive = shoppingCart.some(item => item.price > 500);
console.log("  Cart has expensive item?", hasExpensive);

const allInStock = shoppingCart.every(item => item.quantity > 0);
console.log("  All items in stock?", allInStock);

/**
 * SECTION 8: Other Iteration Methods
 */
console.log("\n📌 SECTION 8: Other Useful Methods");
console.log("━".repeat(50));

// keys(), values(), entries()
const letters = ["a", "b", "c"];
console.log("Array:", letters);

console.log("\n1️⃣ keys() - Get indices:");
console.log("  [...letters.keys()]:", [...letters.keys()]);

console.log("\n2️⃣ values() - Get values:");
console.log("  [...letters.values()]:", [...letters.values()]);

console.log("\n3️⃣ entries() - Get [index, value] pairs:");
console.log("  [...letters.entries()]:", [...letters.entries()]);

// flatMap() - map then flatten
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log("\n4️⃣ flatMap() - Map and flatten:");
console.log("  Result:", words);

// Practical example - duplicate numbers
const duplicates = [1, 2, 3].flatMap(x => [x, x]);
console.log("  Duplicate each number:", duplicates);

/**
 * SECTION 9: Performance Comparison
 */
console.log("\n📌 SECTION 9: Performance Comparison");
console.log("━".repeat(50));

const largeArray = Array.from({ length: 100000 }, (_, i) => i);
console.log("Testing with 100,000 elements...");

console.log("\nMethod Performance (fastest to slowest):");
console.log("1️⃣ for loop - FASTEST (most control)");
console.log("2️⃣ for...of - FAST (modern, clean)");
console.log("3️⃣ forEach - MEDIUM (functional, readable)");
console.log("4️⃣ map/filter/reduce - SLOWER (but creates new arrays)");

console.log("\n💡 When to use which:");
console.log("  • Need speed? → for loop");
console.log("  • Need readability? → forEach, map, filter");
console.log("  • Need chaining? → map, filter, reduce");
console.log("  • Need break/continue? → for loop or for...of");
console.log("  • Need async operations? → for...of");

/**
 * SECTION 10: Practice Exercises
 */
console.log("\n📌 SECTION 10: Practice Exercises");
console.log("━".repeat(50));

// Exercise 1: Transform array
const temps = [32, 68, 75, 82, 95];
const celsius = temps.map(f => ((f - 32) * 5) / 9);
console.log("Exercise 1 - Fahrenheit to Celsius:");
console.log(`  ${temps}°F = ${celsius.map(c => c.toFixed(1))}°C`);

// Exercise 2: Filter products
const products2 = [
    { name: "Phone", price: 699, category: "Electronics" },
    { name: "Shirt", price: 29, category: "Clothing" },
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Jeans", price: 59, category: "Clothing" }
];
const electronics = products2.filter(p => p.category === "Electronics");
console.log("\nExercise 2 - Electronics:", electronics);

// Exercise 3: Calculate total
const cart2 = [
    { name: "Book", price: 15, quantity: 2 },
    { name: "Pen", price: 2, quantity: 5 },
    { name: "Notebook", price: 5, quantity: 3 }
];
const total = cart2.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log("\nExercise 3 - Cart total: $${total}");

// Exercise 4: Check inventory
const hasElectronics = products2.some(p => p.category === "Electronics");
const allUnder100 = products2.every(p => p.price < 100);
console.log("\nExercise 4:");
console.log(`  Has electronics? ${hasElectronics}`);
console.log(`  All under $100? ${allUnder100}`);

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - ARRAYS PART 3");
console.log("━".repeat(50));
console.log("✅ forEach() - Execute function for each element");
console.log("✅ map() - Transform each element, returns new array");
console.log("✅ filter() - Filter elements, returns new array");
console.log("✅ reduce() - Reduce to single value");
console.log("✅ find() - Find first matching element");
console.log("✅ some() - Check if any element matches");
console.log("✅ every() - Check if all elements match");
console.log("✅ for...of - Modern loop for values");
console.log("✅ Traditional for loop - Fastest performance");

console.log("\n🎯 Method Selection Guide:");
console.log("  • Need to loop? → forEach or for...of");
console.log("  • Need to transform? → map");
console.log("  • Need to filter? → filter");
console.log("  • Need one value? → reduce");
console.log("  • Need to find one? → find");
console.log("  • Need to test? → some/every");
console.log("  • Need performance? → for loop");

console.log("\n===== END OF ARRAYS PART 3 =====");