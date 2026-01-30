// Object Literal
let person = {
    name: "Sumbal",
    age: 20,
    city: "Karachi",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

console.log(person.name); // Access property
console.log(person["age"]); // Access property in another way
person.greet(); // Call method

// Nested Object
let student = {
    name: "Ali",
    marks: { math: 90, english: 85 }
};
console.log(student.marks.math); 

