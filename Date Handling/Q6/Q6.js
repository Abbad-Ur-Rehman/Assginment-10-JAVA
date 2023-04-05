
// 6. Write a JavaScript function to add specified minutes to a Date object.   



// Test Data :

// console.log(add_minutes(new Date(2014,10,2), 30).toString());

// Output :

// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"



// -----------------SOLVE----------------------

let addMinutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(addMinutes(new Date(2014,10,2), 30).toString());