// Array Declaration
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

// Array Methods
fruits.push("Orange");   // Add at end
fruits.pop();            // Remove from end
fruits.shift();          // Remove from start
fruits.unshift("Grapes"); // Add at start
console.log(fruits);

// Looping through array
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Array Destructuring
let [first, second, third] = fruits;
console.log(first, second, third);
