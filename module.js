// Exporting functions
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Exporting constant
export const PI = 3.1416;




// -----------------------main file--------------------------------------------
// Importing from mathUtils.js
import { add, multiply, PI } from './mathUtils.js';

console.log("Add:", add(5, 3));          // 8
console.log("Multiply:", multiply(5, 3));// 15
console.log("PI:", PI);                  // 3.1416
