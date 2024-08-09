interface Comparable<T> {
    localeCompare(other: T): number;  // It's a built-in method in JavaScript and is available 
    // on string objects. The localeCompare method compares two strings based on the current 
    // locale, and it returns a number indicating the relationship between the two strings.
  }
  
  function compare<T extends Comparable<T>>(x: T, y: T): number {
    if (x == null)
      return y == null ? 0 : -1;  // obj 2 is greate than 1
    if (y == null) // obj 1 is larger then obj 2
      return 1;
    return x.localeCompare(y); ///it calles localcompare in the calss ---> 2
  }
  
  // Example usage:
  class ExampleClass implements Comparable<ExampleClass> {
    private value: string;
  
    constructor(value: string) {
      this.value = value;
    }
  
    localeCompare(other: ExampleClass): number {   //---->3
      return this.value.localeCompare(other.value); // this is where the final compare happens
    }
  }
  
  //Example type
  const obj1 = new ExampleClass("banana");
  const obj2 = new ExampleClass("apple");

  //string type
  let string1 = "same";
  let string2 = "same";
  //The string type in JavaScript has a built-in localeCompare method, 
  //making it compatible with the Comparable<string> interface.
  console.log(compare(obj1, obj2));
  console.log(compare(string1, string2)); // it calles compare function ---> 1
  