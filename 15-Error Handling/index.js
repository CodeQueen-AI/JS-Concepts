try {
    let result = riskyOperation(); 
    console.log("Result:", result);
} catch (error) {
    console.error("Something went wrong:", error.message);
} finally {
    console.log("Execution completed.");
}

function riskyOperation() {
    let randomNum = Math.floor(Math.random() * 2); 
    if (randomNum === 0) {
        throw new Error("Random failure occurred!");
    }
    return "Success!";
}