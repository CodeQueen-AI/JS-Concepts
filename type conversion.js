// Number to String
let num = 100;
let strNum = String(num);
console.log(strNum, typeof strNum); // "100" string

// String to Number
let str = "200";
let numStr = Number(str);
console.log(numStr, typeof numStr); // 200 number

// Boolean Conversion
let value = 0;
let boolValue = Boolean(value);
console.log(boolValue, typeof boolValue); // false boolean

// Automatic Type Coercion
let result = "5" - 2;   // 5 is converted to number
console.log(result, typeof result); // 3 number

let result2 = "5" + 2;  // 2 is converted to string
console.log(result2, typeof result2); // "52" string
