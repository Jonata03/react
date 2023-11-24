/* const numeros = [1, 2, 3, 4]

//spread
const novosNumeros= [ ...numeros, 5]
console.log(numeros);
 */

const joao = {
    nome: 'joao',
    idade: 20
}

const pedro = { ...joao }
pedro.nome = 'pedro' 
pedro.idade = 17

console.log(joao);
console.log(pedro);