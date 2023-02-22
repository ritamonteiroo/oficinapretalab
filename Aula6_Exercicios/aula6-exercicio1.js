/*
1. Siga as instruções descritas abaixo:
Conteúdos abordados: constantes e variáveis

Crie uma constante chamada meuNome e atribua a ela o seu nome.
Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de 
nascimento.
Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que 
você nasceu.
Crie uma variável chamada profissão e atribua a ela a sua profissão.
Utilize o console.log para imprimir as constantes e variáveis que você criou.
Altere o valor da variável profissão para desenvolvedora e tente exibir 
no console novamente, observe o que acontece.
Atribua um novo valor à constante cidadeNatal e tente exibir no console 
novamente, observe o que acontece.
Você consegue entender e explicar, com suas palavras, o motivo do erro?
*/


const meuNome = "Rita";
const cidadeNatal = "Pelotas";
const anoDeNascimento = 1989;
let profissao = "Engenheira Agrícola";

console.log(meuNome);
console.log(cidadeNatal);
console.log(anoDeNascimento);
console.log(profissao);


profissao = "Desenvolvedora";
console.log(profissao);
cidadeNatal = "Porto Alegre";
console.log(cidadeNatal);

/* Você consegue entender e explicar, com suas palavras, o motivo do erro?
 a constante é imutável é uma variável utilizada apenas para leitura, 
 no caso se quisermos mudar algum dado o aconselhável é usar a variavel let
*/
