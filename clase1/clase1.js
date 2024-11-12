let numeros = [ 8, 99, 15, 18, 0, 55, 66, 0, 3, 0]

  function moverZero(arr) {
    let semZero = arr.filter(num => num !== 0);
    let zeros = arr.filter(num => num === 0);
    return[...semZero,...zeros]
}

let resultado = moverZero(numeros)

console.log(resultado)

