// criar uma referencia para receber a lista de todas as teclas do AluraFone e uma outra para capturar o input Digite seu telefone
// O segundo passo é criar o laço de repetição for, que vai percorrer a lista de tecla
// Dentro do for, é necessário que se crie uma referência constante const tecla para que a cada iteração, receba o valor correspondente da tecla listaDeTeclas[indice].

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaDeTeclas.length; indice++ ) {

    const tecla = listaDeTeclas[indice];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value
    }
}