/*
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments
*/

//Tyler's solution1
let stringFunc = (input) => {
    try {
      if (typeof input !== 'string' || input.length > 30){
        throw new Error('String must not be empty, null, or exceed 30 characters');
      }
      input.trim();
      input = input.slice(0, 11) + 'E' + input.slice(12, 18) + 'F' + input.slice(19);
      return input;
    }
    catch(err){
      return err;
    }
  }
  
  // stringFunc('Welcome to eleven fifty');
  console.log(stringFunc('Welcome to eleven fifty        '));

//Caleb's Solution2
let string = 'Welcome to eleven fifty';

function checkForValidString(str){
  return new Promise((res, rej) => {
    if (!(typeof str === 'string') || !(str.length > 0) || !(str.length < 30)){
      rej('Error: String must not be empty and must be a string type');
    } else {
      res();
    }
  })
}

function stringChallenge(str, callback){
  checkForValidString(str)
    .then(() => {
      str = str.replace(/eleven fifty/g,'Eleven Fifty');
      str.trim();
      callback(str);
    })
    .catch((err) => {
      console.log(err);
    })
}

stringChallenge(string, (newString) => console.log(newString));

//Lars's Solution3
let strang = 'eleven fifty';
function check(thing){
   let final = '';
   let word = '';
   if(typeof thing == 'string' && thing.length > 0 && thing.length < 30){
       for(let i = 0; thing.length > i; i++){
           if(thing.charAt(i) == 'e'){
               final = thing.charAt(i).toUpperCase() + strang.slice(i + 1);
               break
           }else{}
       }
       for(i = 0; thing.length > i; i++){
           if(thing.charAt(i) == 'f'){
               word = thing.charAt(i).toUpperCase() + strang.slice(i + 1);
               final = final.slice(0, 7) + word;
               break
           }else{}
       }
       if(thing.length > 11){
           final = final.slice(0,12);
       }else{}
       console.log(final);
   }else{
       console.log('String must not be empty, null, or exceed 30 charecters');
   }
}
check(strang);
  
//Brandon's Solution4
let str = "Welcome to eleven fifty"

function checker(string, callback){
    if(typeof string !== "string" || string.length > 30 || string.length < 1){
        callback("String must not be empty, null, or exceed 30 characters");
    } else {
        string.trim();
        let string1 = string.slice(0, 11);
        let string2 = string.slice(12, 18);
        let string3 = string.slice(19)
        capE = string.charAt(11).toUpperCase();
        capF = string.charAt(18).toUpperCase();
        completeString = string1 + capE + string2 + capF + string3
        callback(completeString);
    }
}

function display(param){
    console.log(param);
}

checker(str, display);

//Ron's Solution5 (it doesnt work well)
let str = “Welcome to eleven fifty”;

function checkStr(strg) {
   if(typeof strg === ‘string’ && strg.length > 0 && strg.length < 30) {
      strg = strg.replace(/‘eleven fifty’/g, ‘Eleven Fifty’)
     return strg.trim();
   } else {
       console.log(‘String must not be empty, null, or exceed 30 characters’)
   }
}

console.log(checkStr(str));





