// IIFE = Immediately invoked function expression 

(function(idade, peso, altura) {


const sobrenome = 'Selva';
function criaNome(nome) {
    return nome + ' ' + sobrenome;
}

function falaNome() {
    console.log(criaNome('Felipe'));
}

falaNome();
console.log('Idade ' + idade + ', peso ' + peso + ', Altura ' + altura);
}) (26, 80, 1.70); 

