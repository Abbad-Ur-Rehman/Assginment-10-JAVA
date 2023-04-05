

//Write a js program to print all Armstrong numbers between given interval using functions.

// let assmuse the interval b/w 1 to 400

let armstr = function(){
let lowestNumber = prompt ("enter low");
let highestNumber = prompt ("enter high");
for(let i = lowestNumber ; i <= highestNumber; i++){
    let temp = i;
    let sum = 0;
    let noDigits = i.toString().length;
    while(temp >0){
        let digits = temp%10;
        sum += digits ** noDigits;
        temp = parseInt(temp/10);
    }
    

    if(sum==i){
          console.log(i);
    }
}

}

console.log(armstr())
