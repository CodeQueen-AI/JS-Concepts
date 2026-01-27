let numbers = [1, 2, 3, 4, 5];

// push() - add at end
numbers.push(6);
console.log("After push:", numbers);

// pop() - remove from end
numbers.pop();
console.log("After pop:", numbers);

// shift() - remove from start
numbers.shift();
console.log("After shift:", numbers);

// unshift() - add at start
numbers.unshift(0);
console.log("After unshift:", numbers);

// forEach() - loop through array
numbers.forEach((num) => {
    console.log("forEach:", num);
});

// map() - return new array
let squared = numbers.map((num) => num * num);
console.log("Squared:", squared);

// filter() - filter values
let even = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", even);

// reduce() - reduce to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);
