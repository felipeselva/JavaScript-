// ESCOPO LÉXICO - CASO A FUNÇÃO NÃO ENCONTRAR O PARAMETRO, ELA BUSCARÁ EM OUTRAS PARTES DO ESCOPO 


const nome = 'Felipe';

function falaNome() {
    let nome = 'Selva';
    console.log(nome);
}




function usaFalaNome() {
    falaNome();
}

usaFalaNome();