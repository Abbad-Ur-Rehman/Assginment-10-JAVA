


//5. Write a js program to check whether a number is prime, Armstrong using functions.


let armstr = function(number){
    let arm =0;

    let temp = number;
    sum =0;
    while(temp>0){
        let Lastdigits = temp%10;
        sum= sum + Lastdigits*Lastdigits*Lastdigits;
        temp = parseInt(temp/10);
    }
    
    if(sum == number){
       console.log((`${number} is an ArmStrong Number`))
    }else{
        console.log((`${number} is not an ArmStrong Number`))
    }
}

let isPrime = function(number){
    let prime = 0;
    for(let i =2; i<number; i++){
        if(number%i === 0){
             console.log(`${number}  not a Prime number`)
            break;
        }else{
            return (`${number} is a Prime number`)
        }        
    }

}

let numbers = 370;
let arm = armstr(numbers);
let prime = isPrime(numbers);