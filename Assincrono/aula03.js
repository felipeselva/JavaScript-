//                  ASYNC / AWAIT

function rand(min =0,max=3) { min*=1000; max*=1000;
    return Math.floor(Math.random()*(max - min) + min);}

function esperaAi(msg,tempo) { return new Promise((resolve,reject) => { 
    
    setTimeout(() => {

        if(typeof msg !=='string') {reject ('VALOR INVALIDO PAIZÃO'); return;}
       
        resolve(msg.toUpperCase() + ' - Passei na Promisse');

    }, tempo);
});
}
/*
esperaAi('fase1', rand())
.then( valor => {
    console.log(valor)
    return esperaAi('Fase2', rand())
    .then(fase => {
        console.log(fase)
        return esperaAi('Fase3',rand())
        .then(fase => {
            console.log(fase)
            return fase;
            })
        .catch(erro => console.log(erro));
    })
});

*/

//                  ASYNC / AWAIT

async function executa(){
    try {
const fase1 = await esperaAi('fase1', rand());
console.log(fase1);
const fase2 = await esperaAi(2222, rand()); 
console.log(fase2);
const fase3 = await esperaAi('fase3', rand());
console.log(fase3);

} catch (e) {
    console.log(e)
}
} 

executa();