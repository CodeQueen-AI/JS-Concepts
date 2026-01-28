// Closure
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log("Outer Variable:", outerVar);
        console.log("Inner Variable:", innerVar);
    };
}

const newFunc = outerFunction("I am outer");
newFunc("I am inner");
// Output:
// Outer Variable: I am outer
// Inner Variable: I am inner