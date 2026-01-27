// Return Statement
function add(a, b) {
    return a + b; // value return karta hai
}

let sum = add(5, 3);
console.log("Sum:", sum); // 8

// Without return
function greet(name) {
    console.log("Hello " + name);
}
let result = greet("Sumbal"); 
console.log("Result:", result); // undefined, kyunki return nahi hai
