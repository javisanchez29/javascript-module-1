const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function nombreEnMayuscula (mentor){
    const nombreMayus = mentor.toUpperCase();
    return nombreMayus;
}

function saludosAGritar(mentor){
    return "HELLO " + " " + nombreEnMayuscula (mentor)
}

console.log(saludosAGritar(mentor1));
console.log(saludosAGritar(mentor2));
console.log(saludosAGritar(mentor3));
console.log(saludosAGritar(mentor4));
console.log(saludosAGritar(mentor5));

