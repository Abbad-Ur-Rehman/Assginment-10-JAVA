// Write a JavaScript function to get the current date.
let currentDate = function(date){

    let exactDate = new Date();
    let day = exactDate.getDate();
    let month = exactDate.getMonth()+1; // because months start from 0 that's why add 1
    let year = exactDate.getFullYear();

    // to add 0 before month and date
    if(day<10) {day='0'+day};
    if(month<10){ month='0'+month};
    
    let todayDate = day + date + month + date + year;
    return todayDate;
}

console.log(currentDate('/'));