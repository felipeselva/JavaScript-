            // GETTERS E SETTERS 

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco=preco;
   
    
    let estoqueprivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // --> MOSTRA A CHAVE
        configurable : true,// --> TRUE = CONFIGURAR VARIAVEL  
        get: () => { return estoqueprivado;},

        set: function(valor) {
            
            if (typeof valor !== 'number') {
                console.log('Valor Invalido'); 
                return;
            }
        
            estoqueprivado = valor;
        }
        });
    }


    
    const p1 = new Produto ('Camiseta', 20,3)
        //console.log(p1)
        p1.estoque = 500;
        console.log(p1.estoque);