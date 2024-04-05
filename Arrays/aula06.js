//      REDUCE --> REDUZIR OS ELEMENTOS DO ARRAY PARA UM ELEMENTO SÓ

const numeros = [ 5, 50 ,80 , 1, 2, 3, 4, 5, 6, 7,40,90,52,49];

/*

//SOME TODOS OS NUMEROS (REDUCE)

const total = numeros.reduce(function(acumulador, valor, indide, array){

    return acumulador += valor;

    }, 0);

console.log(total);

*/



// RETORNE A PESSOA MAIS VELHA

const pessoas = [
    { nome: 'Felipe', idade: 26},
    { nome: 'Edna', idade: 54},
    { nome: 'Ronaldo', idade: 56},
    { nome: 'Gabriel', idade: 10},
    { nome: 'Beatriz', idade: 18},
    { nome: 'Arthur', idade: 2},
];

const maisVelha = pessoas.reduce(function( acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

