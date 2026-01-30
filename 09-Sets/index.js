// Creating a Set
let numbers = new Set([1, 2, 3, 4, 5])
console.log(numbers)

// add() - add new element
numbers.add(6)
console.log(numbers)

// delete() - remove element
numbers.delete(3)
console.log(numbers)

// has() - check existence
console.log(numbers.has(2))
console.log(numbers.has(3))

// clear() - remove all elements
numbers.clear()
console.log(numbers)

// size - number of elements
console.log(numbers.size)