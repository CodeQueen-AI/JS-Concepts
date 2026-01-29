// var (old way, function-scoped)
var name = "Sumbal";
console.log(name);

// let (block-scoped, can change)
let age = 20;
console.log(age); 
age = 21;
console.log(age); 

// const (block-scoped, cannot change)
const country = "Pakistan";
console.log(country); 
// country = "India"; // Error: Assignment to constant variable
