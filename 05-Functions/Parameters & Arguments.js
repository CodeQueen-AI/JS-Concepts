// Single Parameter
function sayName(name) {
    console.log("Name:", name)
}
sayName("Ali")       // "Ali" is argument
sayName("Sara")   

// Multiple Parameters
function fullName(firstName, lastName) {
    console.log("Full Name:", firstName, lastName)
}
fullName("Ali", "Khan")    // arguments
fullName("Sara", "Ahmed")  

// Default Parameters
function introduce(name = "Guest", age = 18) {
    console.log("Name:", name, ", Age:", age)
}
introduce()               // uses default values
introduce("Zara", 22)     // custom arguments

// Parameters in Calculations
function addNumbers(a, b) {
    return a + b
}
console.log("Sum:", addNumbers(5, 7))  
console.log("Sum:", addNumbers(10, 15))
