const texto = "Oi! Eu sou o Danniel";
const atraso = 200;
const textoElemento = document.querySelector(".apresentacao__conteudo__titulo");

const palavras = texto.split(" ");
let contadorDeLetras = 0;
let palavraAtual = 0;
let palavraFinalizada = false;

function escreverTexto() {
    if (palavraAtual < palavras.length) {
        if (contadorDeLetras < palavras[palavraAtual].length) {
            if (palavraAtual === palavras.length - 1) { // Última palavra
                textoElemento.innerHTML += `<span class="titulo-destaque">${palavras[palavraAtual].charAt(contadorDeLetras)}</span>`;
            } else {
                textoElemento.innerHTML += palavras[palavraAtual].charAt(contadorDeLetras);
            }
            contadorDeLetras++;
            setTimeout(escreverTexto, atraso);
        } else {
            textoElemento.innerHTML += " ";
            palavraAtual++;
            contadorDeLetras = 0;
            setTimeout(escreverTexto, atraso);
        }
    }
}

escreverTexto();