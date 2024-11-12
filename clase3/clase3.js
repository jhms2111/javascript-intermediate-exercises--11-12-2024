

let nomes = [ 'Maria','Joao','Marcela','Raissa','Ricardo']

function nomesComMEFinalo(arr) {
    let comM = arr.filter(nome => nome.startsWith('M'));
    let finalO = arr.filter(nome => nome.endsWith('o'))
    return [...comM,...finalO]
}

let resultado = nomesComMEFinalo(nomes)

console.log(resultado)