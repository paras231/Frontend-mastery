console.log("js date  and time methods");

const birthday = new Date("15 January 2026 12:00");

console.log(birthday.getDate()); // will give date value.

// passing parameters in date object->

const testDate = new Date();
console.log(testDate.getDay()); // gets the day of the week

console.log(typeof testDate.getFullYear()); // gets the full year 2015

console.log(testDate.getHours());

//  increase date

const initialDate = new Date();

const finalyDate = initialDate.setUTCDate(initialDate.getUTCDate() + 1);

console.log(finalyDate);

const check = birthday.toISOString()

console.log(check);

const value = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
console.log(value);
