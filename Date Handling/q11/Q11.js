// 11. Write a JavaScript function to get the maximum date from an array of dates.   



// Test Data :

// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Output :

// "2015/02/02"

// ===============SOLVE===============
function max_date(all_dates) {
    var max_dt = all_dates[0],
      max = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
      {
      if ( new Date( dt ) > max)
      {
      max_dt = dt;
      max = new Date(dt);
      }
      });
     return max_dt;
      }
    console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));