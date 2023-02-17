/*  

    Crie um programa que receba 2 números, calcule a soma deles e 
    em seguida verifique se essa soma é maior que 100. 
    a) Caso seja maior que 100, retorne "Esse número é maior que 100"; 
    b) Caso seja igual a 100, retorne "Bingo! Deu 100!";
    c) Caso seja menor que 100, retorne "Esse número é menor que 100". */

let numeroUm = 5;
    numeroDois = 8;
    soma = numeroUm + numeroDois;

if (soma>100){
    console.log("Esse número é maior que 100");
} else if (soma==100){
    console.log("Bingo! Deu 100!");
} else {
    console.log("Esse número é menor que 100.")
}
