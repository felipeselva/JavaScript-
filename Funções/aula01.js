//First-class objects
//Function Expression

const souUmDado = function() {

    console.log('Sou um dado');

};

souUmDado();

// função recebendo função de parametro 

/*function executaFuncao(funcao) {
    console.log('Executando sua função')
    funcao();
}

executaFuncao(souUmDado);*/

//Arrow function

const funcaoArrow = () => {

console.log ('Sou uma Arrow Function');

};

funcaoArrow();

//Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou Falando...')
    }
};
obj.falar();

