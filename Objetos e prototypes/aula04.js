            // MÉTODOS ÚTEIS PARA OBJETOS

        const produto = {nome: 'Felipe', preco: 1.8};      


/*       Object.assign ---> COPIAR OBJETO

         const caneca = {...produto, material: 'porcelana'}; ---> COPIAR OBJETO 
         caneca = Object.assign({}, produto); ---> COPIAR OBJETO 

*/
//        -----------------------------------------------------------------------------------------------

/*       Object.getOwnPropertyDescriptor ---> DESCREVE/RETORNA AS PROPRIEDADES DE UM OBJETO 

         console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

*/
//        -----------------------------------------------------------------------------------------------
/*      

        Object.value ---> RETORNA OS VALORES DO OBJETO SEM AS CHAVES 
        Object.entries ---> RETORNA AS CHAVES E OS VALORES DE UM OBJETO

            console.log(Object.values(produto));
            console.log(Object.entries(produto)); 

            for(let valor of Object.entries(produto)) {
                
                console.log( [valor[0]], [valor [1]]); 

            } 
*/




            




