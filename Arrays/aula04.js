// FILTER - FILTRANDO O ARRAY
// FILTER -> SEMPRE RETORNA UM ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS.

//Retorne os numeros maiores que 10
const numeros = [ 5, 50 ,80 , 1, 2, 3, 4, 5, 6, 7,40,90,52,49];

const numerosFiltrados = numeros.filter( valor => valor > 10);
//console.log(numerosFiltrados);


const pessoas = [
    { nome: 'Felipe', idade: 26},
    { nome: 'Edna', idade: 54},
    { nome: 'Ronaldo', idade: 56},
    { nome: 'Gabriel', idade: 10},
    { nome: 'Beatriz', idade: 18},
    { nome: 'Arthur', idade: 2},
];

// pessoas com nome maior ou igual a 5 letras 
const nomesFiltrados = pessoas.filter(valor => valor.nome.length >= 5);

// PESSOAS COM MAIS DE 50 ANOS
const idadeFiltrada = pessoas.filter(id => id.idade > 50);

// PESSOAS CIKA O NOME TERMINA COM A 
const fimNomeFiltrado = pessoas.filter(fim => fim.nome.toLowerCase().endsWith('a'))
console.log(fimNomeFiltrado);

