// Factory function 

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },

        fala (assunto) {
            return `${this.nome} esta falando ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}



const p1 = criaPessoa ('Felipe', 'Selva', 1.77, 80);
/*

console.log(p1.imc);
const p2 = criaPessoa('Edna', 'Selva', 1.50, 100)
console.log(p2.fala(' sobre JS')); 

*/
p1.nomeCompleto = 'Paulo Gabriel de Lima'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('Sobre JS'))