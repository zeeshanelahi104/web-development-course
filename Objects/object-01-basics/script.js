console.log("===== OBJECTS - PART 1: BASICS & CREATION =====");
console.log("");

/**
 * SECTION 1: WHAT ARE OBJECTS?
 */
console.log("📌 SECTION 1: WHAT ARE OBJECTS?");
console.log("━".repeat(50));

// Without objects - many variables
const personName = "John";
const personAge = 30;
const personCity = "New York";
const personJob = "Developer";
console.log("Without object - scattered variables:");
console.log(`  ${personName}, ${personAge}, ${personCity}, ${personJob}`);

// With object - grouped together
const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer"
};
console.log("\nWith object - grouped data:");
console.log("  Person object:", person);
console.log("  Access: person.name =", person.name);

console.log("\n✅ Benefits of Objects:");
console.log("  • Group related data together");
console.log("  • Real-world modeling");
console.log("  • Easy to pass around");
console.log("  • Dynamic properties");
console.log("  • Can attach methods (functions)");

/**
 * SECTION 2: CREATING OBJECTS
 */
console.log("\n📌 SECTION 2: CREATING OBJECTS");
console.log("━".repeat(50));

// Method 1: Object literal (MOST COMMON - RECOMMENDED)
console.log("\n1️⃣ Object Literal {} - RECOMMENDED:");
const user = {
    username: "alice123",
    email: "alice@example.com",
    isActive: true
};
console.log("  const user = { username: 'alice123', ... }");
console.log("  Result:", user);

// Method 2: new Object() constructor
console.log("\n2️⃣ Object Constructor - NOT RECOMMENDED:");
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log("  const car = new Object();");
console.log("  Result:", car);

// Method 3: Object.create()
console.log("\n3️⃣ Object.create() - For inheritance:");
const animalPrototype = {
    speak() {
        return `${this.name} makes a sound`;
    }
};
const dog = Object.create(animalPrototype);
dog.name = "Rex";
dog.breed = "German Shepherd";
console.log("  Object.create() with prototype:");
console.log("  Dog:", dog);
console.log("  Speak method:", dog.speak());

// Method 4: Class syntax (ES6)
console.log("\n4️⃣ Class Syntax - Modern OOP:");
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    
    study() {
        return `${this.name} is studying`;
    }
}
const student = new Student("Emma", "A");
console.log("  Class instance:", student);
console.log("  Method call:", student.study());

// Method 5: Using Object.assign()
console.log("\n5️⃣ Object.assign() - Copy properties:");
const template = { x: 0, y: 0 };
const point = Object.assign({}, template, { x: 5, y: 10 });
console.log("  Object.assign result:", point);

/**
 * SECTION 3: PROPERTIES - KEYS AND VALUES
 */
console.log("\n📌 SECTION 3: PROPERTIES - KEYS AND VALUES");
console.log("━".repeat(50));

const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    pages: 172,
    isAvailable: true
};
console.log("Book object:", book);

// Property types
console.log("\n1️⃣ Property Types:");
console.log("  String key:", book.title);
console.log("  Number value:", book.year);
console.log("  Boolean value:", book.isAvailable);

// Computed property names
console.log("\n2️⃣ Computed Property Names:");
const dynamicKey = "rating";
const movie = {
    title: "Inception",
    [dynamicKey]: 4.8,
    ["release_" + "year"]: 2010
};
console.log("  Dynamic property:", movie);

// Symbol as property key
console.log("\n3️⃣ Symbol Properties:");
const uniqueId = Symbol("id");
const obj = {
    [uniqueId]: 12345,
    name: "Test"
};
console.log("  Symbol property:", obj[uniqueId]);
console.log("  Not enumerable in for...in:", Object.keys(obj));

/**
 * SECTION 4: ACCESSING PROPERTIES
 */
console.log("\n📌 SECTION 4: ACCESSING PROPERTIES");
console.log("━".repeat(50));

const employee = {
    firstName: "John",
    lastName: "Doe",
    "full name": "John Doe",  // Property with space
    department: "Engineering",
    salary: 75000
};
console.log("Employee:", employee);

// Dot notation (most common)
console.log("\n1️⃣ Dot Notation:");
console.log("  employee.firstName:", employee.firstName);
console.log("  employee.department:", employee.department);

// Bracket notation (for special keys)
console.log("\n2️⃣ Bracket Notation:");
console.log("  employee['lastName']:", employee['lastName']);
console.log("  employee['full name']:", employee['full name']); // Required for spaces

// Dynamic property access
console.log("\n3️⃣ Dynamic Access:");
const propName = "salary";
console.log(`  employee[propName] (${propName}):`, employee[propName]);

// Optional chaining (ES2020)
console.log("\n4️⃣ Optional Chaining (?.):");
console.log("  employee?.address?.city:", employee?.address?.city); // undefined, no error

// Non-existent properties
console.log("\n5️⃣ Non-existent Properties:");
console.log("  employee.phone:", employee.phone); // undefined

/**
 * SECTION 5: ADDING & UPDATING PROPERTIES
 */
console.log("\n📌 SECTION 5: ADDING & UPDATING PROPERTIES");
console.log("━".repeat(50));

let product = {
    id: 1,
    name: "Laptop"
};
console.log("Initial product:", product);

// Adding new properties
console.log("\n1️⃣ Adding Properties:");
product.price = 999;
product.inStock = true;
product["category"] = "Electronics";
console.log("  After adding properties:", product);

// Updating existing properties
console.log("\n2️⃣ Updating Properties:");
product.price = 899;  // Update price
product.name = "Gaming Laptop";
console.log("  After updates:", product);

// Adding methods
console.log("\n3️⃣ Adding Methods:");
product.getInfo = function() {
    return `${this.name} costs $${this.price}`;
};
console.log("  Method added:", product.getInfo());

// Adding multiple properties at once
console.log("\n4️⃣ Adding Multiple Properties:");
Object.assign(product, {
    brand: "Dell",
    warranty: "2 years",
    rating: 4.5
});
console.log("  After Object.assign:", product);

/**
 * SECTION 6: DELETING PROPERTIES
 */
console.log("\n📌 SECTION 6: DELETING PROPERTIES");
console.log("━".repeat(50));

const config = {
    apiKey: "abc123",
    timeout: 5000,
    debug: true,
    cache: false,
    version: "1.0"
};
console.log("Initial config:", config);

// Delete single property
console.log("\n1️⃣ Delete Property:");
delete config.debug;
console.log("  After delete config.debug:", config);

// Delete multiple properties
console.log("\n2️⃣ Delete Multiple:");
delete config.cache;
delete config.version;
console.log("  After deleting cache and version:", config);

// Delete non-existent property (no error)
console.log("\n3️⃣ Delete Non-existent:");
delete config.unknown;
console.log("  No error, returns true");

// Check if property exists after deletion
console.log("\n4️⃣ Check Existence:");
console.log("  'debug' in config?", 'debug' in config);
console.log("  config.hasOwnProperty('timeout')?", config.hasOwnProperty('timeout'));

/**
 * SECTION 7: OBJECT METHODS
 */
console.log("\n📌 SECTION 7: OBJECT METHODS");
console.log("━".repeat(50));

const calculator = {
    // Properties
    value: 0,
    
    // Method shorthand (ES6)
    add(n) {
        this.value += n;
        return this;  // For chaining
    },
    
    subtract(n) {
        this.value -= n;
        return this;
    },
    
    multiply(n) {
        this.value *= n;
        return this;
    },
    
    getValue() {
        return this.value;
    },
    
    reset() {
        this.value = 0;
        return this;
    }
};

console.log("Calculator object with methods:");
console.log("  Initial value:", calculator.getValue());

// Using methods
calculator.add(10);
console.log("  After add(10):", calculator.getValue());

calculator.multiply(2);
console.log("  After multiply(2):", calculator.getValue());

// Method chaining
calculator.reset().add(5).multiply(3).subtract(2);
console.log("  After chaining (reset→add→multiply→subtract):", calculator.getValue());

// Adding method to existing object
calculator.divide = function(n) {
    if (n !== 0) {
        this.value /= n;
    }
    return this;
};
calculator.divide(2);
console.log("  After adding divide method:", calculator.getValue());

/**
 * SECTION 8: CHECKING PROPERTY EXISTENCE
 */
console.log("\n📌 SECTION 8: CHECKING PROPERTY EXISTENCE");
console.log("━".repeat(50));

const user2 = {
    name: "Alice",
    age: 25,
    address: {
        city: "NYC",
        zip: "10001"
    }
};
console.log("User object:", user2);

// 1. in operator (checks own + inherited)
console.log("\n1️⃣ 'in' operator:");
console.log("  'name' in user2:", 'name' in user2);
console.log("  'toString' in user2:", 'toString' in user2); // inherited
console.log("  'salary' in user2:", 'salary' in user2);

// 2. hasOwnProperty() (own properties only)
console.log("\n2️⃣ hasOwnProperty():");
console.log("  user2.hasOwnProperty('name'):", user2.hasOwnProperty('name'));
console.log("  user2.hasOwnProperty('toString'):", user2.hasOwnProperty('toString')); // false

// 3. Object.hasOwn() (modern, recommended)
console.log("\n3️⃣ Object.hasOwn() - Modern:");
console.log("  Object.hasOwn(user2, 'name'):", Object.hasOwn(user2, 'name'));
console.log("  Object.hasOwn(user2, 'toString'):", Object.hasOwn(user2, 'toString'));

// 4. Check undefined (not reliable if value is undefined)
console.log("\n4️⃣ Undefined check:");
console.log("  user2.name !== undefined:", user2.name !== undefined);
console.log("  user2.salary !== undefined:", user2.salary !== undefined);

// 5. Optional chaining
console.log("\n5️⃣ Optional Chaining for nested:");
console.log("  user2?.address?.city:", user2?.address?.city);
console.log("  user2?.contact?.phone:", user2?.contact?.phone);

/**
 * SECTION 9: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 9: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create a user profile
console.log("\n✅ Exercise 1: User Profile");
const userProfile = {
    username: "tech_guru",
    email: "guru@tech.com",
    age: 28,
    isPremium: true,
    // Add method
    getProfile() {
        return `${this.username} (${this.email}) - Age: ${this.age}`;
    }
};
console.log("  User profile:", userProfile);
console.log("  Profile info:", userProfile.getProfile());

// Exercise 2: Create a car object
console.log("\n✅ Exercise 2: Car Object");
const car2 = {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Red",
    // Add method
    start() {
        return `${this.make} ${this.model} is starting...`;
    }
};
console.log("  Car:", car2);
console.log("  Start:", car2.start());

// Exercise 3: Dynamic property addition
console.log("\n✅ Exercise 3: Dynamic Properties");
const settings = {};
const settingName = "theme";
const settingValue = "dark";
settings[settingName] = settingValue;
settings["auto" + "Save"] = true;
settings["version_" + 2] = "2.0.0";
console.log("  Dynamic settings:", settings);

// Exercise 4: Nested object
console.log("\n✅ Exercise 4: Nested Object");
const company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        zip: "94105"
    },
    employees: {
        total: 150,
        departments: ["Engineering", "Sales", "HR"]
    }
};
console.log("  Company:", company);
console.log("  Company city:", company.address.city);
console.log("  First department:", company.employees.departments[0]);

/**
 * SECTION 10: COMMON MISTAKES
 */
console.log("\n📌 SECTION 10: COMMON MISTAKES");
console.log("━".repeat(50));

console.log("\n❌ Mistake 1: Using dot notation with dynamic keys");
const key = "name";
const obj2 = { name: "John" };
// console.log(obj2.key); // WRONG - looks for property 'key'
console.log("  ❌ obj2.key - undefined");
console.log("  ✅ obj2[key] -", obj2[key]);

console.log("\n❌ Mistake 2: Forgetting quotes for special property names");
const obj3 = { "first-name": "John" }; // Needs quotes
console.log("  ✅ obj3['first-name']:", obj3["first-name"]);

console.log("\n❌ Mistake 3: Confusing property existence with value");
const obj4 = { value: undefined };
console.log("  obj4.value !== undefined:", obj4.value !== undefined); // false
console.log("  'value' in obj4:", 'value' in obj4); // true - correct way

console.log("\n❌ Mistake 4: Modifying object during iteration");
const scores = { math: 90, science: 85 };
for (let key in scores) {
    // delete scores[key]; // BAD - modifies during iteration
}
console.log("  ✅ Use Object.keys() for safe deletion");

console.log("\n✅ Best Practices:");
console.log("  1. Use object literal {} for creation");
console.log("  2. Use dot notation for known properties");
console.log("  3. Use bracket notation for dynamic keys");
console.log("  4. Use optional chaining for nested properties");
console.log("  5. Use Object.hasOwn() to check existence");
console.log("  6. Keep objects focused (single responsibility)");

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - OBJECTS PART 1");
console.log("━".repeat(50));
console.log("✅ Objects group related data using key-value pairs");
console.log("✅ Object literal {} is the most common creation method");
console.log("✅ Dot notation (obj.key) for known properties");
console.log("✅ Bracket notation (obj['key']) for dynamic/special keys");
console.log("✅ Add properties: obj.newKey = value");
console.log("✅ Update properties: obj.existingKey = newValue");
console.log("✅ Delete properties: delete obj.key");
console.log("✅ Check existence: 'key' in obj or Object.hasOwn(obj, 'key')");
console.log("✅ Methods are functions stored as properties");

console.log("\n🎯 Key Terms:");
console.log("  • Property: A key-value pair in an object");
console.log("  • Key/Property name: The identifier (string or symbol)");
console.log("  • Value: Can be any JavaScript type");
console.log("  • Method: A property whose value is a function");
console.log("  • Nested object: Object inside another object");

console.log("\n===== END OF OBJECTS PART 1 =====");