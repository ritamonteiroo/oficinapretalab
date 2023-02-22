/*
5. Utilize if/else para escrever um código que define três constantes 
com os valores dos três ângulos internos de um triângulo. O programa 
deve retornar true se os ângulos representarem os ângulos 
de um triângulo e false, caso contrário.
Conteúdos abordados: operadores aritméticos, estrutura Condicional

Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
Um ângulo será considerado inválido se não tiver um valor positivo.

*/

let angulo1=45;
let angulo2=60;
let angulo3=75;

const saoAngulosValidos = angulo1 >=0 && angulo2 >=0 && angulo3 >=0;
soma = angulo1 + angulo2 + angulo3;
console.log(soma)

if (soma === 180 && saoAngulosValidos ===true ){
    console.log (true);
}else {
    console.log(false);
}