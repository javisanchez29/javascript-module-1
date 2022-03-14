/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {

  let tolowerStr = str.toLowerCase();
  let nameSplit = tolowerStr.split('');
  let nameArray = nameSplit[0];
  let nameSlice = nameSplit.slice(1);
  let nameToupper = nameArray.toUpperCase();
  let namesStr = [nameToupper, ... nameSlice];
  return namesStr.join('');
 
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
