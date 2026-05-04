console.log("===== OBJECTS - PART 3: ADVANCED FEATURES =====");
console.log("");

/**
 * SECTION 1: GETTERS AND SETTERS
 */
console.log("📌 SECTION 1: GETTERS AND SETTERS");
console.log("━".repeat(50));

// Basic getter/setter
const person = {
    firstName: "John",
    lastName: "Doe",
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1] || "";
    }
};

console.log("Person object with getter/setter:");
console.log("  Initial:", person.firstName, person.lastName);
console.log("  Get fullName:", person.fullName);
person.fullName = "Jane Smith";
console.log("  After set fullName:", person.firstName, person.lastName);
console.log("  Get fullName again:", person.fullName);

// Getter/setter with validation
console.log("\n✅ Getter/Setter with Validation:");
const bankAccount = {
    _balance: 0,  // Convention for private property
    
    get balance() {
        return `$${this._balance}`;
    },
    
    set balance(amount) {
        if (amount < 0) {
            console.log("  Error: Balance cannot be negative!");
            return;
        }
        this._balance = amount;
    },
    
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        }
    }
};

bankAccount.balance = 1000;
console.log("  After deposit: balance =", bankAccount.balance);
bankAccount.withdraw(200);
console.log("  After withdraw $200:", bankAccount.balance);
bankAccount.balance = -500; // Will show error
console.log("  After invalid deposit:", bankAccount.balance);

// Getter/setter with computed values
console.log("\n✅ Computed Values:");
const circle = {
    _radius: 5,
    
    get diameter() {
        return this._radius * 2;
    },
    
    set diameter(d) {
        this._radius = d / 2;
    },
    
    get area() {
        return Math.PI * this._radius ** 2;
    },
    
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
};

console.log(`  Radius: ${circle._radius}`);
console.log(`  Diameter: ${circle.diameter}`);
console.log(`  Area: ${circle.area.toFixed(2)}`);
console.log(`  Circumference: ${circle.circumference.toFixed(2)}`);
circle.diameter = 20;
console.log(`  After setting diameter to 20:`);
console.log(`  New radius: ${circle._radius}`);
console.log(`  New area: ${circle.area.toFixed(2)}`);

/**
 * SECTION 2: PROPERTY DESCRIPTORS
 */
console.log("\n📌 SECTION 2: PROPERTY DESCRIPTORS");
console.log("━".repeat(50));

const user = {
    name: "Alice",
    age: 25
};
console.log("User object:", user);

// Get property descriptor
console.log("\n1️⃣ Get Descriptor:");
const descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log("  Descriptor for 'name':", descriptor);

// Define property with descriptor
console.log("\n2️⃣ Define Property with Descriptor:");
const product = {};
Object.defineProperty(product, "id", {
    value: 101,
    writable: false,      // Cannot change
    enumerable: true,     // Shows in loops
    configurable: false    // Cannot delete or reconfigure
});

Object.defineProperty(product, "name", {
    value: "Laptop",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log("  Product:", product);
product.id = 102; // Won't change
product.name = "Gaming Laptop";
console.log("  After modifications:", product);

// Non-enumerable property
console.log("\n3️⃣ Non-enumerable Property:");
const employee = {
    name: "Bob",
    salary: 50000
};

Object.defineProperty(employee, "id", {
    value: 12345,
    enumerable: false  // Won't appear in loops
});

console.log("  Object.keys():", Object.keys(employee));
console.log("  for...in loop:");
for (let key in employee) {
    console.log(`    ${key}: ${employee[key]}`);
}

// Getting all descriptors
console.log("\n4️⃣ All Descriptors:");
const allDescriptors = Object.getOwnPropertyDescriptors(employee);
console.log("  All descriptors:", allDescriptors);

/**
 * SECTION 3: OBJECT PREVENTION METHODS
 */
console.log("\n📌 SECTION 3: OBJECT PREVENTION METHODS");
console.log("━".repeat(50));

// 1. Object.preventExtensions() - Cannot add new properties
console.log("\n1️⃣ Object.preventExtensions():");
const config = { version: "1.0", debug: true };
console.log("  Initial:", config);

Object.preventExtensions(config);
config.newProp = "test"; // Won't work
config.version = "2.0"; // Can modify existing
console.log("  After preventExtensions:", config);
console.log("  Is extensible?", Object.isExtensible(config));

// 2. Object.seal() - Cannot add/delete properties
console.log("\n2️⃣ Object.seal():");
const settings = { theme: "dark", fontSize: 14 };
console.log("  Initial:", settings);

Object.seal(settings);
settings.theme = "light"; // Can modify
settings.newProp = "test"; // Cannot add
delete settings.fontSize; // Cannot delete
console.log("  After seal:", settings);
console.log("  Is sealed?", Object.isSealed(settings));

// 3. Object.freeze() - Cannot add/delete/modify
console.log("\n3️⃣ Object.freeze():");
const constants = { PI: 3.14159, E: 2.71828 };
console.log("  Initial:", constants);

Object.freeze(constants);
constants.PI = 3.14; // Won't change
constants.newProp = "test"; // Cannot add
delete constants.E; // Cannot delete
console.log("  After freeze:", constants);
console.log("  Is frozen?", Object.isFrozen(constants));

// Shallow freeze - nested objects are NOT frozen
console.log("\n⚠️ Shallow Freeze Warning:");
const nested = {
    name: "outer",
    inner: {
        value: 42
    }
};
Object.freeze(nested);
nested.inner.value = 100; // This works! (nested not frozen)
console.log("  Nested object modified:", nested);

// Deep freeze implementation
function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });
    return Object.freeze(obj);
}

const deepFrozen = { a: 1, b: { c: 2 } };
deepFreeze(deepFrozen);
deepFrozen.b.c = 99; // Won't work
console.log("  Deep frozen nested:", deepFrozen);

/**
 * SECTION 4: OBJECT PROTOTYPES
 */
console.log("\n📌 SECTION 4: OBJECT PROTOTYPES");
console.log("━".repeat(50));

// Creating objects with prototypes
console.log("\n1️⃣ Object.create() - Set prototype:");
const animal = {
    type: "animal",
    speak() {
        return `${this.name} makes a sound`;
    },
    eat() {
        return `${this.name} is eating`;
    }
};

const dog2 = Object.create(animal);
dog2.name = "Rex";
dog2.breed = "German Shepherd";

console.log("  Dog object:", dog2);
console.log("  Speak:", dog2.speak());
console.log("  Eat:", dog2.eat());
console.log("  Prototype:", Object.getPrototypeOf(dog2));

// Constructor functions
console.log("\n2️⃣ Constructor Functions:");
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.start = function() {
    return `${this.make} ${this.model} is starting`;
};

Car.prototype.stop = function() {
    return `${this.make} ${this.model} is stopping`;
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("  Car1:", car1.start());
console.log("  Car2:", car2.start());
console.log("  Same prototype?", Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2));

// Checking prototype chain
console.log("\n3️⃣ Prototype Chain:");
console.log("  car1.__proto__ === Car.prototype:", car1.__proto__ === Car.prototype);
console.log("  Car.prototype.__proto__ === Object.prototype:", Car.prototype.__proto__ === Object.prototype);
console.log("  Object.prototype.__proto__:", Object.prototype.__proto__);

// instanceof operator
console.log("\n4️⃣ instanceof:");
console.log("  car1 instanceof Car:", car1 instanceof Car);
console.log("  car1 instanceof Object:", car1 instanceof Object);
console.log("  dog2 instanceof Animal:", dog2 instanceof Object);

// Setting prototype
console.log("\n5️⃣ Object.setPrototypeOf():");
const base = { x: 1, y: 2 };
const extended = { z: 3 };
Object.setPrototypeOf(extended, base);
console.log("  extended.z:", extended.z);
console.log("  extended.x (from prototype):", extended.x);

/**
 * SECTION 5: OBJECT METHODS REFERENCE
 */
console.log("\n📌 SECTION 5: Useful Object Methods");
console.log("━".repeat(50));

// Object.assign() - deep dive
console.log("\n1️⃣ Object.assign() Details:");
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 10 };
Object.assign(target, source1, source2);
console.log("  Merged target:", target);

// Object.is() - Same value equality
console.log("\n2️⃣ Object.is() - Same Value Equality:");
console.log("  Object.is(5, 5):", Object.is(5, 5));
console.log("  Object.is(NaN, NaN):", Object.is(NaN, NaN));
console.log("  NaN === NaN:", NaN === NaN);
console.log("  Object.is(-0, +0):", Object.is(-0, +0));

// Object.groupBy() - ES2024
console.log("\n3️⃣ Object.groupBy() - Group objects:");
const inventory = [
    { name: "apple", type: "fruit", quantity: 5 },
    { name: "banana", type: "fruit", quantity: 3 },
    { name: "carrot", type: "vegetable", quantity: 8 },
    { name: "broccoli", type: "vegetable", quantity: 4 }
];

// Using reduce for grouping (since groupBy may not be in all environments)
const groupedByType = inventory.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
}, {});
console.log("  Grouped by type:", groupedByType);

/**
 * SECTION 6: PROPERTY ATTRIBUTES IN DEPTH
 */
console.log("\n📌 SECTION 6: Property Attributes In Depth");
console.log("━".repeat(50));

const demo = {};

// Define multiple properties at once
console.log("\n1️⃣ Object.defineProperties():");
Object.defineProperties(demo, {
    prop1: {
        value: "value1",
        writable: true,
        enumerable: true
    },
    prop2: {
        value: "value2",
        writable: false,
        enumerable: false
    },
    prop3: {
        get() {
            return this._prop3;
        },
        set(val) {
            this._prop3 = val * 2;
        },
        enumerable: true
    }
});

demo.prop3 = 10;
console.log("  Demo object:", demo);
console.log("  prop3 after set:", demo.prop3);
console.log("  Enumerable keys:", Object.keys(demo));

// Checking property existence with descriptors
console.log("\n2️⃣ Property Attributes Check:");
function logPropertyAttributes(obj, prop) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    console.log(`  ${prop}:`, {
        value: desc.value,
        writable: desc.writable,
        enumerable: desc.enumerable,
        configurable: desc.configurable
    });
}

logPropertyAttributes(demo, "prop1");
logPropertyAttributes(demo, "prop2");

/**
 * SECTION 7: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 7: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create read-only property
console.log("\n✅ Exercise 1: Read-Only Property");
const book2 = {};
Object.defineProperty(book2, "isbn", {
    value: "978-3-16-148410-0",
    writable: false,
    enumerable: true,
    configurable: false
});
console.log("  ISBN:", book2.isbn);
book2.isbn = "new-isbn"; // Won't change
console.log("  After modification attempt:", book2.isbn);

// Exercise 2: Validate with setters
console.log("\n✅ Exercise 2: Validate Age");
const person2 = {
    _age: 0,
    get age() {
        return this._age;
    },
    set age(value) {
        if (value < 0) throw new Error("Age cannot be negative");
        if (value > 150) throw new Error("Age cannot exceed 150");
        this._age = value;
    }
};
person2.age = 25;
console.log("  Age set to:", person2.age);
try {
    person2.age = -5;
} catch(e) {
    console.log("  Error caught:", e.message);
}

// Exercise 3: Freeze configuration
console.log("\n✅ Exercise 3: Frozen Configuration");
const appConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};
Object.freeze(appConfig);
console.log("  Config frozen:", Object.isFrozen(appConfig));
// appConfig.timeout = 10000; // Won't work in strict mode

// Exercise 4: Create object with private property
console.log("\n✅ Exercise 4: Private Property Pattern");
function createCounter(initial = 0) {
    let _count = initial;  // Private
  
    return {
        get count() {
            return _count;
        },
        increment() {
            _count++;
            return this;
        },
        decrement() {
            _count--;
            return this;
        },
        reset() {
            _count = initial;
            return this;
        }
    };
}
const counter = createCounter(10);
console.log("  Initial count:", counter.count);
counter.increment().increment();
console.log("  After increment:", counter.count);
console.log("  _count accessible?", counter._count); // undefined

/**
 * SECTION 8: COMMON PITFALLS
 */
console.log("\n📌 SECTION 8: Common Pitfalls");
console.log("━".repeat(50));

console.log("\n❌ Pitfall 1: Modifying frozen objects silently fails");
const frozen = Object.freeze({ value: 42 });
frozen.value = 100; // Silent fail in non-strict mode
console.log("  Frozen value still:", frozen.value);

console.log("\n❌ Pitfall 2: Shallow freezing");
const shallow = Object.freeze({ nested: { value: 42 } });
shallow.nested.value = 100; // This works!
console.log("  Nested was modified:", shallow.nested.value);

console.log("\n❌ Pitfall 3: Prototype pollution");
const malicious = JSON.parse('{"__proto__": {"isAdmin": true}}');
const safe = Object.create(null);
Object.assign(safe, malicious);
console.log("  Prototype not polluted:", safe.isAdmin);

console.log("\n✅ Best Practices:");
console.log("  1. Use getters/setters for validation");
console.log("  2. Freeze constants and configurations");
console.log("  3. Seal objects when structure is fixed");
console.log("  4. Use Object.create(null) for pure dictionaries");
console.log("  5. Be aware of shallow vs deep freezing");

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - OBJECTS PART 3");
console.log("━".repeat(50));
console.log("✅ Getters/Setters - Computed properties with validation");
console.log("✅ Property Descriptors - Control property behavior");
console.log("✅ Object.freeze() - Immutable object (shallow)");
console.log("✅ Object.seal() - Fixed structure");
console.log("✅ Object.preventExtensions() - No new properties");
console.log("✅ Prototypes - Inheritance mechanism");
console.log("✅ Object.create() - Set prototype explicitly");
console.log("✅ Object.defineProperty() - Fine-grained control");

console.log("\n🎯 When to use:");
console.log("  • Need validation? → Getters/Setters");
console.log("  • Need constants? → Object.freeze()");
console.log("  • Need fixed structure? → Object.seal()");
console.log("  • Need inheritance? → Prototypes or classes");
console.log("  • Need fine control? → Property descriptors");

console.log("\n===== END OF OBJECTS PART 3 =====");