



function sumOfDigits(number) {
    let sum = 0;
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
      sum += parseInt(strNumber.charAt(i));
    }
    return sum;
  }

  let number = 1234;
  let sum = sumOfDigits(number);
  console.log(`The sum of digits of ${number} is ${sum}`);
  