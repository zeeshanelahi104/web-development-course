console.log("===== ARRAYS - PART 1: BASICS & CREATION =====");
console.log("");

/**
 * SECTION 1: WHAT ARE ARRAYS?
 */
console.log("📌 SECTION 1: WHAT ARE ARRAYS?");
console.log("━".repeat(50));

// Arrays hold multiple values in one variable
const singleVariable = "Hello"; // Holds one value
const multipleValues = ["Apple", "Banana", "Orange"]; // Holds multiple values

console.log("multipleValues is an array that holds 3 fruits:", multipleValues);

console.log("Without array - need multiple variables:");
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";
console.log(`  ${fruit1}, ${fruit2}, ${fruit3}`);

console.log("\nWith array - one variable holds everything:");
console.log("  Fruits array:", multipleValues);

console.log("\n✅ Benefits of Arrays:");
console.log("  • Organize related data together");
console.log("  • Easy to loop through elements");
console.log("  • Built-in methods for manipulation");
console.log("  • Dynamic size (can grow/shrink)");

/**
 * SECTION 2: CREATING ARRAYS
 */
console.log("\n📌 SECTION 2: CREATING ARRAYS");
console.log("━".repeat(50));

// Method 1: Array literal (MOST COMMON - RECOMMENDED)
console.log("\n1️⃣ Array Literal [] - RECOMMENDED:");
const colors = ["red", "green", "blue", "yellow"];
console.log("  const colors = ['red', 'green', 'blue', 'yellow'];");
console.log("  Result:", colors);

// Method 2: Array constructor
console.log("\n2️⃣ Array Constructor - NOT RECOMMENDED:");
const numbers = new Array(1, 2, 3, 4, 5);
console.log("  const numbers = new Array(1, 2, 3, 4, 5);");
console.log("  Result:", numbers);

// ⚠️ Warning with Array constructor
console.log("\n  ⚠️ WARNING: Single number creates empty array of that length:");
const emptySlots = new Array(5);
console.log("  new Array(5):", emptySlots); // Creates array with 5 empty slots!
console.log("  Length:", emptySlots.length);

// Method 3: Empty array
console.log("\n3️⃣ Empty Array:");
const empty = [];
console.log("  const empty = [];");
console.log("  Result:", empty);

// Method 4: Array.of() - solves constructor issue
console.log("\n4️⃣ Array.of() - Modern approach:");
const ofExample = Array.of(5);
console.log("  Array.of(5):", ofExample); // Creates [5] not empty slots

// Method 5: Array.from()
console.log("\n5️⃣ Array.from() - Convert to array:");
const fromString = Array.from("hello");
console.log("  Array.from('hello'):", fromString);

const spreadString = [..."hello"];
console.log("  [...'hello']:", spreadString);

// const fromSet = Array.from(new Set([1, 2, 3]));
// console.log("  Array.from(Set):", fromSet);

// Method 6: Spread operator
console.log("\n6️⃣ Spread Operator [...] - Modern approach:");
const str = "world12345";
const spreadArray = [...str];
console.log("  [...'world12345']:", spreadArray);

// /**
//  * SECTION 3: ARRAY CHARACTERISTICS
//  */
// console.log("\n📌 SECTION 3: ARRAY CHARACTERISTICS");
// console.log("━".repeat(50));

// // 1. Arrays can hold mixed types
// console.log("\n1️⃣ Mixed Types:");
// const mixed = [1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
// console.log("  Mixed array:", mixed);
// console.log("  Contains: number, string, boolean, null, undefined, object, array");

// // 2. Arrays are dynamic (can change size)
// console.log("\n2️⃣ Dynamic Size:");
// let dynamic = [1, 2, 3];
// console.log("  Initial:", dynamic, "Length:", dynamic.length);
// dynamic.push(4);
// console.log("  After push(4):", dynamic, "Length:", dynamic.length);
// dynamic.pop();
// console.log("  After pop():", dynamic, "Length:", dynamic.length);

// // 3. Arrays are reference types
// console.log("\n3️⃣ Reference Type:");
// const arr1 = [1, 2, 3];
// const arr2 = arr1; // Both point to same array
// arr2.push(4);
// console.log("  arr1:", arr1);
// console.log("  arr2:", arr2);
// console.log("  They are the SAME array in memory");

// // 4. Arrays are zero-indexed
// console.log("\n4️⃣ Zero-Indexed:");
// const letters = ["a", "b", "c", "d"];
// console.log("  Array:", letters);
// console.log("  Index 0:", letters[0]); // First element
// console.log("  Index 1:", letters[1]); // Second element
// console.log("  Index 2:", letters[2]); // Third element
// console.log("  Index 3:", letters[3]); // Fourth element

// /**
//  * SECTION 4: ARRAY PROPERTIES
//  */
// console.log("\n📌 SECTION 4: ARRAY PROPERTIES");
// console.log("━".repeat(50));

// // length property
// console.log("\n1️⃣ Length Property:");
// const fruits = ["apple", "banana", "orange", "mango", "grape"];
// console.log("  Array:", fruits);
// console.log("  Length:", fruits.length);
// console.log("  First element (index 0):", fruits[0]);
// console.log("  Last element (index length-1):", fruits[fruits.length - 1]);

// // Modifying length
// console.log("\n  Modifying length:");
// fruits.length = 3;
// console.log("  After setting length to 3:", fruits);
// fruits.length = 5;
// console.log("  After setting length to 5:", fruits); // Adds empty slots

// // constructor property
// console.log("\n2️⃣ Constructor Property:");
// console.log("  fruits.constructor:", fruits.constructor);

// // isArray() method
// console.log("\n3️⃣ Array.isArray():");
// console.log("  Is fruits an array?", Array.isArray(fruits));
// console.log("  Is 'hello' an array?", Array.isArray("hello"));
// console.log("  Is {} an array?", Array.isArray({}));

// /**
//  * SECTION 5: ACCESSING ELEMENTS
//  */
// console.log("\n📌 SECTION 5: ACCESSING ELEMENTS");
// console.log("━".repeat(50));

// const animals = ["dog", "cat", "bird", "fish", "rabbit"];
// console.log("Array:", animals);

// // Access by index
// console.log("\n1️⃣ Access by Index:");
// console.log("  animals[0]:", animals[0]);
// console.log("  animals[2]:", animals[2]);
// console.log("  animals[4]:", animals[4]);

// // Access non-existent index
// console.log("\n2️⃣ Access Non-existent Index:");
// console.log("  animals[10]:", animals[10]); // undefined

// // at() method (ES2022)
// console.log("\n3️⃣ at() Method - Modern approach:");
// console.log("  animals.at(0):", animals.at(0)); // First element
// console.log("  animals.at(-1):", animals.at(-1)); // Last element
// console.log("  animals.at(-2):", animals.at(-2)); // Second last

// // Accessing nested arrays
// console.log("\n4️⃣ Nested Arrays:");
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log("  Matrix:", matrix);
// console.log("  matrix[0][1]:", matrix[0][1]); // 2
// console.log("  matrix[2][2]:", matrix[2][2]); // 9

/**
 * SECTION 6: MODIFYING ELEMENTS
 */
console.log("\n📌 SECTION 6: MODIFYING ELEMENTS");
console.log("━".repeat(50));

let cities = ["New York", "London", "Tokyo", "Paris"];
console.log("Original:", cities);

// Modify by index
console.log("\n1️⃣ Modify by Index:");
cities[1] = "Berlin";
console.log("  After cities[1] = 'Berlin':", cities);

cities[4] = "Sydney";
console.log("  After adding at index 4:", cities);

// Modify with at()
// console.log("\n2️⃣ Modify with at():");
// cities.at(-1) = "Melbourne";
// console.log("  After modifying last element:", cities);

// Adding out of bounds
console.log("\n3️⃣ Adding out of bounds:");
cities[10] = "Mumbai";
console.log("  After cities[10] = 'Mumbai':", cities);
console.log("  Length becomes:", cities.length);
console.log("  Empty slots:", cities[5]); // undefined

/**
 * SECTION 7: PRACTICE EXERCISES
 */
// console.log("\n📌 SECTION 7: PRACTICE EXERCISES");
// console.log("━".repeat(50));

// console.log("\n✅ Exercise 1: Create a todo list array");
// const todos = ["Learn JavaScript", "Build a project", "Practice daily"];
// console.log("  Todo list:", todos);
// console.log("  First todo:", todos[0]);
// console.log("  Last todo:", todos[todos.length - 1]);

// console.log("\n✅ Exercise 2: Create a shopping cart");
// const cart = [];
// console.log("  Empty cart:", cart);
// cart[0] = "Laptop";
// cart[1] = "Mouse";
// console.log("  After adding items:", cart);

// console.log("\n✅ Exercise 3: Create a 2D grid");
// const grid = [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["X", "O", "X"]
// ];
// console.log("  Tic-tac-toe grid:");
// console.log(`  Row 0: ${grid[0]}`);
// console.log(`  Row 1: ${grid[1]}`);
// console.log(`  Row 2: ${grid[2]}`);
// console.log("  Center cell:", grid[1][1]);

// /**
//  * SECTION 8: COMMON MISTAKES
//  */
// console.log("\n📌 SECTION 8: COMMON MISTAKES");
// console.log("━".repeat(50));

// console.log("\n❌ Mistake 1: Using new Array() with single number");
// console.log("  new Array(5) creates empty slots, not [5]");
// console.log("  ✅ Solution: Use [5] or Array.of(5)");

// console.log("\n❌ Mistake 2: Forgetting arrays are zero-indexed");
// console.log("  First element is at index 0, not 1");
// console.log("  ✅ Solution: Remember indices start at 0");

// console.log("\n❌ Mistake 3: Confusing array copy vs reference");
// const originalArr = [1, 2, 3];
// const copy = originalArr; // This is reference, not copy!
// copy[0] = 99;
// console.log("  originalArr:", originalArr); // Also changed!
// console.log("  ✅ Solution: Use spread [...arr] for copy");

// console.log("\n❌ Mistake 4: Accessing out of bounds");
// console.log("  Returns undefined, not error");
// console.log("  ✅ Solution: Check length before accessing");

// /**
//  * SUMMARY
//  */
// console.log("\n📝 SUMMARY - ARRAYS PART 1");
// console.log("━".repeat(50));
// console.log("✅ Arrays hold multiple values in one variable");
// console.log("✅ Use array literal [] - most common and recommended");
// console.log("✅ Arrays are zero-indexed (start at 0)");
// console.log("✅ Arrays can hold mixed data types");
// console.log("✅ Arrays are dynamic (can change size)");
// console.log("✅ Arrays are reference types");
// console.log("✅ Use array.length to get size");
// console.log("✅ Access with array[index] or array.at(index)");

// console.log("\n🎯 Key Terms:");
// console.log("  • Element: A value in an array");
// console.log("  • Index: Position number (0, 1, 2...)");
// console.log("  • Length: Number of elements");
// console.log("  • Nested array: Array inside array");

// console.log("\n===== END OF ARRAYS PART 1 =====");