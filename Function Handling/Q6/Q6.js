

//Write a js program to find all prime numbers between given interval using functions.

let isPrime = function(number){

    if(number == 1){
        return(` ${number} is not a prime Number`)
    }
    if(number <1){
        return(`${number} is not a Prime Number`)
    }

for(let i = 2; i<number; i++){
    if(number%i==0){
        return (`${number} is not Prime Number `)
    }else{
        return (`${number} is a Prime Number `)
        
    }
    
}
}

console.log(isPrime(7))