

//Write a js program to find factorial of any number using function.


function factorial(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
      fac *= i;
    }
    return fac;
  }
  let number = 5;
  let fac = factorial(number);
  console.log(`The factorial of ${number} is ${fac}`);
  