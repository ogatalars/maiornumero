/*Escreva uma função que usa dois 
numeros e retorna o maior entre eles
 

*/

function retornaMaiorNumero() { 
    let x = Math.random()* 10
    let y = Math.random()* 10
    console.log(Math.max(x,y))
    
}


retornaMaiorNumero()

function retornaMaiorNumero2(x, y) { 
    let res = Math.max(x,y)
    console.log(res)
    return res
}

retornaMaiorNumero2(2,3)



function max(numero1, numero2) {
    if(numero1 > numero2)
       return numero1;
    return numero2;
}

let valorMaior = max(5,8);
console.log(valorMaior)
/*

function max(numero1, numero2)
return numero1>numero2 ? numero 1 : numero2 ;

*/
