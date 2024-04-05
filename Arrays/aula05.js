//MAP - MAPEANDO ARRAYS

const numeros = [ 5, 50 ,80 , 1, 2, 3, 4, 5, 6, 7,40,90,52,49];

const numerosEmDobro = numeros.map(valor => valor*2 )
//console.log(numerosEmDobro)


///////////////////////////////////////////
//     EXEMPLO 2
// RETORNE APENAS UMA STRING COM O NOME DE PESSOA
// REMOVA APENAS A CHAVE "NOME" DO OBJETO
// ADICIONE UMA CHAVE ID EM CADA OBJ

const pessoas = [
    { nome: 'Felipe', idade: 26},
    { nome: 'Edna', idade: 54},
    { nome: 'Ronaldo', idade: 56},
    { nome: 'Gabriel', idade: 10},
    { nome: 'Beatriz', idade: 18},
    { nome: 'Arthur', idade: 2},
];

const nomePessoas = pessoas.map(valor => valor.nome);
const idadePessoas = pessoas.map(valor => ({idade: valor.idade}));
const idPessoas = pessoas.map(function(valor, indice) {
    const newObj = {...valor};

    newObj.id = indice;
    return newObj

});

console.log(idadePessoas);
console.log(nomePessoas);
console.log(idPessoas);