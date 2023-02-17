/* 13. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

Conteúdos abordados: Tabela verdade, Estrutura Condicional

Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C 
Porcentagem >= 60 -> D 
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100.*/

const nota = 30;

let conceito = " ";
if (nota>=90){
    conceito = "A";
} else if(nota>=80){
    conceito = "B";
} else if(nota>=70){
    conceito = "C";
} else if(nota>=60){
    conceito = "D";
} else if(nota>=50){
    conceito = "E"
} else if(nota<50){
    conceito = "F"
}

console.log(conceito)