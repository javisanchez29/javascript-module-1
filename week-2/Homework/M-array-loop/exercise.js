<<<<<<< HEAD
/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function getDaysStartingWithT (array){
  
  for(let i = 0  ; i < array.length ; i ++){
    const day = array [i];
    if(day.startsWith(`T`)){
    console.log(day)
  }
}
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const result = getDaysStartingWithT(daysOfWeek)
=======
/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function getDaysStartingWithT (array){
  
  for(let i = 0  ; i < array.length ; i ++){
    const day = array [i];
    if(day.startsWith(`T`)){
    console.log(day)
  }
}
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const result = getDaysStartingWithT(daysOfWeek)
>>>>>>> 8d5094142e83ca3e6bde329f49c689f2c4834d59
