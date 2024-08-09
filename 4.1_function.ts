/*
a function is a block of code designed to perform a particular task. 
Functions can accept parameters, perform operations, and return a result. 
TypeScript builds on JavaScript's function capabilities by adding type annotations 
to help ensure type safety.
*/

// Function to calculate the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Calling the function
const area = calculateArea(5, 10);
console.log(`The area of the rectangle is ${area}`);  // Output: The area of the rectangle is 50
