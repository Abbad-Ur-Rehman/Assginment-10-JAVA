



//Write a js program to find power of any number using function.

let findPower = function(base , expo){
    let result = 1
    for(let i = 0; i < expo; i++){
        result *= base
    }
    console.log(`${base} to the power of ${expo} is ${result}`)
    return result
}
let base = 6;
let expo = 5;
const result = findPower(base, expo);
