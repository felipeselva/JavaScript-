



//RETORNE A SOMA DO DOBRO DE TODOS OS PARES 
// --> FILTRAR OS NUMEROS PARES
// --> DOBRAR OS VALORES
// --> REDUZIR ( SOMAR OS VALORES )

const numeros = [ 5, 50 ,80 , 1, 2, 3, 4, 5, 6, 7,40,90,52,49];
const numerospares = numeros.filter( valor => valor % 2 === 0).map( valor => valor * 2).reduce((acumulador, valor) => acumulador + valor);

console.log(numerospares);