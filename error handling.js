// Basic try...catch
try {
    // Code that may throw an error
    let result = 10 / 0; // No error, JS returns Infinity
    console.log("Result:", result);

    // Force an error
    let obj = undefined;
    console.log(obj.name); // ❌ TypeError
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This always runs, whether error occurs or not.");
}

// Example with custom error
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error: Cannot divide by zero!
