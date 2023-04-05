

//Write a js program to find LCM of two numbers using function.

function lcm(a, b) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
  }

  const a = 12;
  const b = 18;
  const lcmAB = lcm(a, b);
  console.log(`The LCM of ${a} and ${b} is ${lcmAB}`);
  