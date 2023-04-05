// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.   



// Test Data :

// console.log(timeConvert(200));

// Output :

// "200 minutes = 3 hour(s) and 20 minute(s)."

// =================================
function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let hours2 = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let minutes2 = Math.round(minutes);
    return num + " minutes = " + hours2 + " hours and " + minutes2 + " minutes.";
    }
    
    console.log(timeConvert(200));