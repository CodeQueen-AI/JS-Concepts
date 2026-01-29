// Global Scope
let message = "I am global";
function showMessage() {
  console.log(message);
}

showMessage();
console.log(message);

// Function Scope
function showMessage() {
  let message = "I am function scope";
  console.log(message);
}
showMessage();
// console.log(message); error (function ke bahar access nahi)
