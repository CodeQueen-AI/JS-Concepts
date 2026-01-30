let fruits = ["Apple", "Banana", "Mango"]

// push() - add at end
fruits.push("Grapes")
console.log(fruits)

// pop() - remove from end
fruits.pop()
console.log(fruits)

// shift() - remove first element
fruits.shift()
console.log(fruits)

// unshift() - add at start
fruits.unshift("Strawberry")
console.log(fruits)

// indexOf() - find position
console.log(fruits.indexOf("Mango"))

// slice() - extract part
let citrus = fruits.slice(0, 2)
console.log(citrus)

// splice() - remove & add
fruits.splice(1, 1, "Pineapple") // remove 1 at index 1, add Pineapple
console.log(fruits)

// forEach() Method
console.log("Using forEach():")
fruits.forEach(function(fruit) {
    console.log(fruit)
})

// map() Method
let lengths = fruits.map(function(fruit) {
    return fruit.length
})
console.log(lengths)

// filter() Method
let longNames = fruits.filter(function(fruit) {
    return fruit.length > 5
})
console.log(longNames)

// find() Method
let mango = fruits.find(function(fruit) {
    return fruit === "Mango"
})
console.log(mango)

// includes() Method
console.log(fruits.includes("Apple"))

// sort() Method
fruits.sort()
console.log(fruits)

// reverse() Method
fruits.reverse()
console.log(fruits)