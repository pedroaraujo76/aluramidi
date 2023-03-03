function tocaSom (seletorAudio) { // Colocando parâmetro na função
    const elemento = document.querySelector(seletorAudio); // Chamando o parâmetro

    if(elemento != null && elemento.localName === 'audio') { // Se for diferente de nulo e tag name for igual a audio 
             elemento.play(); // vai tocar o som
    } else {
        console.log('Elemento não encontrado ou seletor inválido!'); // Se tagname não for encontrada ou inválida.
    }   
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); // Variável recebendo todas as teclas

// let contador = 0; // Armazenando valor do indice para o while

// Enquanto
for (let contador = 0; contador < ListaDeTeclas.length; contador = contador++) { // Para: contador recebe 0, for menor que listateclas, contador recebe + 1, faça:

    const tecla = ListaDeTeclas[contador]; // Criando variavel com a lista de teclas
    const instrumento = tecla.classList[1]; // Criando variavel para cada tecla com a classe de lista
    const idAudio = `#som_${instrumento}`; // Colocando o id dinâmico para tocar o som corretamente com template string

    // console.log(idAudio);

    tecla.onclick = function() { // Chamando a variavel contador, quando clicar receberá, FUNÇÃO ANÔNIMA
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento) { // colocando a função que será ativa quando dar enter nos números e o parâmetro chamado evento para identificar qual tecla foi usada
        
        if (evento.code === 'Space' || evento.code === 'Enter') { // se a tecla for igual a espaço ou enter, então
            
            tecla.classList.add('ativa'); // Acessando uma lista de classes que tem na variavel tecla e adicionando a classe ativa, que está no css para ficar vermelho quando dar enter ou clickar.

        }
    }

    tecla.onkeyup = function () { // colocando a função que será ativa quando a tecla do enter subir

        tecla.classList.remove('ativa') // Acessando uma lista de classes que tem na variavel tecla e REMOVENDO a classe ativa, que está no css para ficar vermelho quando dar enter ou clickar.

    }

    contador = contador + 1; // contador recebe + 1

    // console.log(contador);
}
