    // DEFINE-PROPERTIES E  DEFINE-PROPERTY 

    
            // DEFINE-PROPERTIES
/*
        Object.defineProperties(this,{
            nome: {
                enumerable:true, // --> MOSTRA A CHAVE
                value: nome, // -- > VALOR DA CHAVE
                writable: true, // --> TRUE = PODE ALTERAR VALORES
                configurable : true // --> TRUE = CONFIGURAR VARIAVEL  
            },
            preco: {
                enumerable:true, // --> MOSTRA A CHAVE
                value: preco, // -- > VALOR DA CHAVE
                writable: true, // --> TRUE = PODE ALTERAR VALORES
                configurable : true // --> TRUE = CONFIGURAR VARIAVEL  
            },
        });
    }
*/

        //  DEFINE-PROPERTY

function Produto(nome,preco,estoque) {
this.nome = nome;
this.preco=preco;


Object.defineProperty(this, 'estoque', {
    enumerable:true, // --> MOSTRA A CHAVE
    value: estoque, // -- > VALOR DA CHAVE
    writable: true, // --> TRUE = PODE ALTERAR VALORES
    configurable : true // --> TRUE = CONFIGURAR VARIAVEL  
});
}

const p1 = new Produto ('Camiseta', 20,3)
    console.log(p1)
