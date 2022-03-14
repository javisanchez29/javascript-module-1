
let claseEs = ["Javier", "Laura", "Johana", "Rosa", "Paula"];
let claseEn = ["Enrique", "Vanessa", "Stella", "Maria", "Andrea"];


let claseTotal = claseEs.concat (claseEn);

console.log(claseTotal.sort());

function nameSolicitado (name, arr ){
if (!arr.includes(name)){
    return name + " no es de la clase de " + arr
}
else {
    return name + " es de la clase de " + arr
}
}

console.log(nameSolicitado("Laura" ,claseEn));
