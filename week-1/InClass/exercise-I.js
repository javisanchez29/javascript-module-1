function  returnData(age){
    const year = 2022
    return year - age
}

function returnName(myName, age){
    return "Hola me llamo " + myName +" y naci en " + returnData (age)
}

console.log (returnName ("Javier", 29))

