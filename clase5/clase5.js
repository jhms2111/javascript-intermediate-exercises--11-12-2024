

let times = [
    {nome:'Palmeiras', Estado:'SP', divisao: 'Primeira', pontos: 80},
    {nome:'Santos', Estado:'SP', divisao: 'Segundaa', pontos: 55},
    {nome:'Corinthians', Estado:'SP', divisao: 'Primeira', pontos: 60},
    {nome:'Atletico MG', Estado:'MG', divisao: 'Primeira', pontos: 77},
    {nome:'Goias', Estado:'GO', divisao: 'Segunda', pontos: 50}
]


function timesDivisao(arr) {
    return arr.reduce((acc, time) => {
    if (time.divisao === 'Primeira') {
        acc.PrimeiraDivisao.push(time)
    } else {
        acc.SegundaDivisao.push(time)
    } 

    return acc}, {
    PrimeiraDivisao: [],
    SegundaDivisao: []
} )}
const resultado =  timesDivisao(times)
console.log(resultado)


function timesEstado(arr){
    return arr.reduce((acc, time) => {
        if (time.Estado === 'SP') {
            acc.estadoSP.push(time)
        } else {
            acc.outrosEstados.push(time)
        }
        return acc},  {
            estadoSP: [],
            outrosEstados: []
        })
}

const resultadoEstado = timesEstado(times)
console.log(resultadoEstado)