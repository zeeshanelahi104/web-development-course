console.log("===== ARRAYS - PART 2: ADDING & REMOVING ELEMENTS =====");
console.log("");

/**
 * SECTION 1: ADDING TO THE END - push()
 */
console.log("📌 SECTION 1: push() - Add to END");
console.log("━".repeat(50));

let fruits = ["apple", "banana"];
console.log("Initial array:", fruits);

// Add single element
fruits.push("orange");
console.log("\n1️⃣ Add single element:");
console.log("  fruits.push('orange')");
console.log("  Result:", fruits);

// Add multiple elements
fruits.push("grape", "mango", "kiwi");
console.log("\n2️⃣ Add multiple elements:");
console.log("  fruits.push('grape', 'mango', 'kiwi')");
console.log("  Result:", fruits);

// push returns the new length
const newLength = fruits.push("pineapple");
console.log("\n3️⃣ push() returns new length:");
console.log("  Return value:", newLength);
console.log("  Array now:", fruits);

// Practical example - shopping cart
console.log("\n✅ Practical Example - Shopping Cart:");
const cart = [];
console.log("  Empty cart:", cart);

cart.push("Laptop");
console.log("  Add Laptop:", cart);

cart.push("Mouse", "Keyboard");
console.log("  Add Mouse, Keyboard:", cart);

/**
 * SECTION 2: REMOVING FROM THE END - pop()
 */
console.log("\n📌 SECTION 2: pop() - Remove from END");
console.log("━".repeat(50));

let vegetables = ["carrot", "broccoli", "spinach", "peas"];
console.log("Initial array:", vegetables);

// Remove last element
const removed = vegetables.pop();
console.log("\n1️⃣ Remove last element:");
console.log("  vegetables.pop()");
console.log("  Removed element:", removed);
console.log("  Array now:", vegetables);

// pop returns the removed element
const lastItem = vegetables.pop();
console.log("\n2️⃣ pop() returns removed element:");
console.log("  Removed:", lastItem);
console.log("  Array now:", vegetables);

// Empty array pop
console.log("\n3️⃣ pop() on empty array:");
const empty = [];
console.log("  empty.pop() returns:", empty.pop()); // undefined

// Practical example - undo/redo stack
console.log("\n✅ Practical Example - Undo Stack:");
const actions = ["Type A", "Type B", "Delete C"];
console.log("  Actions:", actions);

const undone = actions.pop();
console.log("  Undo last action:", undone);
console.log("  Remaining:", actions);

/**
 * SECTION 3: ADDING TO THE BEGINNING - unshift()
 */
console.log("\n📌 SECTION 3: unshift() - Add to BEGINNING");
console.log("━".repeat(50));

let numbers = [3, 4, 5];
console.log("Initial array:", numbers);

// Add single element to beginning
numbers.unshift(2);
console.log("\n1️⃣ Add single element to beginning:");
console.log("  numbers.unshift(2)");
console.log("  Result:", numbers);

// Add multiple elements
numbers.unshift(0, 1);
console.log("\n2️⃣ Add multiple elements:");
console.log("  numbers.unshift(0, 1)");
console.log("  Result:", numbers);

// unshift returns new length
const newLen = numbers.unshift(-1);
console.log("\n3️⃣ unshift() returns new length:");
console.log("  Return value:", newLen);

// Practical example - priority queue
console.log("\n✅ Practical Example - Priority Tasks:");
const tasks = ["Normal task", "Low priority"];
console.log("  Tasks:", tasks);

tasks.unshift("URGENT", "HIGH PRIORITY");
console.log("  After adding high priority:", tasks);

/**
 * SECTION 4: REMOVING FROM THE BEGINNING - shift()
 */
console.log("\n📌 SECTION 4: shift() - Remove from BEGINNING");
console.log("━".repeat(50));

let colors = ["red", "green", "blue", "yellow"];
console.log("Initial array:", colors);

// Remove first element
const firstColor = colors.shift();
console.log("\n1️⃣ Remove first element:");
console.log("  colors.shift()");
console.log("  Removed element:", firstColor);
console.log("  Array now:", colors);

// shift returns removed element
const removedFirst = colors.shift();
console.log("\n2️⃣ shift() returns removed element:");
console.log("  Removed:", removedFirst);
console.log("  Array now:", colors);

// Empty array shift
console.log("\n3️⃣ shift() on empty array:");
const emptyArr = [];
console.log("  emptyArr.shift() returns:", emptyArr.shift());

// Practical example - queue (FIFO)
console.log("\n✅ Practical Example - Queue System:");
const queue = ["Person1", "Person2", "Person3"];
console.log("  Queue:", queue);

const served = queue.shift();
console.log("  Serving:", served);
console.log("  Remaining queue:", queue);

/**
 * SECTION 5: COMPARING push/pop vs unshift/shift
 */
console.log("\n📌 SECTION 5: Performance Comparison");
console.log("━".repeat(50));

console.log("\n📊 Stack (LIFO - Last In First Out):");
console.log("  Using push() + pop() - FASTEST");
const stack = [];
stack.push(1); // Add to top
stack.push(2);
stack.push(3);
console.log("  Stack after pushes:", stack);
console.log("  Pop:", stack.pop()); // Remove from top
console.log("  Stack after pop:", stack);

console.log("\n📊 Queue (FIFO - First In First Out):");
console.log("  Using push() + shift() - SLOWER");
const queue2 = [];
queue2.push(1); // Add to end
queue2.push(2);
queue2.push(3);
console.log("  Queue after pushes:", queue2);
console.log("  Shift:", queue2.shift()); // Remove from front
console.log("  Queue after shift:", queue2);

console.log("\n⚠️ Performance Note:");
console.log("  • push/pop: O(1) - Very Fast");
console.log("  • unshift/shift: O(n) - Slow for large arrays");
console.log("  • Use push/pop for stacks");
console.log("  • Use push/shift for queues");

/**
 * SECTION 6: splice() - Universal Add/Remove
 */
console.log("\n📌 SECTION 6: splice() - Add/Remove ANYWHERE");
console.log("━".repeat(50));

let months = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log("Initial array:", months);

// 1. Remove elements with splice(start, deleteCount)
console.log("\n1️⃣ Remove elements:");
const removed2 = months.splice(2, 1); // Remove 1 element at index 2
console.log("  months.splice(2, 1)");
console.log("  Removed:", removed2);
console.log("  Result:", months);

months = ["Jan", "Feb", "Mar", "Apr", "May"];
const removed3 = months.splice(1, 2); // Remove 2 elements starting at index 1
console.log("\n  months.splice(1, 2)");
console.log("  Removed:", removed3);
console.log("  Result:", months);

// 2. Add elements with splice(start, 0, items)
months = ["Jan", "Feb", "Apr", "May"];
console.log("\n2️⃣ Add elements:");
months.splice(2, 0, "Mar");
console.log("  months.splice(2, 0, 'Mar')");
console.log("  Result:", months);

months.splice(4, 0, "Jun", "Jul");
console.log("\n  months.splice(4, 0, 'Jun', 'Jul')");
console.log("  Result:", months);

// 3. Replace elements with splice(start, deleteCount, items)
months = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log("\n3️⃣ Replace elements:");
months.splice(1, 2, "FEB", "MAR");
console.log("  months.splice(1, 2, 'FEB', 'MAR')");
console.log("  Result:", months);

// 4. splice returns removed items
months = ["Jan", "Feb", "Mar", "Apr"];
const removed4 = months.splice(1, 2, "New1", "New2", "New3");
console.log("\n4️⃣ splice() returns removed items:");
console.log("  Removed:", removed4);
console.log("  Result:", months);

/**
 * SECTION 7: Practical Applications
 */
console.log("\n📌 SECTION 7: Practical Applications");
console.log("━".repeat(50));

// 1. To-Do List Application
console.log("\n✅ To-Do List Manager:");
let todos = ["Learn JS", "Practice", "Build project"];
console.log("  Todos:", todos);

// Add todo
todos.push("Review code");
console.log("  Add todo:", todos);

// Complete todo (remove)
const completed = todos.shift();
console.log("  Completed:", completed);
console.log("  Remaining:", todos);

// Insert todo at specific position
todos.splice(1, 0, "Take a break");
console.log("  Insert at position 1:", todos);

// 2. Browser History (Stack)
console.log("\n✅ Browser History:");
let history = [];
history.push("google.com");
history.push("youtube.com");
history.push("github.com");
console.log("  History:", history);

// Go back
const back = history.pop();
console.log("  Going back from:", back);
console.log("  Now at:", history);

// 3. Music Playlist
console.log("\n✅ Music Playlist:");
let playlist = ["Song1", "Song2", "Song3", "Song4"];
console.log("  Playlist:", playlist);

// Add to end
playlist.push("Song5");
console.log("  Add song:", playlist);

// Remove from front (played)
const played = playlist.shift();
console.log("  Playing:", played);
console.log("  Up next:", playlist);

// Insert at specific position
playlist.splice(2, 0, "Featured Song");
console.log("  Insert featured song:", playlist);

/**
 * SECTION 8: Common Patterns & Best Practices
 */
console.log("\n📌 SECTION 8: Best Practices");
console.log("━".repeat(50));

console.log("\n✅ Pattern 1: Using push/pop for Stack:");
class Stack {
    constructor() { this.items = []; }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
}
const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
console.log("  Stack pop:", stack2.pop());

console.log("\n✅ Pattern 2: Using push/shift for Queue:");
class Queue {
    constructor() { this.items = []; }
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.shift(); }
}
const queue3 = new Queue();
queue3.enqueue("First");
queue3.enqueue("Second");
console.log("  Queue dequeue:", queue3.dequeue());

console.log("\n✅ Pattern 3: Batch Operations:");
const arr = [1, 2, 3];
arr.push(...[4, 5, 6]); // Spread operator
console.log("  Batch push:", arr);

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - ARRAYS PART 2");
console.log("━".repeat(50));
console.log("✅ push() - Add to END, returns new length");
console.log("✅ pop() - Remove from END, returns removed item");
console.log("✅ unshift() - Add to BEGINNING, returns new length");
console.log("✅ shift() - Remove from BEGINNING, returns removed item");
console.log("✅ splice() - Add/Remove ANYWHERE, versatile");
console.log("✅ Use push/pop for STACK (LIFO)");
console.log("✅ Use push/shift for QUEUE (FIFO)");
console.log("⚠️ unshift/shift are slower for large arrays");

console.log("\n🎯 Quick Reference:");
console.log("  Add to end:     array.push(item)");
console.log("  Remove from end: array.pop()");
console.log("  Add to start:    array.unshift(item)");
console.log("  Remove from start: array.shift()");
console.log("  Add at index:    array.splice(index, 0, item)");
console.log("  Remove at index: array.splice(index, 1)");

console.log("\n===== END OF ARRAYS PART 2 =====");