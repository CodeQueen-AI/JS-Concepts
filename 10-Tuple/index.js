// Tuple
let person = ["Ali", 25, "Pakistan"]  

// Access elements
console.log("Name:", person[0])
console.log("Age:", person[1])
console.log("Country:", person[2])

// Update elements (JS arrays are mutable)
person[1] = 26
console.log("Updated Tuple:", person)

// Loop through tuple
console.log("Looping through tuple:")
for (let i = 0; i < person.length; i++) {
    console.log(person[i])
}

// Destructuring
let [name, age, country] = person
console.log("Destructured:", name, age, country)
