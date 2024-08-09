// app.ts
import { Circle, Square } from './11.1_exportImportClass'; // Adjust the path as necessary

const circle = new Circle(5);
console.log(`Circle Area: ${circle.getArea()}`);

const square = new Square(4);
console.log(`Square Area: ${square.getArea()}`);
