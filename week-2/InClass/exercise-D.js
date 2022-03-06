function isHappy(happy) {
    if (happy === "I am happy") {
      return "Good job, you're doing great!";
    } else if (happy === "sad" ){
      return "Every cloud has a silver lining";
    } else if (typeof happy === "number"){
      return "Beep beep boop";
    } else {      
        return "I'm sorry, I'm still learning about feelings!";
    }
  }

  console.log(isHappy("I am happy"))