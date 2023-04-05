

//Write a js program to check whether a number is palindrome or not using function.
function isPalindrome(number) {
    let strNumber = number.toString();
    let reverseStrNumber = strNumber.split('').reverse().join('');
    return strNumber === reverseStrNumber;
  }

  const number1 = 12321;
  const number2 = 12345;
  console.log(`${number1} is${isPalindrome(number1) ? '' : ' not'} a palindrome`);
  console.log(`${number2} is${isPalindrome(number2) ? '' : ' not'} a palindrome`);
  