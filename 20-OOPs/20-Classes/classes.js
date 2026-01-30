// Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    }
}

// Create Object
let person1 = new Person("Sumbal", 20);
person1.greet(); // Hello, I am Sumbal and I am 20 years old.

// Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

let student1 = new Student("Ali", 22, "JavaScript");
student1.greet(); // From Person
student1.study(); // From Student
