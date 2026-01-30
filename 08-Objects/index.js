// Basic Object
let person = {
    name: "Ali",
    age: 25,
    country: "Pakistan"
}
console.log(person)

// Access Object Properties
console.log("Name:", person.name)
console.log("Age:", person.age)
console.log("Country:", person["country"])

// Update Object Properties
person.age = 26
console.log(person.age)

// Add New Property
person.city = "Karachi"
console.log(person)

// Delete Property
delete person.country
console.log(person)

// Loop through Object
console.log("Looping through object:")
for (let key in person) {
    console.log(key + ":", person[key])
}

// Object Methods
let student = {
    name: "Sara",
    grade: "A",
    greet: function() {
        console.log("Hello, my name is " + this.name)
    }
}
student.greet() 

// Nested Object
let company = {
    name: "TechCorp",
    location: "Lahore",
    employee: {
        name: "Ahmed",
        position: "Developer"
    }
}
console.log(company.employee.name)
console.log(company.employee.position)