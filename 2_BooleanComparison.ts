// Boolean Example
const isSunnyDay: boolean = true;
const isRainyDay: boolean = false;

// Logical NOT (!) Operator
const isNotSunnyDay: boolean = !isSunnyDay;
const isNotRainyDay: boolean = !isRainyDay;

console.log("Is it a sunny day?", isSunnyDay);        // Output: Is it a sunny day? true
console.log("Is it not a sunny day?", isNotSunnyDay);  // Output: Is it not a sunny day? false

console.log("Is it a rainy day?", isRainyDay);        // Output: Is it a rainy day? false
console.log("Is it not a rainy day?", isNotRainyDay);  // Output: Is it not a rainy day? true

// Comparison Operators
const numberOne: number = 10;
const numberTwo: number = 5;

const isEqual: boolean = numberOne == numberTwo;       // Equality (==) operator
const isNotEqual: boolean = numberOne != numberTwo;    // Inequality (!=) operator

console.log("Are the numbers equal?", isEqual);        // Output: Are the numbers equal? false
console.log("Are the numbers not equal?", isNotEqual);  // Output: Are the numbers not equal? true

// Identity Operators
const strictEqual: boolean = numberOne === numberTwo;          // Strict equality (===) operator
const strictNotEqual: boolean = numberOne !== numberTwo;       // Strict inequality (!==) operator

console.log("Are the numbers strictly equal?", strictEqual);        // Output: Are the numbers strictly equal? false
console.log("Are the numbers strictly not equal?", strictNotEqual);  // Output: Are the numbers strictly not equal? true
