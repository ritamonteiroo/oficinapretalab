/*
13. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
Conteúdos abordados: Tabela verdade, Estrutura Condicional

Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C 
Porcentagem >= 60 -> D 
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/

let nota = 234;

if (nota > 100 || nota <0){
    console.log ("Nota inválida. Tente novamente!")
} else if (nota >= 90){
    console.log ("conceito A");
} else if(nota >=80){
    console.log ("conceito B");
} else if (nota >=70){
    console.log ("conceito C");
} else if (nota >= 60){
    console.log ("conceito D");
} else if (nota >= 50){
    console.log (" conceito E")
} else if (nota < 50){
    console.log ("conceito F")
}
