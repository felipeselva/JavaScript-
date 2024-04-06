//     Metodos úteis para PROMISES

function rand(min,max) { min*=1000; max*=1000; return Math.floor(Math.random()*(max - min) + min);}

function esperaAi(msg,tempo) { return new Promise((resolve,reject) => { 
    if(typeof msg !=='string') {reject ('BAD VALUE'); return;}

    setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na Promisse');
    }, tempo);
});
}

const promises = [ 
                    esperaAi('Promise1', 3000),
                    esperaAi('Promise2', 500),
                    esperaAi('Promise3', 6000),
                    //esperaAi(1000, 1000)

                    
                ];
                    // PROMISE ALL --> executa todas as promises
                    /*
                    Promise.all(promises)
                    .then((valor) => console.log(valor))
                    .catch((erro) => console.log(erro));
                    */
                    
                    
                    // PROMISE RACE --> EXECUTA E RETORNA A PRIMEIRA PROMISE
                    /*
                    Promise.race(promises)
                    .then((valor) => console.log(valor))
                    .catch((erro) => console.log(erro));

                    */
                    
                    // PROMISE RESOLVE/REJECT --> EXECUTA E RETORNA A PRIMEIRA PROMISE

                    function baixapagina() { const emCache = true; if(emCache) return Promise.resolve('Pagina em cache')
                    return esperaAi('Baixei a pagina', 3000)} 

                    baixapagina()
                    .then(dadosPagina => {console.log(dadosPagina)})
                    .catch(erro => console.log(erro))