// Explicit type annotations
let pi: number = 3.14; // Type annotation for a number representing pi
let message: string = "Hello, TypeScript!"; // Type annotation for a string message
let isRaining: boolean = true; // Type annotation for a boolean representing weather
let sides: number[] = [3, 4, 5]; // Type annotation for an array of numbers

// Implicit type annotations
let implicitNumber = 42; // Implicit type annotation for a number
let implicitString = "Implicit String"; // Implicit type annotation for a string

// Function with explicit and implicit type annotations
function calculateArea1(shape: string, dimensions: any): number|string {
    switch (shape) {
        case 'circle':
            // Explicit annotation for parameters and return type
            const radius: number = dimensions;
            return pi * radius * radius;

        case 'rectangle':
            // Implicit annotation for parameters and return type
            const { length, width } = dimensions;
            return  length* width;

        case 'rectangle02':
                // Without using object destructuring
                const length2 = dimensions.length;
                const width2 = dimensions.width;
                return length2 * width2;

        case 'triangle':
            // Explicit annotation for parameters and implicit for return type
            const [a, b, c]: number[] = dimensions;
            const s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));

        default:
            // Any type for unknown shapes
           // return "not defined"; error as function returb a number. Use multi type number|string
            return "not defined";
    }
}

// Examples
console.log("The area of the circle is: " + calculateArea1('circle', 5)); // Output: The area of the circle is: 78.5
console.log("The area of the rectangle is: " + calculateArea1('rectangle', { length: 4, width: 6 })); // Output: The area of the rectangle is: 24
console.log("The area of the rectangle02 is: " + calculateArea1('rectangle02', { length: 4, width: 6 })); // Output: The area of the rectangle02 is: 24
console.log("The area of the triangle is: " + calculateArea1('triangle', [3, 4, 5])); // Output: The area of the triangle is: 6
console.log("The area of hexagon is: "+ calculateArea1('hexagon', 10)); // Output: Shape not recognized!
