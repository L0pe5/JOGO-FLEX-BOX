document.getElementById('comecar').addEventListener('click', iniciarJogo);

let desafios = [
    { nivel: 1, objetivo: "Centralize os blocos.", flexProperties: { justifyContent: 'center', alignItems: 'center' }, exemplo: "justify-content: center;" },
    { nivel: 2, objetivo: "Espalhe os blocos igualmente.", flexProperties: { justifyContent: 'space-around' }, exemplo: "justify-content: space-around;" },
    { nivel: 3, objetivo: "Aproxime os blocos nos extremos.", flexProperties: { justifyContent: 'space-between' }, exemplo: "justify-content: space-between;" },
    { nivel: 4, objetivo: "Alinhe os blocos à esquerda.", flexProperties: { justifyContent: 'flex-start' }, exemplo: "justify-content: flex-start;" },
    { nivel: 5, objetivo: "Coloque os blocos na vertical.", flexProperties: { flexDirection: 'column' }, exemplo: "flex-direction: column;" },
    { nivel: 6, objetivo: "Inverta a ordem dos blocos.", flexProperties: { flexDirection: 'column-reverse' }, exemplo: "flex-direction: column-reverse;" },
    { nivel: 7, objetivo: "Permita que os blocos quebrem linha.", flexProperties: { flexWrap: 'wrap' } },
    { nivel: 8, objetivo: "Aumente o espaçamento entre os blocos.", flexProperties: { justifyContent: 'space-evenly' } },
    { nivel: 9, objetivo: "Alinhe os blocos na parte inferior.", flexProperties: { alignItems: 'flex-end' } },
    { nivel: 10, objetivo: "Coloque os blocos no centro em coluna.", flexProperties: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
    { nivel: 11, objetivo: "Centralize os blocos.", flexProperties: { justifyContent: 'center', alignItems: 'center' } },
    { nivel: 12, objetivo: "Espalhe os blocos igualmente.", flexProperties: { justifyContent: 'space-around' } },
    { nivel: 13, objetivo: "Aproxime os blocos nos extremos.", flexProperties: { justifyContent: 'space-between' } },
    { nivel: 14, objetivo: "Alinhe os blocos à esquerda.", flexProperties: { justifyContent: 'flex-start' } },
    { nivel: 15, objetivo: "Coloque os blocos na vertical.", flexProperties: { flexDirection: 'column' } },
    { nivel: 16, objetivo: "Inverta a ordem dos blocos.", flexProperties: { flexDirection: 'column-reverse' } },
    { nivel: 17, objetivo: "Permita que os blocos quebrem linha.", flexProperties: { flexWrap: 'wrap' } },
    { nivel: 18, objetivo: "Aumente o espaçamento entre os blocos.", flexProperties: { justifyContent: 'space-evenly' } },
    { nivel: 19, objetivo: "Alinhe os blocos na parte inferior.", flexProperties: { alignItems: 'flex-end' } },
    { nivel: 20, objetivo: "Coloque os blocos no centro em coluna.", flexProperties: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
    { nivel: 21, objetivo: "Centralize os blocos.", flexProperties: { justifyContent: 'center', alignItems: 'center' } },
    { nivel: 22, objetivo: "Espalhe os blocos igualmente.", flexProperties: { justifyContent: 'space-around' } },
    { nivel: 23, objetivo: "Aproxime os blocos nos extremos.", flexProperties: { justifyContent: 'space-between' } },
    { nivel: 24, objetivo: "Alinhe os blocos à esquerda.", flexProperties: { justifyContent: 'flex-start' } },
    { nivel: 25, objetivo: "Coloque os blocos na vertical.", flexProperties: { flexDirection: 'column' } },
    { nivel: 26, objetivo: "Inverta a ordem dos blocos.", flexProperties: { flexDirection: 'column-reverse' } },
    { nivel: 27, objetivo: "Permita que os blocos quebrem linha.", flexProperties: { flexWrap: 'wrap' } },
    { nivel: 28, objetivo: "Aumente o espaçamento entre os blocos.", flexProperties: { justifyContent: 'space-evenly' } },
    { nivel: 29, objetivo: "Alinhe os blocos na parte inferior.", flexProperties: { alignItems: 'flex-end' } },
    { nivel: 30, objetivo: "Coloque os blocos no centro em coluna.", flexProperties: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }
];

let nivelAtual = 1;
let nivelCompleto = false;

function iniciarJogo() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    carregarNivel(nivelAtual);
}

function carregarNivel(nivel) {
    nivelCompleto = false;
    let desafio = desafios.find(d => d.nivel === nivel);
    if (!desafio) return;

    document.getElementById('objetivo').textContent = desafio.objetivo;
    document.getElementById('nivel-atual').textContent = `Nível: ${nivel}`;
    
    let blocosContainer = document.getElementById('blocos-container');
    blocosContainer.innerHTML = '';

    // Criando blocos numerados
    for (let i = 0; i < Math.min(nivel + 2, 10); i++) {
        let bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.textContent = i + 1;
        blocosContainer.appendChild(bloco);
    }

    // Resetar estilos
    blocosContainer.style.display = 'flex';
    blocosContainer.style.flexWrap = 'nowrap';
    blocosContainer.style.justifyContent = 'flex-start';
    blocosContainer.style.alignItems = 'stretch';
    blocosContainer.style.flexDirection = 'row';

    // Limpar a caixa de texto e mensagens
    document.getElementById('comando').value = '';
    limparFeedback();

    // Esconder o botão de próximo nível
    document.getElementById('proximo-nivel').classList.add('hidden');

    // Exibir o exemplo de comando para os primeiros níveis
    if (nivel <= 3) {
        document.getElementById('exemplo-comando').style.display = 'block';
        document.getElementById('exemplo-comando').textContent = `Exemplo de comando: ${desafio.exemplo}`;
    } else {
        document.getElementById('exemplo-comando').style.display = 'none';
    }
}

document.getElementById('aplicar-comando').addEventListener('click', aplicarComando);

function aplicarComando() {
    let comando = document.getElementById('comando').value.trim();
    let blocosContainer = document.getElementById('blocos-container');
    let desafio = desafios.find(d => d.nivel === nivelAtual);

    if (!desafio) return;

    limparFeedback();

    try {
        // Aplicar o comando
        let propriedades = comando.split(";");
        propriedades.forEach(prop => {
            let [chave, valor] = prop.split(":");
            if (chave && valor) {
                chave = chave.trim();
                valor = valor.trim();
                
                // Converter propriedades CSS para camelCase
                if (chave.includes('-')) {
                    chave = chave.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                }
                
                blocosContainer.style[chave] = valor;
            }
        });

        // Verificar se o objetivo foi cumprido
        if (verificarObjetivo(blocosContainer, desafio)) {
            nivelCompleto = true;
            mostrarFeedback('success', 'Parabéns! Você acertou!', 3000);
            document.getElementById('proximo-nivel').classList.remove('hidden');
            blocosContainer.classList.add('success-animation');
        } else {
            mostrarFeedback('error', 'O comando não corresponde ao objetivo do nível. Tente novamente!', 3000);
            document.getElementById('proximo-nivel').classList.add('hidden');
        }
    } catch (e) {
        mostrarFeedback('error', 'Erro ao aplicar o comando. Verifique a sintaxe.', 3000);
        console.error(e);
    }
}

document.getElementById('proximo-nivel').addEventListener('click', () => {
    if (!nivelCompleto) {
        mostrarFeedback('error', 'Você precisa completar o nível atual antes de avançar!', 3000);
        return;
    }

    nivelAtual++;
    if (nivelAtual > desafios.length) {
        mostrarFeedback('success', 'Parabéns! Você concluiu todos os desafios.', 5000);
        nivelAtual = 1;
    }
    carregarNivel(nivelAtual);
});

function verificarObjetivo(blocosContainer, desafio) {
    for (let key in desafio.flexProperties) {
        let estiloAplicado = blocosContainer.style[key];
        let estiloEsperado = desafio.flexProperties[key];
        
        if (estiloAplicado !== estiloEsperado) {
            return false;
        }
    }
    return true;
}

function mostrarFeedback(tipo, mensagem, tempo) {
    limparFeedback();
    
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'feedback-mensagem';
    feedbackDiv.textContent = mensagem;
    feedbackDiv.style.padding = '15px';
    feedbackDiv.style.margin = '10px 0';
    feedbackDiv.style.borderRadius = '5px';
    feedbackDiv.style.color = 'white';
    feedbackDiv.style.fontWeight = 'bold';
    feedbackDiv.style.transition = 'opacity 0.5s';
    
    if (tipo === 'success') {
        feedbackDiv.style.backgroundColor = '#2ecc71';
    } else {
        feedbackDiv.style.backgroundColor = '#e74c3c';
    }
    
    document.getElementById('jogo').insertBefore(feedbackDiv, document.getElementById('blocos-container'));
    
    if (tempo) {
        setTimeout(() => {
            feedbackDiv.style.opacity = '0';
            setTimeout(() => feedbackDiv.remove(), 500);
        }, tempo);
    }
}

function limparFeedback() {
    const feedbackExistente = document.getElementById('feedback-mensagem');
    if (feedbackExistente) {
        feedbackExistente.remove();
    }
    document.getElementById('blocos-container').classList.remove('success-animation');
}