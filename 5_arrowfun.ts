/*
The map function is used to transform each element in a collection (like an array) 
based on a function you provide. It applies this function to each element and 
returns a new collection containing the results of these transformations.

*/


// Define an array of even numbers
let evens: number[] = [2, 4, 6, 8, 10];

// Declare variables for the results
let odds: number[];
let pairs: { even: number; odd: number }[];
let nums: number[];

// Using map to create an array of odd numbers
odds = evens.map(v => v + 1);

// const odds = evens.map(function(v) {   //use fo regualr function
//     return v + 1;
// });

// Using map to create an array of objects with even and odd properties
pairs = evens.map(v => ({ even: v, odd: v + 1 }));

// Using map with index to create an array of numbers by adding the index to each element
nums = evens.map((v, i) => v + i);

// Display the results in the console
console.log("Odds:", odds);
console.log("Pairs:", pairs);
console.log("Nums:", nums);

// Using forEach to filter and push numbers divisible by 5 into the 'fives' array
let fives: number[] = [];
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// Display the 'fives' array in the console
console.log("Fives:", fives);

