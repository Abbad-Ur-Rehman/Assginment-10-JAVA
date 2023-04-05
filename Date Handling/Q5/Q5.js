// //
//  5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

//  Test Data :
//  console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')))
//  console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')))
//  console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
 
//  Output
//  "Date1 = Date2
//  "Date1 > Date2
//  "Date2 > Date1"
 
 


let dateDiff = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");
  else if (date1<date2) return ("Date2 > Date1");
  else return ("Date1 = Date2"); 
 }

console.log(dateDiff(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(dateDiff(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(dateDiff(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));