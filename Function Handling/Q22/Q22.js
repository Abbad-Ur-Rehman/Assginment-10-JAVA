

//22. Write a js program to display all array elements using function.

let displayArry = function(arr){
    
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i])
    }
    
}
let myArr = [ "Name", "Age", 12, true , false , "Hamza" , 12, 17, 122 ]
console.log(displayArry(myArr))