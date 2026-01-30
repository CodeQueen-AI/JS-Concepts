// Function Declaration
function greet() {
    console.log("Hello!")
}
greet()

// Function Expression
const add = function() {
    return 5 + 3
}
console.log(add())

// Arrow Function (lambda)
const multiply = () => 4 * 6
console.log(multiply())

// Anonymous Function
setTimeout(function() {
    console.log("This runs after 2 seconds")
}, 2000)

// Callback Function
function first(callback) {
    console.log("First function")
    callback()
}
function second() {
    console.log("Second function")
}
first(second)

// Return Statement
function square() {
    return 5 * 5
}
const result = square()
console.log("Square:", result)
