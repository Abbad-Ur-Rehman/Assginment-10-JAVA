

//12. Write a js program to print all even or odd numbers in given range using function.

let evenOdd = function (num, num2) {
    
    for (let i = num; i <= num2; i++) {
        if(i % 2 ===0 ){
            console.log(i +" Even Number")
        }else if (i % 2 !== 0){
            console.log(i + " Odd Number")
        }
    }
    return "These Number are even or odd"
}
console.log(evenOdd(1,100))