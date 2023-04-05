// //Write a JavaScript function to get the month name from a particular date.   

let getMonthName = function(day) {

    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let mmName = monthNames[day.getMonth()];
    return mmName;

}
console.log(getMonthName(new Date('12-11-2010')));

