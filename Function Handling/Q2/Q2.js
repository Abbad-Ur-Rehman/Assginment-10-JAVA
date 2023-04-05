



// 2. Write a js program to find diameter, circumference and area of circle using functions.

function diameter(radius) {
    return radius * 2;
  }
  
  function circumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  function area(radius) {
    return Math.PI * radius ** 2;
  }

  let radius = 5;
  let d = diameter(radius);
  let c = circumference(radius);
  let a = area(radius);
  console.log(`For a circle with radius ${radius}:`);
  console.log(`Diameter: ${d}`);
  console.log(`Circumference: ${c}`);
  console.log(`Area: ${a}`);
  