enum Day {
  Sunday=1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let currentDay: Day = Day.Wednesday;

let SundayNum :number = Day.Sunday;

let WedNum :number = Day.Wednesday;

console.log("Today is", Day[currentDay]);
console.log("Sunday constant is", SundayNum);
console.log("Wednesday constant is", WedNum);
