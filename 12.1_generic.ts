function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  // Using the generic function with a number array
  const numberArray = [1, 2, 3, 4, 5];
  const firstNumber = getFirstElement(numberArray);
  console.log(firstNumber); // Output: 1
  
  // Using the generic function with a string array
  const stringArray = ['apple', 'banana', 'cherry'];
  const firstString = getFirstElement(stringArray);
  console.log(firstString); // Output: apple
  