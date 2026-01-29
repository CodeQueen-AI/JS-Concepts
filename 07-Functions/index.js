// Function Declaration
function greet() {
  console.log("Hello World");
}
greet();

// Function Expression
const greet = function () {
  console.log("Hello World");
};
greet();

// Arrow Function
const greet = () => {
  console.log("Hello World");
};
greet();

// Parameters & Arguments
function add(a, b) {
  console.log(a + b);
}
add(10, 5);

// Return Statements
function add(a, b) {
  return a + b;
}
let result = add(4, 6);
console.log(result);