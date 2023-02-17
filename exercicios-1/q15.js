/* 15. tilize if/else para escrever um código que define três constantes com os valores 
dos três ângulos internos de um triângulo. O programa deve retornar true se os ângulos 
representarem os ângulos de um triângulo e false, caso contrário.

Conteúdos abordados: operadores aritméticos, estrutura Condicional

    Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

    Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
    Um ângulo será considerado inválido se não tiver um valor positivo.
*/
const a = 50;
const b = 50;
const c = 80;

if((a+b+c)==180){
    console.log(true)
} else{
    console.log(false)
}
