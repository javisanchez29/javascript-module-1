function distancia (multiply, name, numero) {
    return (
        "Soy Javier y estoy midiendo los " + name + 
        " de distancia entre " +
        "Manresa a Barcelona  es de " + numero +
        " kilometros " +
        Math.sqrt(multiply) +
        "." + " Es el tiempo que demoro a una velocidad de 40k/h "   )
}

const result = distancia(40, " kilometros ", 40 )
console.log(result);
