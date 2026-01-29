// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Array Methods
// Add at end
numbers.push(6);
console.log(numbers);

// Remove from end
numbers.pop();
console.log(numbers);

// Add at start
numbers.unshift(0);
console.log(numbers);

// Remove from start
numbers.shift();
console.log(numbers);

// Create new array (map)
let squared = numbers.map(num => num * num);
console.log(squared);

// Filter values
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// slice 
let part = numbers.slice(1, 3);
console.log(part);

// splice
let newFruits = ["Apple", "Banana", "Mango", "Orange"];
newFruits.splice(1, 1, "Grapes"); 
console.log(newFruits);

// indexOf
console.log(newFruits.indexOf("Mango"));

// includes 
console.log(newFruits.includes("Apple"));

// join 
console.log(newFruits.join(", "));

// concat
let combined = numbers.concat(newFruits);
console.log(combined);

