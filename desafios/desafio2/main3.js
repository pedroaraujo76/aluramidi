// criar uma referencia para receber a lista de todas as teclas do AluraFone e uma outra para capturar o input Digite seu telefone
// O segundo passo é criar o laço de repetição for, que vai percorrer a lista de tecla
// Dentro do for, é necessário que se crie uma referência constante const tecla para que a cada iteração, receba o valor correspondente da tecla listaDeTeclas[indice].
// Após isto, adicione no onclick uma função anônima que receberá o valor do campo Digite seu telefone inputTel.value, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada tecla.value, ficando inputTel.value = inputTel.value + tecla.value.

const numerosTeclas = document.querySelectorAll('.numbers');
const numerosDigitados = document.querySelector('#tel');

console.log(numerosTeclas);
console.log(numerosDigitados);

for(numerosRecebidos = 0; numerosRecebidos < numerosTeclas.length; numerosRecebidos++) {

    const NumeroAtual = numerosTeclas[numerosRecebidos];

    numerosTeclas[numerosRecebidos].onclick = function () {
        numerosDigitados.value = numerosDigitados.value + NumeroAtual.value
    
    NumeroAtual.onkeydown = function () {
            NumeroAtual.classList.add('ativa');
    }

    NumeroAtual.onkeyup = function () {
        NumeroAtual.classList.remove('ativa');
    }
    }
}
