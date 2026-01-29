// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method using prototype
Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
};

// Create objects
let person1 = new Person("Sumbal", 20);
let person2 = new Person("Ali", 25);

person1.greet(); // Hello, I am Sumbal and I am 20 years old
person2.greet(); // Hello, I am Ali and I am 25 years old

// Check prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true
