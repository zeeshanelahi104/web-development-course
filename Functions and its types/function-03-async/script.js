console.log("===== FUNCTIONS - PART 3: ASYNC PATTERNS =====");
console.log("");

/**
 * SECTION 1: CALLBACK FUNCTIONS
 */
console.log("📌 SECTION 1: CALLBACK FUNCTIONS");
console.log("━".repeat(50));

// Basic callback example
console.log("1️⃣ Basic Callback:");
function processUser(name, callback) {
    console.log(`  Processing user: ${name}`);
    const result = callback(name);
    console.log(`  Callback result: ${result}`);
    return result;
}

function toUpperCase(name) {
    return name.toUpperCase();
}

processUser("Alice", toUpperCase);

// Callback with array methods
console.log("\n2️⃣ Callbacks with Arrays:");
const numbers = [1, 2, 3, 4, 5];
const doubled2 = numbers.map(n => n * 2);
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("  Doubled:", doubled2);
console.log("  Evens:", evenNumbers);

// Async callback - setTimeout
console.log("\n3️⃣ Async Callback (setTimeout):");
console.log("  Start");
setTimeout(() => {
    console.log("  This runs after 1 second");
}, 1000);
console.log("  End (continues executing)");

// Event listener callback (simulated)
console.log("\n4️⃣ Event Callback:");
function addEventListener(event, callback) {
    console.log(`  Listening for ${event}`);
    // Simulate event after 2 seconds
    setTimeout(() => {
        callback({ type: event, timestamp: Date.now() });
    }, 2000);
}

addEventListener("click", (event) => {
    console.log("  Event triggered:", event);
});

// Callback Hell (Pyramid of Doom)
console.log("\n5️⃣ Callback Hell Example:");
function step1(callback) {
    setTimeout(() => {
        console.log("  Step 1 complete");
        callback(null, "Data from step 1");
    }, 1000);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log("  Step 2 complete with:", data);
        callback(null, "Data from step 2");
    }, 1000);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log("  Step 3 complete with:", data);
        callback(null, "Final result");
    }, 1000);
}

// Callback hell - nested callbacks
console.log("\n  ❌ Callback Hell:");
step1((error, result1) => {
    if (error) console.error(error);
    else {
        step2(result1, (error, result2) => {
            if (error) console.error(error);
            else {
                step3(result2, (error, result3) => {
                    if (error) console.error(error);
                    else {
                        console.log("  Final:", result3);
                    }
                });
            }
        });
    }
});

/**
 * SECTION 2: PROMISES
 */
console.log("\n📌 SECTION 2: PROMISES");
console.log("━".repeat(50));

// Creating a Promise
console.log("1️⃣ Creating Promises:");
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 1000);
});

myPromise
    .then(result => console.log("  Success:", result))
    .catch(error => console.log("  Error:", error));

// Promise with async operation
console.log("\n2️⃣ Promise Wrapping Async Operation:");
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("  Fetching data...");
        
        setTimeout(() => {
            const data = { id: 1, name: "Sample Data", timestamp: Date.now() };
            resolve(data);
        }, 1500);
    });
}

fetchData()
    .then(data => console.log("  Data received:", data))
    .catch(error => console.log("  Error:", error));

// Promise with rejection
console.log("\n3️⃣ Promise Rejection:");
function validateUser(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve({ valid: true, message: "User is adult" });
            } else {
                reject({ valid: false, message: "User is underage" });
            }
        }, 500);
    });
}

validateUser(20)
    .then(result => console.log("  Success:", result))
    .catch(error => console.log("  Error:", error));

validateUser(15)
    .then(result => console.log("  Success:", result))
    .catch(error => console.log("  Error:", error.message));

// Promise chaining
console.log("\n4️⃣ Promise Chaining:");
function asyncStep1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 data"), 500);
    });
}

function asyncStep2(previousData) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${previousData} → Step 2 data`), 500);
    });
}

function asyncStep3(previousData) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${previousData} → Step 3 data`), 500);
    });
}

asyncStep1()
    .then(result1 => {
        console.log("  ", result1);
        return asyncStep2(result1);
    })
    .then(result2 => {
        console.log("  ", result2);
        return asyncStep3(result2);
    })
    .then(result3 => {
        console.log("  Final:", result3);
    });

// Promise.all - wait for all promises
console.log("\n5️⃣ Promise.all:");
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 500));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("  All promises resolved:", results);
    });

// Promise.race - first to finish
console.log("\n6️⃣ Promise.race:");
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("  First promise to finish:", result);
    });

// Promise.allSettled - wait for all (don't fail fast)
console.log("\n7️⃣ Promise.allSettled:");
const mixedPromises = [
    Promise.resolve("Success"),
    Promise.reject("Failure"),
    Promise.resolve("Another success")
];

Promise.allSettled(mixedPromises)
    .then(results => {
        console.log("  All settled:");
        results.forEach((result, index) => {
            console.log(`    ${index}:`, result.status, result.value || result.reason);
        });
    });

// Promise.any - first successful
console.log("\n8️⃣ Promise.any:");
const anyPromises = [
    Promise.reject("Error 1"),
    Promise.reject("Error 2"),
    Promise.resolve("Success!"),
    Promise.resolve("Another success")
];

Promise.any(anyPromises)
    .then(result => {
        console.log("  First successful:", result);
    })
    .catch(error => {
        console.log("  All rejected:", error);
    });

/**
 * SECTION 3: ASYNC/AWAIT
 */
console.log("\n📌 SECTION 3: ASYNC/AWAIT");
console.log("━".repeat(50));

// Basic async function
console.log("1️⃣ Basic Async Function:");
async function greetAsync() {
    return "Hello from async function!";
}

greetAsync().then(result => console.log("  ", result));

// Async/await with promises
console.log("\n2️⃣ Async/Await with Promises:");
async function fetchUserData() {
    console.log("  Fetching user data...");
    
    const data = await fetchData();
    console.log("  User data received:", data);
    
    return data;
}

fetchUserData();

// Sequential async operations
console.log("\n3️⃣ Sequential Async Operations:");
async function processSequentially() {
    console.log("  Starting sequential processing...");
    
    const result1 = await asyncStep1();
    console.log("  Step 1:", result1);
    
    const result2 = await asyncStep2(result1);
    console.log("  Step 2:", result2);
    
    const result3 = await asyncStep3(result2);
    console.log("  Step 3:", result3);
    
    return result3;
}

processSequentially().then(final => console.log("  Final result:", final));

// Parallel async operations
console.log("\n4️⃣ Parallel Async Operations:");
async function processInParallel() {
    console.log("  Starting parallel processing...");
    
    const results = await Promise.all([
        asyncStep1(),
        asyncStep2("Parallel"),
        asyncStep3("Parallel")
    ]);
    
    console.log("  All results:", results);
    return results;
}

processInParallel();

// Error handling with try/catch
console.log("\n5️⃣ Error Handling with try/catch:");
async function riskyOperation() {
    try {
        console.log("  Attempting risky operation...");
        const result = await validateUser(15);
        console.log("  Success:", result);
    } catch (error) {
        console.log("  Caught error:", error.message);
    } finally {
        console.log("  Cleanup always runs");
    }
}

riskyOperation();

// Multiple await with error handling
console.log("\n6️⃣ Multiple Await Operations:");
async function multipleOperations() {
    try {
        const results = await Promise.all([
            fetchData(),
            validateUser(25),
            asyncStep1()
        ]);
        console.log("  All operations succeeded:", results);
    } catch (error) {
        console.log("  At least one operation failed:", error);
    }
}

multipleOperations();

/**
 * SECTION 4: PRACTICAL ASYNC PATTERNS
 */
console.log("\n📌 SECTION 4: PRACTICAL ASYNC PATTERNS");
console.log("━".repeat(50));

// 1. Retry pattern
console.log("\n✅ Retry Pattern:");
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            console.log(`  Attempt ${i} for ${url}`);
            // Simulate API call
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (i === 3) {
                        resolve({ data: "Success!", url });
                    } else {
                        reject(new Error("Network error"));
                    }
                }, 500);
            });
            return result;
        } catch (error) {
            console.log(`  Attempt ${i} failed:`, error.message);
            if (i === maxRetries) throw error;
        }
    }
}

fetchWithRetry("/api/data")
    .then(result => console.log("  Final result:", result))
    .catch(error => console.log("  All retries failed:", error.message));

// 2. Timeout pattern
console.log("\n✅ Timeout Pattern:");
function withTimeout(promise, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

const slowOperation = new Promise(resolve => {
    setTimeout(() => resolve("Operation completed"), 2000);
});

withTimeout(slowOperation, 1000)
    .then(result => console.log("  Success:", result))
    .catch(error => console.log("  Error:", error.message));

// 3. Debounced async function
console.log("\n✅ Debounced Async:");
function debounceAsync(func, delay) {
    let timeoutId;
    let pendingPromise = null;
    
    return function(...args) {
        if (pendingPromise) return pendingPromise;
        
        clearTimeout(timeoutId);
        
        pendingPromise = new Promise((resolve, reject) => {
            timeoutId = setTimeout(async () => {
                try {
                    const result = await func(...args);
                    resolve(result);
                } catch (error) {
                    reject(error);
                } finally {
                    pendingPromise = null;
                }
            }, delay);
        });
        
        return pendingPromise;
    };
}

const debouncedSearch = debounceAsync(async (query) => {
    console.log(`  Searching for: ${query}`);
    return { results: [`Result for ${query}`] };
}, 500);

debouncedSearch("JavaScript");
debouncedSearch("JavaScript");
debouncedSearch("JavaScript");
setTimeout(() => {
    debouncedSearch("Final search");
}, 600);

// 4. Throttled async function
console.log("\n✅ Throttled Async:");
function throttleAsync(func, limit) {
    let inThrottle = false;
    let pendingArgs = null;
    
    return async function(...args) {
        if (!inThrottle) {
            inThrottle = true;
            const result = await func(...args);
            setTimeout(() => {
                inThrottle = false;
                if (pendingArgs) {
                    this(...pendingArgs);
                    pendingArgs = null;
                }
            }, limit);
            return result;
        } else {
            pendingArgs = args;
            return new Promise((resolve) => {
                const checkInterval = setInterval(() => {
                    if (!inThrottle) {
                        clearInterval(checkInterval);
                        resolve(this(...args));
                    }
                }, 50);
            });
        }
    };
}

const throttledLog = throttleAsync(async (msg) => {
    console.log(`  ${msg} at ${new Date().toLocaleTimeString()}`);
    return msg;
}, 1000);

throttledLog("Message 1");
throttledLog("Message 2");
throttledLog("Message 3");

/**
 * SECTION 5: COMPARISON
 */
console.log("\n📌 SECTION 5: COMPARISON");
console.log("━".repeat(50));

console.log("\n📊 Async Pattern Comparison:");
console.log("┌────────────┬──────────────┬────────────┬─────────────┐");
console.log("│ Pattern    │ Readability │ Error Handling │ Control  │");
console.log("├────────────┼──────────────┼────────────┼─────────────┤");
console.log("│ Callback   │ Poor         │ Limited    │ Low         │");
console.log("│ Promise    │ Good         │ Excellent  │ Medium      │");
console.log("│ Async/Await│ Excellent    │ Excellent  │ High        │");
console.log("└────────────┴──────────────┴────────────┴─────────────┘");

/**
 * SECTION 6: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 6: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Convert callback to Promise
console.log("\n✅ Exercise 1: Callback to Promise");
function callbackBasedFunction(callback) {
    setTimeout(() => {
        callback(null, { message: "Callback data" });
    }, 500);
}

function promisifiedFunction() {
    return new Promise((resolve, reject) => {
        callbackBasedFunction((error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
}

promisifiedFunction().then(data => console.log("  Promisified:", data));

// Exercise 2: Sequential API calls
console.log("\n✅ Exercise 2: Sequential API Calls");
async function getUserData() {
    const user = await new Promise(resolve => 
        setTimeout(() => resolve({ id: 1, name: "John" }), 500)
    );
    const posts = await new Promise(resolve => 
        setTimeout(() => resolve([{ title: "Post 1" }, { title: "Post 2" }]), 500)
    );
    const comments = await new Promise(resolve => 
        setTimeout(() => resolve([{ text: "Comment 1" }]), 500)
    );
    
    return { user, posts, comments };
}

getUserData().then(data => console.log("  User data:", Object.keys(data)));

// Exercise 3: Parallel API calls with timeout
console.log("\n✅ Exercise 3: Parallel Calls with Timeout");
async function fetchWithTimeout(urls, timeoutMs) {
    const promises = urls.map(url => 
        withTimeout(
            new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), Math.random() * 2000)),
            timeoutMs
        )
    );
    
    return Promise.allSettled(promises);
}

fetchWithTimeout(["/api/1", "/api/2", "/api/3"], 1500)
    .then(results => {
        console.log("  Results:", results.map(r => r.status));
    });

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - FUNCTIONS PART 3");
console.log("━".repeat(50));
console.log("✅ Callbacks - Functions passed as arguments");
console.log("✅ Promise - Object representing async operation");
console.log("✅ Promise Methods:");
console.log("  • Promise.all - Wait for all");
console.log("  • Promise.race - First to finish");
console.log("  • Promise.allSettled - Wait for all (no fail fast)");
console.log("  • Promise.any - First successful");
console.log("✅ Async/Await - Syntactic sugar for Promises");
console.log("✅ Error Handling - try/catch with async/await");

console.log("\n🎯 When to use which:");
console.log("  • Simple async ops → Promise");
console.log("  • Complex async flow → Async/Await");
console.log("  • Multiple parallel ops → Promise.all");
console.log("  • Need timeout → Promise.race");
console.log("  • Event handlers → Callbacks");

console.log("\n===== END OF FUNCTIONS PART 3 =====");