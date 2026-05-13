// //higher order function
// function a(b) {
//     console.dir(b);
//     b()
// }




// //callback function
// a(function() {
//     console.log('Hiiiiiiiiiiiiiiiiiii');
// })




console.log("===== HIGHER ORDER FUNCTIONS DEMO START =====");

/**
 * 🔹 EXAMPLE 1: Function that ACCEPTS another function (Callback)
 */

console.log("\n👉 Example 1: Higher Order Function that accepts a callback");

// Higher Order Function
function a(b) {
    console.log("Inside higher order function 'a'");
    console.log("Received callback function:", b);
    console.dir(b);  // Logs the function details
    
    console.log("Executing the callback function...");
    b();  // Execute the callback
}

// Callback function (passed as argument)
a(function() {
    console.log('Hiiiiiiiiiiiiiiiiiii from callback!');
});

console.log("\n---");

/**
 * 🔹 EXAMPLE 2: Function that RETURNS another function
 */

console.log("\n👉 Example 2: Higher Order Function that returns a function");

function multiplier(factor) {
    console.log(`Creating a multiplier function with factor: ${factor}`);
    
    // Returns a new function
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);  // double is now a function
const triple = multiplier(3);  // triple is now a function

console.log("double(5) =", double(5));   // 10
console.log("triple(5) =", triple(5));   // 15
console.log("double(10) =", double(10)); // 20

/**
 * 🔹 EXAMPLE 3: Practical Example - Array Operations (Built-in HOFs)
 */

console.log("\n👉 Example 3: Built-in Higher Order Functions (map, filter, reduce)");

const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// map() - transforms each element
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("map (double):", doubled);

// filter() - filters elements
const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("filter (evens):", evens);

// reduce() - reduces to single value
const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log("reduce (sum):", sum);

// Chaining HOFs
const result = numbers
    .filter(num => num > 2)      // [3, 4, 5]
    .map(num => num * 3)          // [9, 12, 15]
    .reduce((sum, num) => sum + num, 0);  // 36
console.log("Chained HOFs (filter > 2, multiply by 3, sum):", result);

/**
 * 🔹 EXAMPLE 4: setTimeout - Async Higher Order Function
 */

console.log("\n👉 Example 4: setTimeout (Async Higher Order Function)");

setTimeout(function() {
    console.log("⏰ This callback executed after 1 second (setTimeout)");
}, 1000);

console.log("⏰ setTimeout scheduled - this runs immediately");

/**
 * 🔹 EXAMPLE 5: Event Listener (DOM Higher Order Function)
 */

console.log("\n👉 Example 5: Event Listener (click me demo)");

// Create a button dynamically
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.margin = '10px 0';
button.style.cursor = 'pointer';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';

document.body.appendChild(button);

// addEventListener is a Higher Order Function
button.addEventListener('click', function() {
    console.log("🖱️ Button clicked! Callback function executed!");
    alert('Higher Order Function in action! Check console.');
});

console.log("✅ Button added - click it to see the HOF in action!");

/**
 * 🔹 EXAMPLE 6: Creating a Custom Higher Order Function
 */

console.log("\n👉 Example 6: Custom Higher Order Function - operateOnArray");

function operateOnArray(arr, operation) {
    console.log(`Operating on array: [${arr}]`);
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
    }
    return result;
}

// Different callback operations
const square = function(x) { return x * x; };
const addTen = function(x) { return x + 10; };
const toString = function(x) { return `Number: ${x}`; };

console.log("Original:", numbers);
console.log("Square:", operateOnArray(numbers, square));
console.log("Add Ten:", operateOnArray(numbers, addTen));
console.log("To String:", operateOnArray(numbers, toString));

/**
 * 🔹 EXAMPLE 7: Function that returns function for configuration
 */

console.log("\n👉 Example 7: Function Factory (returns configured functions)");

function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
const sayNamaste = createGreeter("Namaste");
const sayHola = createGreeter("Hola");

console.log(sayHello("John"));
console.log(sayNamaste("Priya"));
console.log(sayHola("Carlos"));

/**
 * 🔹 EXAMPLE 8: Async Operation Simulator with Callback
 */

console.log("\n👉 Example 8: Async Operation with Callback");

function fetchData(callback) {
    console.log("📡 Fetching data...");
    
    // Simulate API call with setTimeout
    setTimeout(function() {
        const data = { id: 1, name: "Sample Data", timestamp: Date.now() };
        console.log("✅ Data received!");
        callback(data);
    }, 1500);
}

fetchData(function(data) {
    console.log("📦 Processing callback data:", data);
    console.log(`Data name: ${data.name}, ID: ${data.id}`);
});

/**
 * 🔹 VISUALIZING THE CALLBACK FLOW
 */

console.log("\n===== HIGHER ORDER FUNCTION FLOW =====");
console.log("1. Higher Order Function receives callback");
console.log("2. HOF may execute callback immediately or later");
console.log("3. Callback 'calls back' to the HOF with result");
console.log("");
console.log("Common use cases:");
console.log("- Array methods (map, filter, reduce)");
console.log("- Event handlers (click, submit, keypress)");
console.log("- Timers (setTimeout, setInterval)");
console.log("- AJAX/Fetch calls");
console.log("- Promises (.then(), .catch())");

/**
 * 🔹 SUMMARY
 */
console.log("\n===== SUMMARY =====");
console.log("✅ Higher Order Function = Takes function as arg OR returns function");
console.log("✅ Callback = Function passed as argument");
console.log("✅ Built-in HOFs: map, filter, reduce, forEach, setTimeout");
console.log("✅ Benefits: Reusability, Abstraction, Functional Programming");

console.log("\n===== HIGHER ORDER FUNCTIONS DEMO END =====");