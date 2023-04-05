


//14. Write a js program to find sum of all even or odd numbers in given range using function.


let evenOdd = function (num, num2) {
    sum = 0;
    for (let i = num; i <= num2; i++) {
        if(i % 2 ===0 ){
            sum += i
        }else if (i % 2 !== 0){
            sum += i
            
        }
    }
    return sum
}
console.log( "Sum of all Even and Odd Numbers is equal to  "+evenOdd(1,5))