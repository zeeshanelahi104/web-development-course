console.log("===== ARRAYS IN JAVASCRIPT - COMPLETE GUIDE =====");
console.log("");

/**
 * ============================================
 * 1. CREATING ARRAYS
 * ============================================
 */
console.log("1️⃣ CREATING ARRAYS");
console.log("━".repeat(50));

// Array literal (most common)
const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log("Array literal:", fruits);

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Array constructor:", numbers);

// Empty array
const emptyArray = [];
console.log("Empty array:", emptyArray);

// Array with mixed types
const mixed = [1, 'hello', true, null, undefined, {name: 'John'}, [1, 2, 3]];
console.log("Mixed types array:", mixed);

// Array.from() - creates array from array-like objects
const fromString = Array.from('hello');
console.log("Array.from('hello'):", fromString);

// Array.of() - creates array from arguments
const ofArray = Array.of(1, 2, 3, 4);
console.log("Array.of(1,2,3,4):", ofArray);

console.log("");

/**
 * ============================================
 * 2. ACCESSING ARRAY ELEMENTS
 * ============================================
 */
console.log("2️⃣ ACCESSING ARRAY ELEMENTS");
console.log("━".repeat(50));

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log("Original array:", colors);

// Access by index (zero-based)
console.log("First element (index 0):", colors[0]);
console.log("Second element (index 1):", colors[1]);
console.log("Last element:", colors[colors.length - 1]);

// length property
console.log("Array length:", colors.length);

// Accessing out of bounds returns undefined
console.log("Index 10 (out of bounds):", colors[10]);

// Modifying elements
colors[2] = 'navy';
console.log("After modifying index 2:", colors);

// Adding new element at specific index
colors[5] = 'pink';
console.log("After adding at index 5:", colors);

console.log("");

/**
 * ============================================
 * 3. ARRAY ITERATION METHODS
 * ============================================
 */
console.log("3️⃣ ARRAY ITERATION METHODS");
console.log("━".repeat(50));

const tasks = ['Learn JS', 'Build Project', 'Test Code', 'Deploy'];

// for loop
console.log("Using for loop:");
for (let i = 0; i < tasks.length; i++) {
    console.log(`  ${i + 1}. ${tasks[i]}`);
}

// for...of loop (ES6)
console.log("\nUsing for...of loop:");
for (const task of tasks) {
    console.log(`  • ${task}`);
}

// forEach() method
console.log("\nUsing forEach():");
tasks.forEach(function(task, index) {
    console.log(`  ${index}: ${task}`);
});

// forEach with arrow function
console.log("\nUsing forEach with arrow function:");
tasks.forEach((task, index) => console.log(`  ${index} → ${task}`));

console.log("");

/**
 * ============================================
 * 4. ADDING & REMOVING ELEMENTS
 * ============================================
 */
console.log("4️⃣ ADDING & REMOVING ELEMENTS");
console.log("━".repeat(50));

let stack = [1, 2, 3];
console.log("Initial array:", stack);

// PUSH - add to end
stack.push(4);
console.log("After push(4):", stack);
stack.push(5, 6);
console.log("After push(5,6):", stack);

// POP - remove from end
const popped = stack.pop();
console.log("After pop(), removed:", popped);
console.log("Array now:", stack);

// UNSHIFT - add to beginning
stack.unshift(0);
console.log("After unshift(0):", stack);
stack.unshift(-2, -1);
console.log("After unshift(-2,-1):", stack);

// SHIFT - remove from beginning
const shifted = stack.shift();
console.log("After shift(), removed:", shifted);
console.log("Array now:", stack);

console.log("");

/**
 * ============================================
 * 5. TRANSFORMATION METHODS
 * ============================================
 */
console.log("5️⃣ TRANSFORMATION METHODS");
console.log("━".repeat(50));

const nums = [1, 2, 3, 4, 5];
console.log("Original array:", nums);

// MAP - transform each element
const doubled = nums.map(num => num * 2);
console.log("map (double):", doubled);

const squared = nums.map(num => num ** 2);
console.log("map (square):", squared);

const stringified = nums.map(num => `Number ${num}`);
console.log("map (stringify):", stringified);

// FILTER - keep elements that pass condition
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log("filter (even):", evenNumbers);

const greaterThan3 = nums.filter(num => num > 3);
console.log("filter (>3):", greaterThan3);

// REDUCE - reduce to single value
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log("reduce (sum):", sum);

const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log("reduce (product):", product);

// Chaining array methods
const result = nums
    .filter(num => num > 2)
    .map(num => num * 10)
    .reduce((sum, num) => sum + num, 0);
console.log("Chained (filter >2, *10, sum):", result);

console.log("");

/**
 * ============================================
 * 6. SEARCHING METHODS
 * ============================================
 */
console.log("6️⃣ SEARCHING METHODS");
console.log("━".repeat(50));

const fruits2 = ['apple', 'banana', 'orange', 'apple', 'grape'];
console.log("Array:", fruits2);

// indexOf - find index of element (first occurrence)
console.log("indexOf('orange'):", fruits2.indexOf('orange'));
console.log("indexOf('apple'):", fruits2.indexOf('apple'));
console.log("indexOf('mango'):", fruits2.indexOf('mango')); // -1 = not found

// lastIndexOf - find index from end
console.log("lastIndexOf('apple'):", fruits2.lastIndexOf('apple'));

// includes - check if element exists
console.log("includes('banana'):", fruits2.includes('banana'));
console.log("includes('mango'):", fruits2.includes('mango'));

// find - find first element matching condition
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
const found = users.find(user => user.age === 30);
console.log("find (age 30):", found);

// findIndex - find index of element matching condition
const index = users.findIndex(user => user.name === 'Charlie');
console.log("findIndex (name Charlie):", index);

// some - check if ANY element passes condition
const hasAdult = users.some(user => user.age >= 18);
console.log("some (age >= 18):", hasAdult);

// every - check if ALL elements pass condition
const allOver18 = users.every(user => user.age >= 18);
console.log("every (age >= 18):", allOver18);

console.log("");

/**
 * ============================================
 * 7. ARRAY MANIPULATION METHODS
 * ============================================
 */
console.log("7️⃣ ARRAY MANIPULATION METHODS");
console.log("━".repeat(50));

let letters = ['a', 'b', 'c', 'd', 'e'];
console.log("Original:", letters);

// SLICE - extract portion (doesn't modify original)
const sliced = letters.slice(1, 4);
console.log("slice(1,4):", sliced);
console.log("Original unchanged:", letters);

// SPLICE - add/remove elements (modifies original)
letters.splice(2, 1); // remove 1 element at index 2
console.log("After splice(2,1) remove:", letters);

letters.splice(2, 0, 'x', 'y'); // add elements at index 2
console.log("After splice(2,0,'x','y') add:", letters);

letters.splice(1, 2, 'm', 'n'); // replace 2 elements starting at index 1
console.log("After splice(1,2,'m','n') replace:", letters);

// CONCAT - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log("concat:", merged);

// Spread operator (modern way)
const spreadMerged = [...arr1, ...arr2];
console.log("spread merge:", spreadMerged);

// JOIN - convert to string
const joined = letters.join(' - ');
console.log("join(' - '):", joined);

// REVERSE - reverse array
const numbers2 = [1, 2, 3, 4, 5];
console.log("Original:", numbers2);
console.log("Reversed:", numbers2.reverse());

console.log("");

/**
 * ============================================
 * 8. SORTING ARRAYS
 * ============================================
 */
console.log("8️⃣ SORTING ARRAYS");
console.log("━".repeat(50));

// Sorting strings
const fruits3 = ['banana', 'apple', 'orange', 'grape'];
console.log("Original:", fruits3);
console.log("Sorted:", fruits3.sort());

// Sorting numbers (requires compare function!)
const numbers3 = [10, 5, 100, 1, 50];
console.log("\nOriginal numbers:", numbers3);
console.log("Default sort (wrong!):", numbers3.sort());

// Correct number sorting
console.log("Ascending sort:", numbers3.sort((a, b) => a - b));
console.log("Descending sort:", numbers3.sort((a, b) => b - a));

// Sorting objects
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];
console.log("\nPeople array:", people);
const sortedByAge = [...people].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortedByAge);
const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", sortedByName);

console.log("");

/**
 * ============================================
 * 9. MULTI-DIMENSIONAL ARRAYS
 * ============================================
 */
console.log("9️⃣ MULTI-DIMENSIONAL ARRAYS");
console.log("━".repeat(50));

// 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Matrix:");
console.log(matrix);

// Accessing elements
console.log("matrix[0][1]:", matrix[0][1]); // 2
console.log("matrix[2][2]:", matrix[2][2]); // 9

// Iterating through 2D array
console.log("\nIterating 2D array:");
for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + ' ';
    }
    console.log(`Row ${i}: ${row}`);
}

// Creating a 3x3 identity matrix
const identity = Array(3).fill().map((_, i) => 
    Array(3).fill().map((_, j) => i === j ? 1 : 0)
);
console.log("\nIdentity matrix:");
console.log(identity);

console.log("");

/**
 * ============================================
 * 10. IMPORTANT ARRAY METHODS (ES6+)
 * ============================================
 */
console.log("🔟 ADVANCED ARRAY METHODS (ES6+)");
console.log("━".repeat(50));

// flat() - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Nested array:", nested);
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

// flatMap() - map then flatten
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log("flatMap (split sentences):", words);

// fill() - fill array with value
const fillArray = new Array(5).fill(0);
console.log("fill(0) 5 elements:", fillArray);
fillArray.fill(5, 1, 3);
console.log("fill(5, 1, 3):", fillArray);

// Array.isArray() - check if array
console.log("Array.isArray([1,2,3]):", Array.isArray([1, 2, 3]));
console.log("Array.isArray('hello'):", Array.isArray('hello'));

// keys(), values(), entries()
const letters2 = ['a', 'b', 'c'];
console.log("\nkeys():", [...letters2.keys()]);
console.log("values():", [...letters2.values()]);
console.log("entries():", [...letters2.entries()]);

// at() - access element from end
console.log("\nat() method:");
console.log("letters2.at(0):", letters2.at(0));
console.log("letters2.at(-1):", letters2.at(-1)); // last element
console.log("letters2.at(-2):", letters2.at(-2)); // second last

console.log("");

/**
 * ============================================
 * 11. DESTRUCTURING ARRAYS
 * ============================================
 */
console.log("1️⃣1️⃣ ARRAY DESTRUCTURING");
console.log("━".repeat(50));

const rgb = [255, 128, 64];
console.log("RGB array:", rgb);

// Basic destructuring
const [red, green, blue] = rgb;
console.log(`RGB values: R=${red}, G=${green}, B=${blue}`);

// Skip elements
const [first, , third] = [10, 20, 30, 40];
console.log("Skip second:", first, third);

// Rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("Head:", head);
console.log("Tail:", tail);

// Default values
const [a = 1, b = 2, c = 3] = [10];
console.log("Default values:", a, b, c);

// Swapping variables
let x = 10, y = 20;
[x, y] = [y, x];
console.log("After swap: x=", x, "y=", y);

console.log("");

/**
 * ============================================
 * 12. PRACTICAL EXAMPLES
 * ============================================
 */
console.log("💡 PRACTICAL USE CASES");
console.log("━".repeat(50));

// 1. Removing duplicates
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log("Remove duplicates:", unique);

// 2. Finding intersection of arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = array1.filter(x => array2.includes(x));
console.log("Intersection:", intersection);

// 3. Finding union of arrays
const union = [...new Set([...array1, ...array2])];
console.log("Union:", union);

// 4. Chunk array into groups
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Chunk size 3:", chunkArray(numbers4, 3));

// 5. Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
console.log("Shuffled:", shuffleArray([1, 2, 3, 4, 5]));

// 6. Group by property
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' }
];
const groupedByGrade = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student);
    return acc;
}, {});
console.log("Grouped by grade:", groupedByGrade);

console.log("");

/**
 * ============================================
 * 13. COMMON PITFALLS
 * ============================================
 */
console.log("⚠️ COMMON PITFALLS & BEST PRACTICES");
console.log("━".repeat(50));

console.log("\n❌ Pitfall 1: Using 'new Array()' with single number");
console.log("new Array(5):", new Array(5)); // Creates empty array of length 5!
console.log("✅ Solution: Use Array.from or Array.of");
console.log("Array.from({length:5}):", Array.from({length: 5}));
console.log("Array.of(5):", Array.of(5));

console.log("\n❌ Pitfall 2: Modifying array while iterating");
let arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
    if (item === 2) arr.splice(index, 1); // BAD!
});
console.log("Result:", arr); // Unexpected behavior

console.log("✅ Solution: Use filter or create new array");
arr = [1, 2, 3, 4];
const filtered = arr.filter(item => item !== 2);
console.log("Filtered:", filtered);

console.log("\n❌ Pitfall 3: sort() on numbers");
const nums4 = [10, 5, 100, 1];
console.log("Default sort:", nums4.sort()); // [1, 10, 100, 5]
console.log("✅ Correct sort:", nums4.sort((a, b) => a - b));

console.log("\n✅ Best Practices:");
console.log("1. Use array literal [] instead of new Array()");
console.log("2. Use map/filter/reduce instead of for loops when possible");
console.log("3. Use spread operator (...) for copying arrays");
console.log("4. Use const for arrays that won't be reassigned");
console.log("5. Remember array methods return new arrays (except push/pop/splice)");
console.log("6. Use includes() instead of indexOf() !== -1");
console.log("7. Use find() instead of filter()[0]");

console.log("\n🎯 Performance Tips:");
console.log("- for loop is fastest for simple iterations");
console.log("- forEach is more readable");
console.log("- map/filter/reduce are functional but slightly slower");
console.log("- Avoid modifying array while iterating");

/**
 * ============================================
 * SUMMARY
 * ============================================
 */
console.log("\n📝 SUMMARY");
console.log("━".repeat(50));
console.log("✅ Arrays store multiple values in ordered list");
console.log("✅ Zero-indexed, dynamic size, can hold mixed types");
console.log("✅ 30+ built-in methods for manipulation");
console.log("✅ Map/Filter/Reduce are powerful functional tools");
console.log("✅ Spread operator (...) for easy copying/merging");
console.log("✅ Destructuring for extracting values");
console.log("✅ Use Set for unique values");

console.log("\n🎯 When to use which method:");
console.log("- Add/remove ends: push/pop, unshift/shift");
console.log("- Transform: map");
console.log("- Filter: filter");
console.log("- Single value: reduce");
console.log("- Search: find, indexOf, includes");
console.log("- Test condition: some, every");
console.log("- Extract portion: slice");
console.log("- Modify portion: splice");
console.log("- Iterate: forEach, for...of");
console.log("- Sort: sort with compare function");

console.log("\n===== ARRAYS GUIDE COMPLETED =====");
console.log("💡 Open DevTools → Console to see all examples!");