try {
    // Code jo error throw kar sakta hai
    let result = riskyOperation(); // assume ye function error throw kar sakta hai
    console.log("Result:", result);
} catch (error) {
    // Agar error aata hai to ye block execute hoga
    console.error("Something went wrong:", error.message);
} finally {
    // Ye block hamesha execute hoga, chahe error aaye ya na aaye
    console.log("Execution completed.");
}