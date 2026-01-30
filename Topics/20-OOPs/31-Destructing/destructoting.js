// Array Destructuring
let fruits = ["Apple", "Banana", "Mango"];
let [first, second, third] = fruits;
console.log(first, second, third); // Apple Banana Mango

// Skipping items
let [one, , three] = fruits;
console.log(one, three); // Apple Mango

// Swapping variables using destructuring
let a = 5, b = 10;
[a, b] = [b, a];
console.log("a:", a, "b:", b); // a:10 b:5

// Object Destructuring
let person = { name: "Sumbal", age: 20, city: "Karachi" };
let { name, age, city } = person;
console.log(name, age, city); // Sumbal 20 Karachi

// Renaming variables
let { name: personName, age: personAge } = person;
console.log(personName, personAge); // Sumbal 20

// Nested Object Destructuring
let student = {
    name: "Ali",
    marks: { math: 90, english: 85 }
};
let { marks: { math, english } } = student;
console.log("Math:", math, "English:", english); // Math:90 English:85
