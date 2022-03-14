
function getAge(birthYear){
return 2022 - birthYear
}

function getDriveingStatus (birthYear){
const age = getAge (birthYear)
if (age >= 17){
return `Born in ${birthYear} can drive`
}
else{
    const yearsToDrive = 17 - age
    return `Born in ${birthYear} can drive in ${yearsToDrive} years`
}
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
const adults = birthYears.filter(year => getAge(year) > 17)
console.log(birthYears)
console.log(adults)

