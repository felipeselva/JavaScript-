// Arguments recebe/sustenta todos os argumentos de funções FUNCTION 



/*function funcao(a,b,c) {
    let total = 0;
    for ( let argumento  of arguments) {
    total += argumento;
    }

console.log(total,a,b,c);
}

funcao(1,2,3,4,5,6,7);*/



 // ------------------------ // -------------------------- //


/*function funcao(a, b = 2, c = 4) {
   
console.log(a + b + c);
}
funcao(2, undefined, 20);*/


 // ------------------------ // -------------------------- //


/*function funcao({ nome, sobrenome, idade }) {
   
    console.log(nome, sobrenome, idade);
    }
   let obj =({ nome: 'Felipe', sobrenome : 'Selva', idade : 26 });
   funcao(obj);*/

 
 // ------------------------ // -------------------------- //
 
 
   /* function funcao([ valor1, valor2, valor3 ]) {
   
    console.log(valor1, valor2, valor3);
    }
   
   funcao(['Edna', 'Selva', 30]);
   */

   function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
         if (operador === '+' ) acumulador += numero;
         if (operador === '-' ) acumulador -= numero;
         if (operador === '/' ) acumulador /= numero;
         if (operador === '*' ) acumulador *= numero;

    
    }
    console.log(acumulador);
   }

   conta( '*', 1, 20,30,);
   