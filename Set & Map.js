// ===== Set =====
let numbers = new Set();

// Add values
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2); // Duplicate ignored

console.log("Set values:", numbers); // Set { 1, 2, 3 }

// Check if value exists
console.log("Has 2?", numbers.has(2)); // true
console.log("Has 5?", numbers.has(5)); // false

// Remove value
numbers.delete(2);
console.log("After delete:", numbers);

// Loop through Set
for (let num of numbers) {
    console.log("Set item:", num);
}

// Clear all
// numbers.clear();

// ===== Map =====
let person = new Map();

// Set key-value pairs
person.set("name", "Sumbal");
person.set("age", 20);
person.set("city", "Karachi");

console.log("Map values:", person);

// Get value
console.log("Name:", person.get("name"));

// Check if key exists
console.log("Has age?", person.has("age")); 

// Delete key
person.delete("city");

// Loop through Map
for (let [key, value] of person) {
    console.log(`${key} -> ${value}`);
}

// Size of Map
console.log("Map size:", person.size);
