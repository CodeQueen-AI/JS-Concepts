try {
    let result = riskyOperation(); 
    console.log("Result:", result);
} catch (error) {
    console.error("Something went wrong:", error.message);
} finally {
    console.log("Execution completed.");
}