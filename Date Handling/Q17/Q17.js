
// 17. Write a JavaScript function to convert a Unix timestamp to time.   



// Test Data :

// console.log(days_passed(new Date(2015, 0, 15)));

// 15

// console.log(days_passed(new Date(2015, 11, 14)));

// 348

// ===================================================

function Unix_timestamp(t)
{
let dt = new Date(t*1000);
let hr = dt.getHours();
let m = "0" + dt.getMinutes();
let s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}

console.log(Unix_timestamp(1412743274));
