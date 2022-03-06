let names = ["laura","javier", "joa", "rosa", "pau" ]

function secondMatchesAmy(array) {
  if ( array[1] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(names))