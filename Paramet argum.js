// Parameters & Arguments
function add(a, b) { // a, b are parameters
    return a + b;
}
console.log("Sum:", add(5, 3)); // 5, 3 are arguments

// Default Parameters
function multiply(a, b = 2) { // b has default value 2
    return a * b;
}
console.log("Multiply:", multiply(5)); // 5 * 2 = 10

// Rest Parameters (for multiple arguments)
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log("Sum of all:", sumAll(1,2,3,4,5)); // 15
