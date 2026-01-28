// Function Declaration
function greet(name) {
    console.log("Hello " + name);
}
greet("Sumbal");

// Function Expression
const greetExpr = function(name) {
    console.log("Hi " + name);
};
greetExpr("Sumbal");

// Arrow Function
const greetArrow = (name) => {
    console.log("Hey " + name);
};
greetArrow("Sumbal");

// Arrow Function with single line (implicit return)
const square = num => num * num;
console.log("Square of 5:", square(5));