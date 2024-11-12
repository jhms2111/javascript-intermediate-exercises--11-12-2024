let numeros = [ 77, 99, 66, 1, 2, 6, 3, 18, 22]


function separarNumeros(arr) {
    let numPares = arr.filter(num => num % 2 == 0);
    let numImpares = arr.filter(num => num % 2 !== 0);
    return [...numPares,...numImpares]
}

let resultado = separarNumeros(numeros)

console.log(resultado)