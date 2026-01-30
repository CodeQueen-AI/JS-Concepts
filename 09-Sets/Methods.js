// Creating a Set
let uniqueNumbers = new Set([1, 2, 2, 3, 4, 5, 5])
console.log(uniqueNumbers) 

// Access Set Elements (looping)
console.log("Looping through set:")
for (let num of uniqueNumbers) {
    console.log(num)
}

// Converting Set to Array
let numArray = Array.from(uniqueNumbers)
console.log(numArray)

// Converting Array to Set
let arr = [1, 2, 2, 3, 4]
let setFromArray = new Set(arr)
console.log(setFromArray)

// Check if Set is empty
let emptySet = new Set()
console.log(emptySet.size === 0)