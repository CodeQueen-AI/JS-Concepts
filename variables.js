// 1. var (old way, function-scoped)
var name = "Sumbal";
console.log(name); // Output: Sumbal

// 2. let (block-scoped, can change)
let age = 20;
console.log(age); // Output: 20
age = 21;
console.log(age); // Output: 21

// 3. const (block-scoped, cannot change)
const country = "Pakistan";
console.log(country); // Output: Pakistan
// country = "India"; // ❌ Error: Assignment to constant variable
