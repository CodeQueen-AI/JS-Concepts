let name = "Sumbal";
let age = 20;
let city = "Karachi";

// Old way
console.log("Hello " + name + ", you are " + age + " years old from " + city);

// Template Literals (ES6)
console.log(`Hello ${name}, you are ${age} years old from ${city}`);

// Multiline string
let message = `
Hi ${name},
Welcome to JavaScript learning!
You are from ${city}.
`;
console.log(message);
