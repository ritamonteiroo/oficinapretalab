/*
14. Utilize if/else para escrever um código que se inicie com duas constantes declaradas: 
uma para o custo de um produto e outra para o seu valor de venda. A partir desses valores, 
calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil 
desses produtos.
Conteúdos abordados: Estrutura Condicional, operadores aritméticos

Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de 
entrada seja menor que zero.

*/

let custoDoProduto = 450.00;
let valorDeVenda = 975;

lucro = valorDeVenda - custoDoProduto;

if (custoDoProduto > 0 && valorDeVenda > 0 ){
    console.log("Seu lucro vendendo mil unidades foi de: " + lucro *1000);
} else{
    console.log("valor inválido, tente novamente");
}

