const btnEmpty = document.getElementById('btn_empty');
const btnFull = document.getElementById('btn_full');
const btnNice = document.getElementById('btn_nice');
const containerMessage = document.getElementById('containerMessage');
const coffeImage = document.getElementById('coffe01'); // Seleciona a imagem da caneca

// Array com os caminhos das imagens da animação
const imagensEnchimento = [
    'img/coffe_01.png', // Caneca vazia
    'img/coffe_02.png', // Caneca um pouco cheia
    'img/coffe_03.png', // Caneca mais cheia
    'img/coffe_04.png', // Caneca ainda mais cheia
    'img/coffe_05.png', // Caneca quase cheia
    'img/coffe_06.png', // Caneca quase cheia
    'img/coffe_07.png', // Caneca quase cheia
    'img/coffe_08.png', // Caneca quase cheia
    'img/coffe_09.png', // Caneca quase cheia
    'img/coffe_10.png'  // Caneca cheia
];

// Função para criar a DIV com uma mensagem
function criarMensagem(texto) {
    // Remove a DIV existente, se houver
    const mensagemDiv = document.getElementById('message-div');
    if (mensagemDiv) {
        mensagemDiv.remove();
    }

    // Cria uma nova DIV
    const novaDiv = document.createElement('div');
    novaDiv.id = 'message-div'; // Define o ID da DIV
    novaDiv.innerText = texto; // Adiciona o texto
    containerMessage.appendChild(novaDiv); // Insere a DIV no container
}

// Função para animar o enchimento da caneca
function animarEnchimento() {
    let indice = 0; // Índice para controlar a imagem atual
    const intervalo = 125; // Intervalo de 1 segundo (1000ms)

    // Inicia a animação
    const animacao = setInterval(() => {
        if (indice < imagensEnchimento.length) {
            coffeImage.src = imagensEnchimento[indice]; // Atualiza a imagem
            indice++; // Avança para a próxima imagem
        } else {
            clearInterval(animacao); // Para a animação quando todas as imagens forem exibidas
        }
    }, intervalo);
}

// Botão "empty"
btnEmpty.onclick = function() {
    console.log('botão empty funciona');
    criarMensagem('FILLING COFFEE!'); // Cria a mensagem do botão "empty"
    animarEnchimento(); // Inicia a animação de enchimento
};

// Botão "full"
btnFull.onclick = function() {
    console.log('botão full funciona');
    criarMensagem('DRINK COFFEE!'); // Cria a mensagem do botão "full"
};

// Botão "nice"
btnNice.onclick = function() {
    console.log('botão nice funciona');
    criarMensagem('THANKS FOR THE COFFEE!'); // Cria a mensagem do botão "nice"
};
