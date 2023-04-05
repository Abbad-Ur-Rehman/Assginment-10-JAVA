

// 7. Write a JavaScript function to test whether a date is a weekend.   



// Note : Use standard Saturday/Sunday definition of a weekend.

// Test Data :

// console.log(is_weekend('Nov 15, 2014'));

// console.log(is_weekend('Nov 16, 2014'));

// console.log(is_weekend('Nov 17, 2014'));

// Output :

// "weekend"

// "weekend"

// undefined


// -------------------SOLVE-------------------

let is_Weekday = (d = new Date()) => d.getDay() % 6 !== 0;
console.log("Is current day is Weekday?");
console.log(is_Weekday()); 
let is_Weekend = (d = new Date()) => d.getDay() % 6 === 0;
console.log("Is current day is Weekend?");
console.log(is_Weekend());