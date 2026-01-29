// 1️⃣ Simple Array
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

console.log("\n---------------------------\n");

// 2️⃣ Array Methods

// Add at end
numbers.push(6);
console.log("After push(6):", numbers);

// Remove from end
numbers.pop();
console.log("After pop():", numbers);

// Add at start
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// Remove from start
numbers.shift();
console.log("After shift():", numbers);

// Create new array (map)
let squared = numbers.map(num => num * num);
console.log("Squared Numbers:", squared);

// Filter values
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

console.log("\n---------------------------\n");

// 3️⃣ Looping Arrays

// forEach loop
numbers.forEach(num => console.log("Number:", num));

// for...of loop
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Array Destructuring
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("Destructured Fruits:", firstFruit, secondFruit, thirdFruit);

console.log("\n---------------------------\n");

// 4️⃣ Other Array Topics

// slice - get part of array
let part = numbers.slice(1, 3); // from index 1 to 2
console.log("Slice of Numbers:", part);

// splice - remove/add elements
let newFruits = ["Apple", "Banana", "Mango", "Orange"];
newFruits.splice(1, 1, "Grapes"); // remove 1 element at index 1 and add "Grapes"
console.log("Splice Fruits:", newFruits);

// indexOf - find index
console.log("Index of Mango:", newFruits.indexOf("Mango"));

// includes - check existence
console.log("Does array include Apple?", newFruits.includes("Apple"));

// join - convert to string
console.log("Join Fruits:", newFruits.join(", "));

// concat - merge arrays
let combined = numbers.concat(newFruits);
console.log("Combined Array:", combined);

console.log("\nEnd of Array Examples");
