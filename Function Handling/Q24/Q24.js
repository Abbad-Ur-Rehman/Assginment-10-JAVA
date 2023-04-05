


//24. Write a js program to find maximum and minimum elements in array using function.
function findMax(arr){
    let max = arr[0];
    for(let i =1; i <arr.length ;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

//min
function findMin(arr){
    let min = arr[0];
    for(let i= 1; i <arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

let numbers = [5,4,8,7,5,100];
let max= findMax(numbers);
let min= findMin(numbers);
console.log(`The max number is ${max}`)
console.log(`The min number is ${min}`)