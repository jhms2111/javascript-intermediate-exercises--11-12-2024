/*

let dados = [
    {nome:'Joao', pais:'Brasil', idade:33},
    {nome:'Maria', pais:'Colombia', idade:22},
    {nome:'Pedro', pais:'Brasil', idade:33},
    {nome:'Jose', pais:'Espanha', idade:33},
];

function agregarPor(arr, propriedade) {
    return arr.reduce((acumulador, obj) => {
        let chave = obj[propriedade];
        if(!acumulador[chave])  {
            acumulador[chave] = [];
        }
    acumulador[chave].push(obj);
    return acumulador;
   
    })
}

const resultado = agregarPor(dados, 'idade')
console.log(resultado)
*/

let dados = [
    {nome:'Joao', pais:'Brasil', idade:33},
    {nome:'Maria', pais:'Colombia', idade:22},
    {nome:'Pedro', pais:'Brasil', idade:33},
    {nome:'Jose', pais:'Espanha', idade:33},
];

function agregarPor(arr, propriedade) {
    return arr.reduce((acumulador, obj) => {
        let chave = obj[propriedade];  // Pega o valor da propriedade que estamos agrupando
        if (!acumulador[chave]) {       // Se ainda não existe uma chave com esse valor no acumulador, cria um array vazio
            acumulador[chave] = [];
        }
        acumulador[chave].push(obj);    // Adiciona o objeto ao array correspondente a essa chave
        return acumulador;              // Retorna o acumulador atualizado
    }, {});  // O valor inicial do acumulador é um objeto vazio
}

const resultado = agregarPor(dados, 'idade');
console.log(resultado);


const resultado2 = agregarPor(dados, 'pais');
console.log(resultado2);



