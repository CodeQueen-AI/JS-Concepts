console.log("======================================");
console.log("🟢 Topic: JavaScript Arrays - Methods & Looping");
console.log("======================================\n");

// Numbers Array
let numbers = [1, 2, 3, 4, 5];
console.log("Original Numbers:", numbers);

// Array Methods on Numbers
numbers.push(6);             // Add at end
numbers.shift();             // Remove first element
console.log("Updated Numbers:", numbers);

// Looping with forEach
console.log("Numbers using forEach():");
numbers.forEach((num) => console.log(num));

// map() - create new array
let squared = numbers.map((num) => num * num);
console.log("Squared Numbers:", squared);

// filter() - even numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce() - sum of numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

console.log("\n--------------------------------------\n");

// Fruits Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Original Fruits:", fruits);

// Update Fruits
fruits.unshift("Grapes"); // Add at start
console.log("Updated Fruits:", fruits);

// Looping through fruits
console.log("Looping through Fruits:");
for (let fruit of fruits) {
    console.log(fruit);
}

// Array Destructuring
let [first, second, third] = fruits;
console.log("Destructured Fruits:", first, second, third);

console.log("✅ End of Array Examples");
