/* Conteúdos abordados: constantes e variáveis

    Crie uma constante chamada meuNome e atribua a ela o seu nome.
    Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
    Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
    Crie uma variável let chamada profissão e atribua a ela a sua profissão.
*/

const meuNome = "Maria Rikele dos Santos Felix";
const cidadeNatal = "Girau do Ponciano";
const anoDeNascimento = 2002;
let profissao = "desempregada";


/* Agora utilizaremos o console.log:

    utilize o console.log para imprimir as constantes e variáveis que você criou
    altere o valor da variável profissão para desenvolvedora e faça um console.log e verifique o que acontece.
    altere o valor da constante cidadeNatal e faça um console.log nela, verifique o que ocorre. Você consegue explicar, com suas palavras, o motivo do erro?
*/

console.log(meuNome,cidadeNatal,anoDeNascimento,profissao);

profissao = "desenvolvedora";
console.log(profissao);

cidadeNatal = "Arapiraca";
console.log(profissao);

/* O erro ocorreu porque constantes tem valores imutáveis, logo não podem ser alterados posteriormente após serem declarados */