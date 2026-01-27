// Object example
let person1 = {
    name: "Sumbal",
    greet: function(greeting, age) {
        console.log(`${greeting}, I am ${this.name} and I am ${age} years old`);
    }
};

let person2 = { name: "Ali" };

// 1. call() - arguments comma separated
person1.greet.call(person2, "Hello", 22); 
// Output: Hello, I am Ali and I am 22 years old

// 2. apply() - arguments in array
person1.greet.apply(person2, ["Hi", 22]); 
// Output: Hi, I am Ali and I am 22 years old

// 3. bind() - returns a new function
let boundGreet = person1.greet.bind(person2, "Hey", 22);
boundGreet(); 
// Output: Hey, I am Ali and I am 22 years old
