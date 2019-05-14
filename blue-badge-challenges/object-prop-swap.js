/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
*/


//example 1
 function swap(obj, key1, key2) {
     let temp = {};
     for (let enumerable in obj){
         temp[enumerable] = obj[enumerable];
}

temp[key1] = obj[key2];
temp[key2] = obj[key1];
  return temp;
 }
let person = {
    firstName: 'Jessica',
    lastName: 'Diego',
}
console.log(swap(person, 'fName', 'lName'))


