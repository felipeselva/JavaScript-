

// EXEMPLO 1
/*

function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = {
    nome: 'João',
    sobrenome: 'OLIVEIRA'
}; 

console.log(p1);
console.log(p2);


*/

// EXEMPLO 2

/*


function falarFrase(comeco) {
    function falarResto (resto) {
        return comeco + ' ' + resto;
    }

    return falarResto;
}

const olaMundo = falarFrase('Olá');
console.log(olaMundo('Mundo'));

*/

// EXEMPLO 3 

function criaMultiplicador (multiplicador) {
    return function (n) {
        return multiplicador * n;

    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(quadriplica(2));

