const numeroDeEstudiantes = 15;
const numeroDeMentores = 8;

const numeroTotal = numeroDeEstudiantes + numeroDeMentores;
const porcentajeE = Math.round ((100*numeroDeEstudiantes)/numeroTotal) 
const porcentajeM = Math.round ((100* numeroDeMentores)/numeroTotal)

console.log("porcentaje estudiantes: " + porcentajeE + "%")
console.log("porcntaje mentores: " + porcentajeM + "%")

