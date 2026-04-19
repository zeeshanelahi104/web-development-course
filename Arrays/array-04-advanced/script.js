console.log("===== ARRAYS - PART 4: ADVANCED METHODS =====");
console.log("");

/**
 * SECTION 1: SLICE() - Extract Portion
 */
console.log("📌 SECTION 1: slice() - Extract Array Portion");
console.log("━".repeat(50));

const fruits = ["apple", "banana", "orange", "mango", "grape", "kiwi"];
console.log("Original:", fruits);

// slice(start, end) - end not included
console.log("\n1️⃣ Basic slice:");
const slice1 = fruits.slice(1, 4);
console.log("  fruits.slice(1, 4):", slice1); // index 1,2,3

const slice2 = fruits.slice(2);
console.log("  fruits.slice(2):", slice2); // from index 2 to end

const slice3 = fruits.slice(-3);
console.log("  fruits.slice(-3):", slice3); // last 3 elements

const slice4 = fruits.slice(1, -2);
console.log("  fruits.slice(1, -2):", slice4); // from index 1 to 2nd last

// Copy entire array
const copy = fruits.slice();
console.log("  fruits.slice() (copy):", copy);
console.log("  Same reference?", fruits === copy); // false

// slice doesn't modify original
console.log("  Original unchanged:", fruits);

/**
 * SECTION 2: CONCAT() - Merge Arrays
 */
console.log("\n📌 SECTION 2: concat() - Merge Arrays");
console.log("━".repeat(50));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

console.log("Arrays:", arr1, arr2, arr3);

// Merge two arrays
const merged1 = arr1.concat(arr2);
console.log("\n1️⃣ Merge two arrays:", merged1);

// Merge multiple arrays
const merged2 = arr1.concat(arr2, arr3);
console.log("2️⃣ Merge multiple arrays:", merged2);

// Merge with values
const merged3 = arr1.concat(10, 11, 12);
console.log("3️⃣ Merge with values:", merged3);

// Spread operator (modern alternative)
const spreadMerged = [...arr1, ...arr2, ...arr3];
console.log("4️⃣ Spread operator merge:", spreadMerged);

// concat vs spread performance
console.log("  💡 spread is more modern and readable");

/**
 * SECTION 3: JOIN() & toString()
 */
console.log("\n📌 SECTION 3: join() & toString() - Convert to String");
console.log("━".repeat(50));

const colors = ["red", "green", "blue"];
console.log("Array:", colors);

// join() with default separator
console.log("\n1️⃣ join() - default (comma):");
console.log("  colors.join():", colors.join());

// join with custom separator
console.log("\n2️⃣ join() with custom separator:");
console.log("  colors.join(' - '):", colors.join(" - "));
console.log("  colors.join(''):", colors.join(""));
console.log("  colors.join(' | '):", colors.join(" | "));

// toString()
console.log("\n3️⃣ toString():");
console.log("  colors.toString():", colors.toString());

// Practical examples
console.log("\n✅ Practical - Create URL slug:");
const words = ["javascript", "array", "methods"];
const slug = words.join("-");
console.log("  URL slug:", slug);

console.log("\n✅ Practical - CSV generation:");
const data = [
    ["Name", "Age", "City"],
    ["Alice", "25", "NYC"],
    ["Bob", "30", "LA"]
];
const csv = data.map(row => row.join(",")).join("\n");
console.log("  CSV:\n", csv);

/**
 * SECTION 4: indexOf(), lastIndexOf(), includes()
 */
console.log("\n📌 SECTION 4: Searching Methods");
console.log("━".repeat(50));

const numbers = [10, 20, 30, 20, 40, 20, 50];
console.log("Array:", numbers);

// indexOf() - first occurrence
console.log("\n1️⃣ indexOf() - First occurrence:");
console.log("  indexOf(20):", numbers.indexOf(20));
console.log("  indexOf(20, 3):", numbers.indexOf(20, 3)); // start from index 3
console.log("  indexOf(100):", numbers.indexOf(100)); // -1 = not found

// lastIndexOf() - last occurrence
console.log("\n2️⃣ lastIndexOf() - Last occurrence:");
console.log("  lastIndexOf(20):", numbers.lastIndexOf(20));
console.log("  lastIndexOf(20, 4):", numbers.lastIndexOf(20, 4));

// includes() - check existence
console.log("\n3️⃣ includes() - Check existence:");
console.log("  includes(30):", numbers.includes(30));
console.log("  includes(100):", numbers.includes(100));
console.log("  includes(30, 5):", numbers.includes(30, 5)); // from index 5

// Practical - find duplicates
console.log("\n✅ Practical - Find duplicates:");
const items = ["apple", "banana", "apple", "orange", "banana"];
const duplicates = items.filter((item, index) => items.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];
console.log("  Duplicates:", uniqueDuplicates);

/**
 * SECTION 5: SORT() & REVERSE()
 */
console.log("\n📌 SECTION 5: sort() & reverse()");
console.log("━".repeat(50));

// Sorting strings
const fruits2 = ["banana", "apple", "orange", "grape"];
console.log("Original strings:", fruits2);
fruits2.sort();
console.log("Sorted strings:", fruits2);

// Sorting numbers (⚠️ needs compare function)
const numbers2 = [10, 5, 100, 1, 50];
console.log("\nOriginal numbers:", numbers2);
numbers2.sort();
console.log("Default sort (WRONG!):", numbers2);

// Correct number sorting
console.log("\n✅ Correct number sorting:");
const numbers3 = [10, 5, 100, 1, 50];
numbers3.sort((a, b) => a - b);
console.log("Ascending:", numbers3);

numbers3.sort((a, b) => b - a);
console.log("Descending:", numbers3);

// Sorting objects
const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 28 }
];
console.log("\nSort objects by age:");
const byAge = [...people].sort((a, b) => a.age - b.age);
console.log("  By age:", byAge);

console.log("\nSort objects by name:");
const byName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log("  By name:", byName);

// reverse()
console.log("\nreverse() method:");
const letters = ["a", "b", "c", "d"];
console.log("  Original:", letters);
letters.reverse();
console.log("  Reversed:", letters);

// Stable sort (ES2019)
console.log("\n✅ Stable sort (ES2019+):");
const students = [
    { name: "Alice", grade: "B" },
    { name: "Bob", grade: "A" },
    { name: "Charlie", grade: "B" },
    { name: "David", grade: "A" }
];
students.sort((a, b) => a.grade.localeCompare(b.grade));
console.log("  Sorted by grade (stable):", students);

/**
 * SECTION 6: fill() - Fill Array
 */
console.log("\n📌 SECTION 6: fill() - Fill Array with Values");
console.log("━".repeat(50));

// Fill entire array
const arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
arr.fill(0);
console.log("fill(0):", arr);

// Fill part of array
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 1, 4);
console.log("fill(9, 1, 4):", arr2);

// Create array with default values
const zeros = new Array(5).fill(0);
console.log("Array of zeros:", zeros);

const matrix = Array(3).fill().map(() => Array(3).fill(0));
console.log("3x3 zero matrix:", matrix);

/**
 * SECTION 7: flat() & flatMap()
 */
console.log("\n📌 SECTION 7: flat() & flatMap() - Flatten Arrays");
console.log("━".repeat(50));

const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Nested array:", nested);

// flat() - flatten one level
const flat1 = nested.flat();
console.log("\n1️⃣ flat() one level:", flat1);

// flat() with depth
const flat2 = nested.flat(2);
console.log("2️⃣ flat() depth 2:", flat2);

// flat() with Infinity
const deepNested = [1, [2, [3, [4, [5]]]]];
const completelyFlat = deepNested.flat(Infinity);
console.log("3️⃣ flat(Infinity):", completelyFlat);

// flatMap() - map then flatten
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(s => s.split(" "));
console.log("\n4️⃣ flatMap() - split sentences:", words);

// Remove empty strings
const withEmpties = ["a", "", "b", "", "c"];
const cleaned = withEmpties.flatMap(s => s ? [s] : []);
console.log("5️⃣ Remove empty strings:", cleaned);

/**
 * SECTION 8: ES2023 New Methods (Immutable Operations)
 */
console.log("\n📌 SECTION 8: ES2023+ Immutable Methods");
console.log("━".repeat(50));

const original = [3, 1, 4, 1, 5, 9];
console.log("Original:", original);

// toSorted() - sort without mutating
const sorted = original.toSorted();
console.log("\n1️⃣ toSorted():", sorted);
console.log("  Original unchanged:", original);

// toReversed() - reverse without mutating
const reversed = original.toReversed();
console.log("\n2️⃣ toReversed():", reversed);
console.log("  Original unchanged:", original);

// toSpliced() - splice without mutating
const spliced = original.toSpliced(2, 2, 99, 100);
console.log("\n3️⃣ toSpliced(2,2,99,100):", spliced);
console.log("  Original unchanged:", original);

// with() - replace element without mutating
const withReplaced = original.with(2, 999);
console.log("\n4️⃣ with(2, 999):", withReplaced);
console.log("  Original unchanged:", original);

/**
 * SECTION 9: Array Destructuring (Advanced)
 */
console.log("\n📌 SECTION 9: Array Destructuring");
console.log("━".repeat(50));

const rgb = [255, 128, 64];
console.log("RGB array:", rgb);

// Basic destructuring
const [red, green, blue] = rgb;
console.log("\n1️⃣ Basic:", `R=${red}, G=${green}, B=${blue}`);

// Skip elements
const [first, , third] = [10, 20, 30, 40];
console.log("2️⃣ Skip elements:", `First=${first}, Third=${third}`);

// Rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("3️⃣ Rest operator:", `Head=${head}, Tail=${tail}`);

// Default values
const [a = 1, b = 2, c = 3] = [10];
console.log("4️⃣ Default values:", `a=${a}, b=${b}, c=${c}`);

// Swapping variables
let x = 10, y = 20;
[x, y] = [y, x];
console.log("5️⃣ Swapping:", `x=${x}, y=${y}`);

// Nested destructuring
const matrix2 = [[1, 2], [3, 4]];
const [[firstRow, secondRow]] = matrix2;
console.log("6️⃣ Nested:", `First row: ${firstRow}, Second: ${secondRow}`);

// Practical - function returns multiple values
function getCoordinates() {
    return [10, 20, 30];
}
const [xCoord, yCoord, zCoord] = getCoordinates();
console.log("7️⃣ Function return:", `(${xCoord}, ${yCoord}, ${zCoord})`);

/**
 * SECTION 10: Array.from() & Array.of() (Detailed)
 */
console.log("\n📌 SECTION 10: Array.from() & Array.of()");
console.log("━".repeat(50));

// Array.from() - convert iterables to array
console.log("\n1️⃣ Array.from() examples:");
console.log("  String:", Array.from("hello"));
console.log("  Set:", Array.from(new Set([1, 2, 3])));
console.log("  Map:", Array.from(new Map([["a", 1], ["b", 2]])));

// Array.from() with map function
const doubled2 = Array.from([1, 2, 3], x => x * 2);
console.log("  With map function:", doubled2);

// Create range
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("  Create range 1-5:", range);

// Array.of() - create array from arguments
console.log("\n2️⃣ Array.of() examples:");
console.log("  Array.of(5):", Array.of(5)); // [5]
console.log("  Array.of(1,2,3):", Array.of(1, 2, 3));
console.log("  Array.of('a','b'):", Array.of("a", "b"));

/**
 * SECTION 11: Practice Exercises
 */
console.log("\n📌 SECTION 11: Practice Exercises");
console.log("━".repeat(50));

// Exercise 1: Remove duplicates and sort
const numbers4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const uniqueSorted = [...new Set(numbers4)].sort((a, b) => a - b);
console.log("Exercise 1 - Unique sorted:", uniqueSorted);

// Exercise 2: Flatten and filter
const nested2 = [[1, 2], [3, 4], [5, 6]];
const flattened = nested2.flat();
const evenOnly = flattened.filter(n => n % 2 === 0);
console.log("Exercise 2 - Even numbers from nested:", evenOnly);

// Exercise 3: Create CSV from objects
const products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Shirt", price: 29, category: "Clothing" },
    { name: "Book", price: 15, category: "Books" }
];
const csv2 = products.map(p => Object.values(p).join(",")).join("\n");
console.log("Exercise 3 - CSV:\n", csv2);

// Exercise 4: Immutable sort
const scores2 = [85, 92, 78, 95, 88];
const sortedScores = scores2.toSorted((a, b) => b - a);
const top3 = sortedScores.slice(0, 3);
console.log("Exercise 4 - Top 3 scores:", top3);
console.log("  Original scores:", scores2);

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - ARRAYS PART 4");
console.log("━".repeat(50));
console.log("✅ slice() - Extract portion, doesn't modify");
console.log("✅ concat() - Merge arrays");
console.log("✅ join() - Convert to string with separator");
console.log("✅ indexOf/lastIndexOf - Find indices");
console.log("✅ includes() - Check existence");
console.log("✅ sort() - Sort (needs compare function for numbers)");
console.log("✅ reverse() - Reverse order");
console.log("✅ fill() - Fill with values");
console.log("✅ flat() - Flatten nested arrays");
console.log("✅ toSorted/toReversed - Immutable operations (ES2023)");
console.log("✅ Destructuring - Extract values easily");

console.log("\n🎯 Quick Reference:");
console.log("  Copy array:        arr.slice() or [...arr]");
console.log("  Merge arrays:      arr1.concat(arr2) or [...arr1, ...arr2]");
console.log("  To string:         arr.join(', ')");
console.log("  Find index:        arr.indexOf(value)");
console.log("  Check exists:      arr.includes(value)");
console.log("  Sort numbers:      arr.sort((a,b) => a-b)");
console.log("  Flatten:           arr.flat(depth)");
console.log("  Immutable sort:    arr.toSorted()");

console.log("\n===== END OF ARRAYS PART 4 =====");
