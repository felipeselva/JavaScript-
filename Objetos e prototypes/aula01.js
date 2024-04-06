
// REVISANDO OBJETOS



const pessoa1 = {

    nome: 'Felipe',
    sobrenome:'Selva'
};

//console.log(pessoa.nome);
//console.log(pessoa.sobrenome);
//const chave ='nome'
// FORMA DINAMICA  --> console.log(pessoa [chave]);

const pessoa2 = [];
pessoa2.nome = 'Felipe'
pessoa2.sobrenome = 'Selva'


/////////////////////////////////////////////////////////////


/*

pessoa1.falarNome = function() { console.log(`Meu nome é ${this.nome}`);}
pessoa1.falarNome();

pessoa1.idade = 26;
pessoa1.dataNascimento = function () {const dataAtual = new Date(); return dataAtual.getFullYear() - this.idade;  };
console.log(pessoa1.dataNascimento())

for(let chave in pessoa1) {console.log(pessoa1[chave]);};

*/

function criaPessoa(nome,sobrenome){ return { nome,sobrenome,nomeCompleto(){ return `${this.nome} ${this.sobrenome}`;}};};

const p1 = criaPessoa('Edna','Selva');
console.log(p1.nomeCompleto())

///////////////////////////////////////////////////////////////////////////////////////////


function Pessoa( nome,sobrenome) { this.nome = nome; this.sobrenome = sobrenome; Object.freeze(this)}
const p2 = new Pessoa('Gabriel','Selva');
console.log(p2)
