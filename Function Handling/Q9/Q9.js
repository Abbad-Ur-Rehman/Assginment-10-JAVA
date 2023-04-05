

// Write a js program to print all perfect numbers between given interval using functions.

let isPer = function(number){
    sum = 0;
    for(let i = 1 ; i <= number / 2; i++){
        if(number % i === 0){
            sum =sum + i
        }
    }
return sum === number &&  number !== 0;
}


let intrvalPerfect = function( start , last){
for( let i = start; i <= last ; i++){
    if(isPer(i)){
        console.log(i)
    }
}
return ""
}

console.log(intrvalPerfect(1,1000))