/**************************
CODE CHALLENGE 2 - ARRAYS
**************************/

/*
Given 2 arrays:
[10,20,30,40,50,70]
[5,3,2,5]

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return that same number
*/



    //Answer1
   
    let arr1 = [10, 20, 30, 40, 50, 70]
    let arr2 = [5, 3, 2, 5]
    
    
    function multiply(arr1, arr2){
        let mult = [];
        
        if((Array.isArray(arr1) && Array.isArray(arr2)) && (arr1[0] != undefined || arr2[0] != undefined)){
            if(arr1.length > arr2.length){
                arr1.splice(arr2.length, arr1.length)
                for(i = 0; i < arr1.length; i++){
                    mult.push(arr1[i] * arr2[i]);
                }
            } else if(arr2.length > arr1.length){
                arr2.splice(arr1.length, arr2.length)
                for(i = 0; i < arr1.length; i++){
                    mult.push(arr1[i] * arr2[i]);
                }
            } else {
                for(i = 0; i < arr1.length; i++){
                    mult.push(arr1[i] * arr2[i]);
                }
            }
            return mult
        }
        return "Sorry, your input is invalid";
    }
    
    console.log(multiply(arr1, arr2));

    //Answer2
let arr1 = [10,20,30,40,50,70];
let arr2 = [5,3,2,5,'cat',true];
let newArr = [];

function arrMultiplier (arrayOne,arrayTwo) {
    for(i=0;i<arr1.length;i++) {
        if(arrayTwo[i] != undefined && typeof arrayOne[i] === "number" && typeof arrayTwo[i] === "number"){
            newArr.push(arrayOne[i]*arrayTwo[i]);
        }
    }
    return newArr;
}

console.log(arrMultiplier(arr1,arr2));

//Answer3

let arr1 = [ 10, 20, 30, 40, 50, 70 ]
let arr2 = [ 5, 3, 2, 5 ]

function multiplyArrays(arr1, arr2) {
    checkForValidArrays(arr1, arr2)

    let smallestLength = (arr1.length <= arr2.length ? arr1.length : arr2.length)
    let newArr = []
    for(let i = 0; i < smallestLength; i++) {
        newArr[i] = arr1[i] * arr2[i]
    }
    return newArr;
}

function checkForValidArrays() {
    for(arr of arguments) {
        if(!arr instanceof Array || !arr.length > 0) throw new TypeError('expected arrays of non-zero length for multiplication')
    }
}

console.log(multiplyArrays(arr1, arr2));

//Answer4
let arr1 = [10, 20, 30, 40, 60, 200];
let arr2 = [3, 4, 7, 10];
let arr3 = 0
let multArr = arr2.map(function(e, i){
    if(i % 1 == 0 && i != 0)  arr3++
    return e * arr1[arr3];
    
});

console.log(multArr);


//Instructor Solutions Possibly work

const multipleValues = (arrOne = [], arrTwo = []) => {
    let newArr = [];
    arrOne = (arrOne instanceof Array && arrOne.length > 0) ? arrOne : false;
    arrTwo = (arrTwo instanceof Array && arrTwo.length > 0) ? arrTwo : false;

    let limit = (arrOne.length < arrTwo.length) ? arrOne.length : arrTwo.length;

    if(arrOne && arrTwo) {
        for(let i = 0; i < limit ; i++){
            newArr.push(arrOne[i] * arrTwo[i])
        }
        return newArr;
    } else {
        return "Error: Please provide valid arrays";
    }
}

let arrOne = [ 10, 20,30, 40, 50, 70];
let arrTwo = [ 5, 3, 2, 5 ];

// console.log(multipleValues(arrOne, true));
console.log(multipleValues(arrOne));



