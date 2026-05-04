console.log("===== OBJECTS - PART 2: ITERATION & TRANSFORMATION =====");
console.log("");

/**
 * SECTION 1: for...in LOOP
 */
console.log("📌 SECTION 1: for...in Loop");
console.log("━".repeat(50));

const user = {
    name: "Alice",
    age: 28,
    city: "New York",
    occupation: "Engineer",
    isActive: true
};
console.log("User object:", user);

// Basic for...in
console.log("\n1️⃣ Basic for...in:");
for (let key in user) {
    console.log(`  ${key}: ${user[key]}`);
}

// for...in with hasOwnProperty check
console.log("\n2️⃣ for...in with hasOwnProperty check:");
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`  Own property - ${key}: ${user[key]}`);
    }
}

// Note: for...in includes inherited properties
console.log("\n⚠️ Note: for...in includes inherited properties");
const parent = { inherited: "from parent" };
const child = Object.create(parent);
child.own = "my own";
for (let key in child) {
    console.log(`  ${key} (${child.hasOwnProperty(key) ? 'own' : 'inherited'}): ${child[key]}`);
}

/**
 * SECTION 2: Object.keys() - Get All Keys
 */
console.log("\n📌 SECTION 2: Object.keys() - Get Keys as Array");
console.log("━".repeat(50));

const product = {
    id: 101,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    inStock: true
};
console.log("Product:", product);

// Get all keys
const keys = Object.keys(product);
console.log("\n1️⃣ Object.keys(product):", keys);
console.log("  Number of properties:", keys.length);

// Iterate using forEach
console.log("\n2️⃣ Iterate with forEach:");
Object.keys(product).forEach(key => {
    console.log(`  ${key}: ${product[key]}`);
});

// Filter keys
console.log("\n3️⃣ Filter keys:");
const stringKeys = Object.keys(product).filter(key => typeof product[key] === "string");
console.log("  String properties:", stringKeys);

// Map keys to something
console.log("\n4️⃣ Transform keys:");
const upperKeys = Object.keys(product).map(key => key.toUpperCase());
console.log("  Uppercase keys:", upperKeys);

/**
 * SECTION 3: Object.values() - Get All Values
 */
console.log("\n📌 SECTION 3: Object.values() - Get Values as Array");
console.log("━".repeat(50));

const student = {
    name: "Bob",
    grade: "A",
    age: 20,
    gpa: 3.8
};
console.log("Student:", student);

// Get all values
const values = Object.values(student);
console.log("\n1️⃣ Object.values(student):", values);

// Sum numeric values
console.log("\n2️⃣ Sum numeric values:");
const numericValues = Object.values(student).filter(v => typeof v === "number");
const sum = numericValues.reduce((acc, val) => acc + val, 0);
console.log("  Sum of numeric values:", sum);

// Check if any value meets condition
console.log("\n3️⃣ Check values:");
const hasHighGPA = Object.values(student).some(v => v === 3.8);
console.log("  Has GPA 3.8?", hasHighGPA);

/**
 * SECTION 4: Object.entries() - Get [Key, Value] Pairs
 */
console.log("\n📌 SECTION 4: Object.entries() - Get Key-Value Pairs");
console.log("━".repeat(50));

const settings = {
    theme: "dark",
    notifications: true,
    language: "en",
    fontSize: 14
};
console.log("Settings:", settings);

// Get entries
const entries = Object.entries(settings);
console.log("\n1️⃣ Object.entries(settings):", entries);

// Iterate with destructuring
console.log("\n2️⃣ Iterate with destructuring:");
for (const [key, value] of Object.entries(settings)) {
    console.log(`  ${key} = ${value}`);
}

// Convert entries back to object
console.log("\n3️⃣ Convert back to object:");
const reconstructed = Object.fromEntries(entries);
console.log("  Object.fromEntries(entries):", reconstructed);

// Filter entries
console.log("\n4️⃣ Filter entries:");
const filtered = Object.entries(settings).filter(([key, value]) => 
    typeof value !== "boolean"
);
console.log("  Entries without booleans:", Object.fromEntries(filtered));

// Map entries to new structure
console.log("\n5️⃣ Transform entries:");
const transformed = Object.entries(settings).map(([key, value]) => [
    `app_${key}`,
    value
]);
console.log("  Transformed:", Object.fromEntries(transformed));

/**
 * SECTION 5: COPYING & MERGING OBJECTS
 */
console.log("\n📌 SECTION 5: Copying & Merging Objects");
console.log("━".repeat(50));

const original = {
    a: 1,
    b: 2,
    c: {
        nested: 3
    }
};
console.log("Original:", original);

// Shallow copy with spread operator
console.log("\n1️⃣ Shallow Copy with Spread:");
const spreadCopy = { ...original };
console.log("  Spread copy:", spreadCopy);
console.log("  Same reference?", original === spreadCopy); // false
console.log("  Nested same reference?", original.c === spreadCopy.c); // true!

// Shallow copy with Object.assign()
console.log("\n2️⃣ Shallow Copy with Object.assign():");
const assignCopy = Object.assign({}, original);
console.log("  Object.assign copy:", assignCopy);

// Deep copy (simple)
console.log("\n3️⃣ Deep Copy (JSON methods - limited):");
const deepCopy = JSON.parse(JSON.stringify(original));
console.log("  Deep copy:", deepCopy);
console.log("  Nested different reference?", original.c === deepCopy.c); // false

// Merging objects
console.log("\n4️⃣ Merging Objects:");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { b: 10, e: 5 }; // b overlaps

const merged = { ...obj1, ...obj2, ...obj3 };
console.log("  Merged (later overwrites):", merged);

// Object.assign merge
const merged2 = Object.assign({}, obj1, obj2, obj3);
console.log("  Object.assign merge:", merged2);

// Conditional merge
console.log("\n5️⃣ Conditional Merge:");
const defaults = { theme: "light", fontSize: 12, notifications: true };
const userPrefs = { theme: "dark", fontSize: 14 };
const finalSettings = { ...defaults, ...userPrefs };
console.log("  Final settings:", finalSettings);

/**
 * SECTION 6: OBJECT DESTRUCTURING
 */
console.log("\n📌 SECTION 6: Object Destructuring");
console.log("━".repeat(50));

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "Boston",
        zip: "02101"
    },
    hobbies: ["reading", "gaming"]
};
console.log("Person:", person2);

// Basic destructuring
console.log("\n1️⃣ Basic Destructuring:");
const { firstName, lastName, age } = person2;
console.log(`  ${firstName} ${lastName}, Age: ${age}`);

// Renaming variables
console.log("\n2️⃣ Renaming Variables:");
const { firstName: fName, lastName: lName } = person2;
console.log(`  fName: ${fName}, lName: ${lName}`);

// Default values
console.log("\n3️⃣ Default Values:");
const { salary = 50000, city = "Unknown" } = person2;
console.log(`  Salary: ${salary}, City: ${city}`);

// Nested destructuring
console.log("\n4️⃣ Nested Destructuring:");
const { address: { city: cityName, zip } } = person2;
console.log(`  City: ${cityName}, ZIP: ${zip}`);

// Rest operator
console.log("\n5️⃣ Rest Operator:");
const { firstName: first, lastName: last, ...rest } = person2;
console.log("  Rest properties:", rest);

// Destructuring in function parameters
console.log("\n6️⃣ Destructuring in Functions:");
function printUser({ firstName, lastName, age }) {
    console.log(`  User: ${firstName} ${lastName} (${age})`);
}
printUser(person2);

// Destructuring with renaming and default
function processConfig({ theme = "light", fontSize = 12, ...other }) {
    console.log(`  Theme: ${theme}, Font: ${fontSize}`);
    console.log("  Other:", other);
}
processConfig({ theme: "dark", notifications: true });

/**
 * SECTION 7: OBJECT SPREAD OPERATOR (Advanced)
 */
console.log("\n📌 SECTION 7: Object Spread Operator Advanced");
console.log("━".repeat(50));

// Copy with modifications
console.log("\n1️⃣ Copy with Modifications:");
const originalConfig = { host: "localhost", port: 3000, debug: false };
const newConfig = { ...originalConfig, port: 8080, version: "2.0" };
console.log("  Original:", originalConfig);
console.log("  Modified:", newConfig);

// Conditional properties
console.log("\n2️⃣ Conditional Properties:");
const isProduction = false;
const config2 = {
    appName: "MyApp",
    ...(isProduction && { debug: false, logging: true }),
    ...(!isProduction && { debug: true, devTools: true })
};
console.log("  Conditional config:", config2);

// Overriding defaults pattern
console.log("\n3️⃣ Override Defaults Pattern:");
const defaultConfig = { theme: "light", notifications: true, cache: true };
const userConfig = { theme: "dark" };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log("  Final config:", finalConfig);

// Combining with other objects
console.log("\n4️⃣ Combining Multiple Sources:");
const base = { x: 1 };
const mixin1 = { y: 2 };
const mixin2 = { z: 3, x: 10 };
const combined = { ...base, ...mixin1, ...mixin2 };
console.log("  Combined:", combined);

/**
 * SECTION 8: Object.fromEntries()
 */
console.log("\n📌 SECTION 8: Object.fromEntries() - Array to Object");
console.log("━".repeat(50));

// Convert Map to Object
console.log("\n1️⃣ Map to Object:");
const map = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "NYC"]
]);
const fromMap = Object.fromEntries(map);
console.log("  Map:", map);
console.log("  Object:", fromMap);

// Convert array of pairs to object
console.log("\n2️⃣ Array of pairs to Object:");
const pairs = [
    ["username", "alice123"],
    ["email", "alice@example.com"],
    ["active", true]
];
const user3 = Object.fromEntries(pairs);
console.log("  User object:", user3);

// Filter object properties
console.log("\n3️⃣ Filter Object Properties:");
const data = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const filteredObj = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value > 2)
);
console.log("  Values > 2:", filteredObj);

// Transform object values
console.log("\n4️⃣ Transform Values:");
const doubledObj = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, value * 2])
);
console.log("  Doubled values:", doubledObj);

/**
 * SECTION 9: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 9: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Convert object to array of values
console.log("\n✅ Exercise 1: Object to Array");
const scores2 = { math: 90, science: 85, english: 88 };
const scoreArray = Object.values(scores2);
const average = scoreArray.reduce((sum, s) => sum + s, 0) / scoreArray.length;
console.log("  Scores:", scores2);
console.log("  Values:", scoreArray);
console.log("  Average:", average);

// Exercise 2: Filter object by value type
console.log("\n✅ Exercise 2: Filter by Type");
const mixed2 = { name: "John", age: 30, active: true, score: 85.5, city: "Boston" };
const strings = Object.fromEntries(
    Object.entries(mixed2).filter(([_, value]) => typeof value === "string")
);
const numbers = Object.fromEntries(
    Object.entries(mixed2).filter(([_, value]) => typeof value === "number")
);
console.log("  Original:", mixed2);
console.log("  String properties:", strings);
console.log("  Number properties:", numbers);

// Exercise 3: Swap keys and values
console.log("\n✅ Exercise 3: Swap Keys and Values");
const originalObj = { a: 1, b: 2, c: 3 };
const swapped = Object.fromEntries(
    Object.entries(originalObj).map(([key, value]) => [value, key])
);
console.log("  Original:", originalObj);
console.log("  Swapped:", swapped);

// Exercise 4: Count property types
console.log("\n✅ Exercise 4: Count Property Types");
const sample = { 
    name: "Alice", 
    age: 25, 
    active: true, 
    score: 95.5,
    address: { city: "NYC" },
    tags: ["js", "react"]
};
const typeCount = Object.values(sample).reduce((count, value) => {
    const type = Array.isArray(value) ? "array" : typeof value;
    count[type] = (count[type] || 0) + 1;
    return count;
}, {});
console.log("  Type counts:", typeCount);

// Exercise 5: Pick specific properties
console.log("\n✅ Exercise 5: Pick Properties");
const user4 = { id: 1, name: "Bob", email: "bob@email.com", password: "secret", age: 30 };
function pick(obj, keys) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keys.includes(key))
    );
}
const publicInfo = pick(user4, ["id", "name", "email"]);
console.log("  Public info:", publicInfo);

/**
 * SECTION 10: PERFORMANCE & BEST PRACTICES
 */
console.log("\n📌 SECTION 10: Performance & Best Practices");
console.log("━".repeat(50));

console.log("\n📊 Method Performance:");
console.log("  • for...in - Slowest (includes prototype chain)");
console.log("  • Object.keys() + forEach - Good");
console.log("  • Object.entries() - Good for pairs");
console.log("  • for...of + Object.entries() - Modern and readable");

console.log("\n✅ Best Practices:");
console.log("  1. Use Object.keys() when you only need keys");
console.log("  2. Use Object.values() when you only need values");
console.log("  3. Use Object.entries() when you need both");
console.log("  4. Use for...of with entries() for iteration");
console.log("  5. Use spread operator for copying/merging");
console.log("  6. Use destructuring for cleaner code");
console.log("  7. Avoid for...in unless you need inherited properties");

console.log("\n⚠️ Performance Tips:");
console.log("  • For large objects, Object.keys() is faster than for...in");
console.log("  • Object.entries() creates a new array - memory consideration");
console.log("  • Spread operator creates shallow copies only");

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - OBJECTS PART 2");
console.log("━".repeat(50));
console.log("✅ for...in - Iterates over enumerable properties");
console.log("✅ Object.keys() - Returns array of keys");
console.log("✅ Object.values() - Returns array of values");
console.log("✅ Object.entries() - Returns array of [key, value] pairs");
console.log("✅ Object.fromEntries() - Converts pairs back to object");
console.log("✅ Spread operator (...) - Copy and merge objects");
console.log("✅ Object.assign() - Alternative for merging");
console.log("✅ Destructuring - Extract properties easily");

console.log("\n🎯 When to use which:");
console.log("  • Need keys? → Object.keys()");
console.log("  • Need values? → Object.values()");
console.log("  • Need both? → Object.entries()");
console.log("  • Need to transform? → Object.entries() + map()");
console.log("  • Need to filter? → Object.entries() + filter()");
console.log("  • Need to copy? → Spread operator");
console.log("  • Need to merge? → Spread operator or Object.assign()");

console.log("\n===== END OF OBJECTS PART 2 =====");