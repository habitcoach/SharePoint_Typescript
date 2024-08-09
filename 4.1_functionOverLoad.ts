//Function overloading example
// Function overlading with same name but different parametet
//Remeber that you can alays use same count of parameter only
//You cannot have add(two paramete) and add(one parametet)
//Function overlading will always have only one implemetation unlick c#

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 


// Function Overloading with Optional Parameter

// Overload 1: Function with one mandatory parameter
function greet(name: string): string;

// Overload 2: Function with a mandatory parameter and an optional parameter
function greet(name: string, greeting?: string): string;

// Implementation of the overloaded function
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Test cases
console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(greet("Bob", "Good morning"));  // Output: Good morning, Bob!


//Note
/*
Function overloading with different number of parameters and types with same name is not supported.
Overload Definitions: Define the function signatures to describe the different ways the function can be called.
Implementation: Provide a single implementation that handles both cases. The implementation uses an optional parameter to cover the scenario where the second parameter might not be provided.
*/ 