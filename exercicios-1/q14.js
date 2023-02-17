/* 14. Utilize if/else para escrever um código que se inicie com duas constantes declaradas: uma para o custo de um produto e outra para o seu valor de venda. 
A partir desses valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) 
a empresa terá ao vender mil desses produtos.

Conteúdos abordados: Estrutura Condicional, operadores aritméticos

    Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de entrada seja menor que zero.
*/

const custo = 10;
const valor = 20;
let retorno = null;
if (custo<0 || valor<0){
    retorno = "Digite um valor válido"
} else {
    retorno = (20*1000)-(10*1000)
}
console.log(retorno);
