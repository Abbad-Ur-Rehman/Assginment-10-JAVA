// Write a JavaScript function to get the number of days in a month.   

let daysInMonth = function(month , year){

    let value = new Date(month ,year ,0).getDate();
    return value;
}

console.log(daysInMonth(2010,2));