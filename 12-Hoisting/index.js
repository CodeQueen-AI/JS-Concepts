// 1. Function Hoisting
greet()  // Works even before function declaration

function greet() {
    console.log("Hello!")
}

// 2. Variable Hoisting with var
console.log(x)  // undefined (hoisted, but not assigned yet)
var x = 5
console.log(x)  

// 3. Variable Hoisting with let & const
// console.log(y) // ReferenceError: Cannot access 'y' before initialization
let y = 10
const z = 15
console.log(y, z)
