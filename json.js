// JSON Object
let person = {
    name: "Sumbal",
    age: 20,
    city: "Karachi"
};

// Convert object to JSON string
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
let jsonObj = JSON.parse(jsonString);
console.log("JSON Object:", jsonObj);

// Accessing values
console.log("Name:", jsonObj.name);
console.log("Age:", jsonObj.age);
