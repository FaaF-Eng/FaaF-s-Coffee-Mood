const btnEmpty = document.getElementById('btn_empty');
const btnFull = document.getElementById('btn_full');
const btnNice = document.getElementById('btn_nice');
const containerMessage = document.getElementById('containerMessage');

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

// Botão "empty"
btnEmpty.onclick = function() {
    console.log('botão empty funciona');
    criarMensagem('FILLING COFFE!'); // Cria a mensagem do botão "empty"
};

// Botão "full"
btnFull.onclick = function() {
    console.log('botão full funciona');
    criarMensagem('DRINK COFFE!'); // Cria a mensagem do botão "full"
};

// Botão "nice"
btnNice.onclick = function() {
    console.log('botão nice funciona');
    criarMensagem('THANKS FOR THE COFFE!'); // Cria a mensagem do botão "nice"
};