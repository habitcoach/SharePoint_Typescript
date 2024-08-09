//to compile use tsc Modules/src/main.ts

import { add, subtract } from './mathOp';
import * as M1 from "./export1";
import { BClass } from "./export2"

const resultAddition = add(5, 3);
const resultSubtraction = subtract(8, 2);

console.log(`Addition Result: ${resultAddition}`);
console.log(`Subtraction Result: ${resultSubtraction}`);

let instanceA = new M1.AClass();
let instanceB = new BClass();

console.log(instanceA); // AClass { }
console.log(M1.valueZero); // 0
console.log(instanceB); // BClass { }
//console.log(valueOne); // error as it in not imported