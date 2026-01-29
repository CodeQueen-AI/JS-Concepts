// Global Scope
let globalVar = "I am global";

function testScope() {
    console.log(globalVar); // Access global variable

    // Local Scope
    let localVar = "I am local";
    console.log(localVar);
}

testScope();
// console.log(localVar); // Error: localVar is not defined

// Block Scope
if (true) {
    let blockVar = "I am block-scoped";
    const blockConst = "Also block-scoped";
    console.log(blockVar);    
    console.log(blockConst); 
}
// console.log(blockVar);    // Error
// console.log(blockConst);  // Error

// var is not block-scoped
if (true) {
    var notBlockVar = "I am not block-scoped";
}
console.log(notBlockVar); // Works var ignores block