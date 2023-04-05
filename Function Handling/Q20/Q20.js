

// Write a js program to find GCD (HCF) of two numbers using function.
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  let a = 12;
  let b = 18;
  let gcdtot = gcd(a, b);
  console.log(`The GCD of ${a} and ${b} is ${gcdtot}`);
  