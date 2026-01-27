// 1. In global context
console.log(this); // In browser: window object, In Node.js: {}

// 2. Inside an object method
let person = {
    name: "Sumbal",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};
person.greet(); // Hello, I am Sumbal

// 3. Inside a regular function
function show() {
    console.log(this);
}
show(); // In browser: window, In strict mode: undefined

// 4. Inside an arrow function
let arrowFunc = () => {
    console.log(this);
};
arrowFunc(); // Lexical this (inherits from parent scope)

// 5. Using this with constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        console.log(`${this.name} is ${this.age} years old`);
    };
}
let p1 = new Person("Ali", 25);
p1.info(); // Ali is 25 years old
