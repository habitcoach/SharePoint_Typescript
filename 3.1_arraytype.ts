// Using type[]
let numbers: number[] = [1, 2, 3, 4, 5];

// Using Array<type>
let moreNumbers: Array<number> = [6, 7, 8, 9, 10]; //generic version

let genericString: Array<string> = ["name01","name02","name03"]; //generic version

console.log(numbers);       // Output: [1, 2, 3, 4, 5]
console.log(moreNumbers);   // Output: [6, 7, 8, 9, 10]
console.log(genericString);

for(let i=0;i<genericString.length;i++){ // example of for

    console.log(i+1 +":" + " " + genericString[i]);
}
