

//13. Write a js program to find sum of all natural numbers between 1 to n using function.
let sumNatural = function(n){
    sum = 0;
    for(let i = 1; i <= n ;i++){
        sum += i;
    }
    return sum
}
let n =10
console.log("Sum of natural Numbers are "+sumNatural (n))