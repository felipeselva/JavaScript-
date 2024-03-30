// CLOSURES = habilidade de acessar o escopo léxico 

function retornaFuncao(nome) {
    
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Felipe');
const funcao2 = retornaFuncao('Selva')
console.log(funcao(),funcao2());
