// Example.ts
/**
 * In the above TypeScript code, the export keyword is used to make the Circle and Square classes 
 * accessible outside the Shapes namespace. Without the export keyword, these classes would be 
 * private to the namespace and not visible or usable outside of it.
 */

//namespace are also imported and expoerted but it is not recommended. Use calss alone

// Namespace declaration
namespace Shapes {
    // Class within the namespace
    export class Circle {
      private radius: number;
  
      constructor(radius: number) {
        this.radius = radius;
      }
  
      // Method within the class
      public getArea(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  
    // Class within the namespace
    export class Square {
      private sideLength: number;
  
      constructor(sideLength: number) {
        this.sideLength = sideLength;
      }
  
      // Method within the class
      public getArea(): number {
        return this.sideLength * this.sideLength;
      }
    }
  }
  
  // Usage of the namespace
  const circle = new Shapes.Circle(5);
  console.log(`Circle Area: ${circle.getArea()}`);
  
  const square = new Shapes.Square(4);
  console.log(`Square Area: ${square.getArea()}`);
  