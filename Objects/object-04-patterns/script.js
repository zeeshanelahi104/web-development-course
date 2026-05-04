console.log("===== OBJECTS - PART 4: PATTERNS & BEST PRACTICES =====");
console.log("");

/**
 * SECTION 1: MODULE PATTERN (IIFE)
 */
console.log("📌 SECTION 1: MODULE PATTERN (IIFE)");
console.log("━".repeat(50));

// Module pattern for encapsulation
const UserModule = (function() {
    // Private variables
    let users = [];
    let nextId = 1;
    
    // Private helper functions
    function findUserIndex(id) {
        return users.findIndex(user => user.id === id);
    }
    
    // Public API
    return {
        addUser(name, email) {
            const user = {
                id: nextId++,
                name,
                email,
                createdAt: new Date()
            };
            users.push(user);
            return user;
        },
        
        getUser(id) {
            const index = findUserIndex(id);
            return index !== -1 ? users[index] : null;
        },
        
        getAllUsers() {
            return [...users]; // Return copy
        },
        
        updateUser(id, updates) {
            const index = findUserIndex(id);
            if (index !== -1) {
                users[index] = { ...users[index], ...updates };
                return users[index];
            }
            return null;
        },
        
        deleteUser(id) {
            const index = findUserIndex(id);
            if (index !== -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        },
        
        getUserCount() {
            return users.length;
        }
    };
})();

console.log("UserModule created (Module Pattern):");
const user1 = UserModule.addUser("Alice", "alice@email.com");
const user2 = UserModule.addUser("Bob", "bob@email.com");
console.log("  Added users:", UserModule.getAllUsers());
console.log("  User count:", UserModule.getUserCount());
console.log("  Get user 1:", UserModule.getUser(1));
UserModule.updateUser(1, { name: "Alice Smith" });
console.log("  After update:", UserModule.getUser(1));
console.log("  Private users array not accessible:", UserModule.users); // undefined

/**
 * SECTION 2: FACTORY PATTERN
 */
console.log("\n📌 SECTION 2: FACTORY PATTERN");
console.log("━".repeat(50));

// Simple factory
function createUser(name, role = "user") {
    const rolePermissions = {
        admin: ["read", "write", "delete", "manage_users"],
        editor: ["read", "write", "edit"],
        user: ["read"]
    };
    
    return {
        name,
        role,
        permissions: rolePermissions[role] || rolePermissions.user,
        
        hasPermission(permission) {
            return this.permissions.includes(permission);
        },
        
        getInfo() {
            return `${this.name} (${this.role}) - Permissions: ${this.permissions.join(", ")}`;
        }
    };
}

console.log("User Factory Example:");
const admin = createUser("Admin User", "admin");
const editor = createUser("Editor User", "editor");
const regularUser = createUser("Regular User", "user");

console.log("  Admin:", admin.getInfo());
console.log("  Admin can delete?", admin.hasPermission("delete"));
console.log("  Editor:", editor.getInfo());
console.log("  Regular user:", regularUser.getInfo());

// Complex factory with validation
console.log("\n✅ Complex Factory with Validation:");
function createProduct(data) {
    // Validation
    if (!data.name || data.name.length < 3) {
        throw new Error("Product name must be at least 3 characters");
    }
    if (data.price && (data.price < 0 || isNaN(data.price))) {
        throw new Error("Invalid price");
    }
    
    // Default values
    return {
        id: Date.now(),
        name: data.name,
        price: data.price || 0,
        category: data.category || "General",
        inStock: data.inStock !== false,
        createdAt: new Date(),
        
        getInfo() {
            return `${this.name} - $${this.price} (${this.category})`;
        },
        
        applyDiscount(percent) {
            if (percent > 0 && percent <= 100) {
                this.price = this.price * (1 - percent / 100);
            }
            return this;
        }
    };
}

try {
    const laptop = createProduct({ name: "Laptop", price: 999, category: "Electronics" });
    console.log("  Product created:", laptop.getInfo());
    laptop.applyDiscount(10);
    console.log("  After 10% discount:", laptop.getInfo());
} catch(e) {
    console.log("  Error:", e.message);
}

/**
 * SECTION 3: SINGLETON PATTERN
 */
console.log("\n📌 SECTION 3: SINGLETON PATTERN");
console.log("━".repeat(50));

// Singleton using closure
const DatabaseConnection = (function() {
    let instance = null;
    let connectionCount = 0;
    
    class Connection {
        constructor() {
            this.id = ++connectionCount;
            this.connectedAt = new Date();
            console.log(`  Connection ${this.id} created`);
        }
        
        query(sql) {
            return `Executing: ${sql} (Connection ${this.id})`;
        }
        
        disconnect() {
            console.log(`  Connection ${this.id} disconnected`);
        }
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = new Connection();
            }
            return instance;
        },
        
        reset() {
            if (instance) {
                instance.disconnect();
                instance = null;
            }
        }
    };
})();

console.log("Singleton Database Connection:");
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log("  Same instance?", db1 === db2);
console.log("  Query:", db1.query("SELECT * FROM users"));

// Singleton for app config
console.log("\n✅ App Config Singleton:");
const AppConfig = (function() {
    let config = null;
    
    function loadConfig() {
        return {
            appName: "MyApp",
            version: "1.0.0",
            apiUrl: "https://api.example.com",
            env: "production",
            features: ["auth", "logging", "analytics"],
            
            getFeature(feature) {
                return this.features.includes(feature);
            },
            
            isDevelopment() {
                return this.env === "development";
            }
        };
    }
    
    return {
        getConfig() {
            if (!config) {
                config = loadConfig();
            }
            return config;
        },
        
        reload() {
            config = loadConfig();
            return config;
        }
    };
})();

const config1 = AppConfig.getConfig();
const config2 = AppConfig.getConfig();
console.log("  Same config?", config1 === config2);
console.log("  App name:", config1.appName);
console.log("  Has auth feature?", config1.getFeature("auth"));

/**
 * SECTION 4: MIXINS & COMPOSITION
 */
console.log("\n📌 SECTION 4: MIXINS & COMPOSITION");
console.log("━".repeat(50));

// Define reusable behaviors
const CanFly = {
    fly() {
        return `${this.name} is flying!`;
    },
    land() {
        return `${this.name} has landed.`;
    }
};

const CanSwim = {
    swim() {
        return `${this.name} is swimming!`;
    },
    dive() {
        return `${this.name} is diving!`;
    }
};

const CanWalk = {
    walk() {
        return `${this.name} is walking.`;
    },
    run() {
        return `${this.name} is running!`;
    }
};

// Compose objects using mixins
function createDuck(name) {
    return Object.assign({}, CanFly, CanSwim, CanWalk, {
        name,
        quack() {
            return `${this.name} says Quack!`;
        }
    });
}

function createFish(name) {
    return Object.assign({}, CanSwim, {
        name,
        bubble() {
            return `${this.name} blows bubbles!`;
        }
    });
}

function createBird(name) {
    return Object.assign({}, CanFly, CanWalk, {
        name,
        chirp() {
            return `${this.name} says Chirp!`;
        }
    });
}

console.log("Mixins - Composing Behaviors:");
const duck = createDuck("Donald");
console.log("  Duck:", duck.walk(), duck.swim(), duck.fly(), duck.quack());

const fish = createFish("Nemo");
console.log("  Fish:", fish.swim(), fish.bubble());

const bird = createBird("Tweety");
console.log("  Bird:", bird.fly(), bird.walk(), bird.chirp());

// Class-based mixins
console.log("\n✅ Class Mixins:");
const LoggerMixin = Base => class extends Base {
    log(message) {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
        return this;
    }
    
    error(message) {
        console.error(`[ERROR] ${message}`);
        return this;
    }
};

const SerializableMixin = Base => class extends Base {
    toJSON() {
        return JSON.stringify(this);
    }
    
    fromJSON(json) {
        Object.assign(this, JSON.parse(json));
        return this;
    }
};

class BaseModel {
    constructor(data = {}) {
        Object.assign(this, data);
    }
}

class UserModel extends LoggerMixin(SerializableMixin(BaseModel)) {
    constructor(data) {
        super(data);
    }
    
    validate() {
        return !!(this.name && this.email);
    }
}

const userModel = new UserModel({ name: "John", email: "john@email.com" });
userModel.log("User created");
console.log("  JSON:", userModel.toJSON());

/**
 * SECTION 5: OBJECT POOL PATTERN
 */
console.log("\n📌 SECTION 5: OBJECT POOL PATTERN");
console.log("━".repeat(50));

class ObjectPool {
    constructor(createFn, maxSize = 10) {
        this.createFn = createFn;
        this.maxSize = maxSize;
        this.pool = [];
        this.active = new Set();
        this.created = 0;
    }
    
    acquire() {
        let obj;
        if (this.pool.length > 0) {
            obj = this.pool.pop();
            console.log(`  Reusing object from pool (${this.pool.length} left)`);
        } else if (this.created < this.maxSize) {
            obj = this.createFn(++this.created);
            console.log(`  Creating new object #${this.created}`);
        } else {
            throw new Error("No available objects in pool");
        }
        
        this.active.add(obj);
        return obj;
    }
    
    release(obj) {
        if (this.active.has(obj)) {
            this.active.delete(obj);
            if (this.pool.length < this.maxSize) {
                // Reset object state
                if (obj.reset) obj.reset();
                this.pool.push(obj);
                console.log(`  Object returned to pool (${this.pool.length} in pool)`);
            }
        }
    }
    
    getStats() {
        return {
            created: this.created,
            active: this.active.size,
            available: this.pool.length,
            maxSize: this.maxSize
        };
    }
}

// Create pool of database connections
function createConnection(id) {
    return {
        id,
        connected: true,
        query(sql) {
            console.log(`  Connection ${this.id} executing: ${sql}`);
            return `Result of: ${sql}`;
        },
        reset() {
            this.connected = true;
        },
        disconnect() {
            this.connected = false;
        }
    };
}

const connectionPool = new ObjectPool(createConnection, 3);
console.log("Connection Pool Example:");
console.log("  Initial stats:", connectionPool.getStats());

const conn1 = connectionPool.acquire();
const conn2 = connectionPool.acquire();
const conn3 = connectionPool.acquire();

conn1.query("SELECT * FROM users");
console.log("  After acquiring 3:", connectionPool.getStats());

connectionPool.release(conn2);
console.log("  After releasing conn2:", connectionPool.getStats());

const conn4 = connectionPool.acquire(); // Reuses conn2
console.log("  After acquiring again:", connectionPool.getStats());

/**
 * SECTION 6: BUILDER PATTERN
 */
console.log("\n📌 SECTION 6: BUILDER PATTERN");
console.log("━".repeat(50));

class QueryBuilder {
    constructor(table) {
        this.table = table;
        this.selectFields = [];
        this.whereConditions = [];
        this.orderByFields = [];
        this.limitValue = null;
        this.groupByFields = [];
    }
    
    select(...fields) {
        this.selectFields = fields;
        return this;
    }
    
    where(condition) {
        this.whereConditions.push(condition);
        return this;
    }
    
    orderBy(field, direction = "ASC") {
        this.orderByFields.push(`${field} ${direction}`);
        return this;
    }
    
    limit(count) {
        this.limitValue = count;
        return this;
    }
    
    groupBy(...fields) {
        this.groupByFields = fields;
        return this;
    }
    
    build() {
        let query = `SELECT ${this.selectFields.length ? this.selectFields.join(", ") : "*"} FROM ${this.table}`;
        
        if (this.whereConditions.length) {
            query += ` WHERE ${this.whereConditions.join(" AND ")}`;
        }
        
        if (this.groupByFields.length) {
            query += ` GROUP BY ${this.groupByFields.join(", ")}`;
        }
        
        if (this.orderByFields.length) {
            query += ` ORDER BY ${this.orderByFields.join(", ")}`;
        }
        
        if (this.limitValue) {
            query += ` LIMIT ${this.limitValue}`;
        }
        
        return query + ";";
    }
}

console.log("Query Builder Pattern:");
const query = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("active = true")
    .orderBy("name", "ASC")
    .limit(10)
    .build();

console.log("  Generated SQL:", query);

/**
 * SECTION 7: BEST PRACTICES
 */
console.log("\n📌 SECTION 7: BEST PRACTICES");
console.log("━".repeat(50));

console.log("\n✅ DO's:");
console.log("  1. Use object literal syntax {} for simple objects");
console.log("  2. Use factory functions for complex object creation");
console.log("  3. Use getters/setters for computed properties");
console.log("  4. Freeze constants and configuration objects");
console.log("  5. Use spread operator for immutability");
console.log("  6. Destructure objects for cleaner code");
console.log("  7. Use optional chaining for nested properties");
console.log("  8. Keep objects focused (single responsibility)");
console.log("  9. Use meaningful property names");
console.log("  10. Document complex object structures");

console.log("\n❌ DON'Ts:");
console.log("  1. Don't modify objects you don't own");
console.log("  2. Don't use new Object() constructor");
console.log("  3. Don't use for...in without hasOwnProperty check");
console.log("  4. Don't forget to handle null/undefined");
console.log("  5. Don't create deeply nested objects unnecessarily");
console.log("  6. Don't mix data and logic arbitrarily");

console.log("\n📊 Performance Tips:");
console.log("  • Object property access is fast");
console.log("  • Object creation is cheap");
console.log("  • Avoid dynamic property access in hot loops");
console.log("  • Use Map for frequent additions/deletions");
console.log("  • Object.freeze() can improve performance");

/**
 * SECTION 8: PRACTICE EXERCISES
 */
console.log("\n📌 SECTION 8: PRACTICE EXERCISES");
console.log("━".repeat(50));

// Exercise 1: Create a safe object accessor
console.log("\n✅ Exercise 1: Safe Object Access");
function safeGet(obj, path, defaultValue = undefined) {
    const keys = path.split(".");
    let result = obj;
    for (const key of keys) {
        if (result === null || result === undefined) {
            return defaultValue;
        }
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}

const testObj = { user: { profile: { name: "John" } } };
console.log("  safeGet(testObj, 'user.profile.name'):", safeGet(testObj, "user.profile.name"));
console.log("  safeGet(testObj, 'user.address.city', 'Unknown'):", safeGet(testObj, "user.address.city", "Unknown"));

// Exercise 2: Deep merge objects
console.log("\n✅ Exercise 2: Deep Merge");
function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    
    for (const key in source) {
        if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} });
            deepMerge(target[key], source[key]);
        } else {
            Object.assign(target, { [key]: source[key] });
        }
    }
    return deepMerge(target, ...sources);
}

const objA = { a: 1, b: { c: 2, d: 3 } };
const objB = { b: { c: 4, e: 5 }, f: 6 };
const merged3 = deepMerge({}, objA, objB);
console.log("  Deep merged:", merged3);

/**
 * SUMMARY
 */
console.log("\n📝 SUMMARY - OBJECTS PART 4");
console.log("━".repeat(50));
console.log("✅ Module Pattern - Encapsulation with IIFE");
console.log("✅ Factory Pattern - Centralized object creation");
console.log("✅ Singleton Pattern - Single instance control");
console.log("✅ Mixins - Compose behaviors without inheritance");
console.log("✅ Object Pool - Reuse expensive objects");
console.log("✅ Builder Pattern - Step-by-step construction");

console.log("\n🎯 Pattern Selection Guide:");
console.log("  • Need privacy? → Module Pattern");
console.log("  • Need many similar objects? → Factory Pattern");
console.log("  • Need single instance? → Singleton Pattern");
console.log("  • Need to share behaviors? → Mixins");
console.log("  • Need performance? → Object Pool");
console.log("  • Need complex construction? → Builder Pattern");

console.log("\n===== END OF OBJECTS PART 4 =====");
