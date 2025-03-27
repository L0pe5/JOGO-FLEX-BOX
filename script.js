document.getElementById('comecar').addEventListener('click', iniciarJogo);

let desafios = [
    { 
        nivel: 1, 
        objetivo: "Centralize os blocos.", 
        flexProperties: { justifyContent: 'center', alignItems: 'center' },
        dica: "Use 'justify-content: center;' para alinhar horizontalmente e 'align-items: center;' para alinhar verticalmente.",
        exemplo: "justify-content: center; align-items: center;"
    },
    { 
        nivel: 2, 
        objetivo: "Espalhe os blocos igualmente.", 
        flexProperties: { justifyContent: 'space-around' },
        dica: "Use 'justify-content: space-around;' para distribuir os itens com espaço igual ao redor deles.",
        exemplo: "justify-content: space-around;"
    },
    { 
        nivel: 3, 
        objetivo: "Aproxime os blocos nos extremos.", 
        flexProperties: { justifyContent: 'space-between' },
        dica: "Use 'justify-content: space-between;' para colocar o primeiro item no início e o último no final, com espaço igual entre os outros.",
        exemplo: "justify-content: space-between;"
    },
    { 
        nivel: 4, 
        objetivo: "Alinhe os blocos à esquerda.", 
        flexProperties: { justifyContent: 'flex-start' },
        dica: "Use 'justify-content: flex-start;' para alinhar todos os itens no início do container.",
        exemplo: "justify-content: flex-start;"
    },
    { nivel: 5, objetivo: "Coloque os blocos na vertical.", flexProperties: { flexDirection: 'column' } },
    { nivel: 6, objetivo: "Inverta a ordem dos blocos.", flexProperties: { flexDirection: 'column-reverse' } },
    { nivel: 7, objetivo: "Permita que os blocos quebrem linha.", flexProperties: { flexWrap: 'wrap' } },
    { nivel: 8, objetivo: "Aumente o espaçamento entre os blocos.", flexProperties: { justifyContent: 'space-evenly' } },
    { nivel: 9, objetivo: "Alinhe os blocos na parte inferior.", flexProperties: { alignItems: 'flex-end' } },
    { nivel: 10, objetivo: "Coloque os blocos no centro em coluna.", flexProperties: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
    { nivel: 11, objetivo: "Alinhe os blocos no canto direito.", flexProperties: { justifyContent: 'flex-end' } },
    { nivel: 12, objetivo: "Inverta a direção em linha.", flexProperties: { flexDirection: 'row-reverse' } },
    { nivel: 13, objetivo: "Distribua os blocos uniformemente na horizontal.", flexProperties: { justifyContent: 'space-evenly' } },
    { nivel: 14, objetivo: "Alinhe os blocos ao topo.", flexProperties: { alignItems: 'flex-start' } },
    { nivel: 15, objetivo: "Centralize os blocos apenas horizontalmente.", flexProperties: { justifyContent: 'center' } },
    { nivel: 16, objetivo: "Permita que os blocos quebrem linha e alinhe ao topo.", flexProperties: { flexWrap: 'wrap', alignItems: 'flex-start' } },
    { nivel: 17, objetivo: "Espalhe os blocos verticalmente.", flexProperties: { flexDirection: 'column', justifyContent: 'space-around' } },
    { nivel: 18, objetivo: "Alinhe ao final e distribua igualmente.", flexProperties: { justifyContent: 'space-between', alignItems: 'flex-end' } },
    { nivel: 19, objetivo: "Coloque em coluna e alinhe à direita.", flexProperties: { flexDirection: 'column', alignItems: 'flex-end' } },
    { nivel: 20, objetivo: "Ajuste os blocos para preencher o espaço disponível.", flexProperties: { flexGrow: '1' } },
    { nivel: 21, objetivo: "Use flex-shrink para diminuir o tamanho dos blocos.", flexProperties: { flexShrink: '1' } },
    { nivel: 22, objetivo: "Aplique flex-basis para definir tamanhos iniciais.", flexProperties: { flexBasis: '50px' } },
    { nivel: 23, objetivo: "Altere a ordem dos blocos.", flexProperties: { order: '-1' } },
    { nivel: 24, objetivo: "Use align-self para alinhar um bloco específico.", flexProperties: { alignSelf: 'center' } },
    { nivel: 25, objetivo: "Ajuste o tamanho dos blocos proporcionalmente.", flexProperties: { flex: '1' } },
    { nivel: 26, objetivo: "Coloque um bloco maior que os outros.", flexProperties: { flexGrow: '2' } },
    { nivel: 27, objetivo: "Distribua o espaço igualmente em coluna.", flexProperties: { flexDirection: 'column', justifyContent: 'space-evenly' } },
    { nivel: 28, objetivo: "Ajuste os blocos para que se expandam e encolham igualmente.", flexProperties: { flex: '1 1 auto' } },
    { nivel: 29, objetivo: "Crie um layout responsivo com blocos de tamanho variável.", flexProperties: { flex: '1 1 100px' } },
    { nivel: 30, objetivo: "Aplique todas as propriedades corretamente!", flexProperties: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' } }
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

    // Configurar dicas para os primeiros níveis
    const dicaContainer = document.getElementById('dica-container');
    const textoDica = document.getElementById('texto-dica');
    const toggleDicaBtn = document.getElementById('toggle-dica');

    if (nivel <= 4) {
        textoDica.textContent = desafio.dica;
        toggleDicaBtn.classList.remove('hidden');
        dicaContainer.classList.add('hidden');
        
        // Configurar o botão de toggle
        toggleDicaBtn.onclick = function() {
            if (dicaContainer.classList.contains('hidden')) {
                dicaContainer.classList.remove('hidden');
                toggleDicaBtn.textContent = 'Ocultar Dica';
            } else {
                dicaContainer.classList.add('hidden');
                toggleDicaBtn.textContent = 'Mostrar Dica';
            }
        };
    } else {
        dicaContainer.classList.add('hidden');
        toggleDicaBtn.classList.add('hidden');
    }

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
    const comando = document.getElementById('comando').value.trim();
    const blocosContainer = document.getElementById('blocos-container');
    const desafio = desafios.find(d => d.nivel === nivelAtual);

    if (!desafio) return;

    limparFeedback();

    // Validar o comando antes de aplicar
    if (!validarComandoFlexbox(comando)) {
        return;
    }

    try {
        // Aplicar o comando
        const propriedades = comando.split(';').filter(Boolean);
        
        propriedades.forEach(prop => {
            const [chave, valor] = prop.split(':').map(item => item.trim());
            if (chave && valor) {
                // Converter para camelCase se necessário
                let chaveCamel = chave;
                if (chave.includes('-')) {
                    chaveCamel = chave.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                }
                
                // Aplicar ao container ou aos itens conforme a propriedade
                if (chaveCamel.startsWith('flex') || chaveCamel === 'order' || chaveCamel === 'alignSelf') {
                    // Aplicar a todos os blocos (poderia ser modificado para seleção específica)
                    document.querySelectorAll('.bloco').forEach(bloco => {
                        bloco.style[chaveCamel] = valor;
                    });
                } else {
                    // Aplicar ao container
                    blocosContainer.style[chaveCamel] = valor;
                }
            }
        });

        // Verificar se o objetivo foi cumprido
        if (verificarObjetivo(blocosContainer, desafio)) {
            nivelCompleto = true;
            mostrarFeedback('success', 'Parabéns! Você acertou!', 3000);
            document.getElementById('proximo-nivel').classList.remove('hidden');
            blocosContainer.classList.add('success-animation');
        } else {
            mostrarFeedback('info', 'Comando válido, mas não resolve o nível. Tente outro!', 3000);
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

// Lista de propriedades Flexbox válidas
const propriedadesValidas = {
    // Container
    'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
    'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
    'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
    'flex-flow': [], // Combinação de direction e wrap
    'gap': [], // Valores em px, em, etc.
    
    // Itens
    'order': [], // Números inteiros
    'flex-grow': [], // Números
    'flex-shrink': [], // Números
    'flex-basis': [], // Tamanhos como 'auto', 'content', '100px', '50%'
    'flex': [], // Shorthand para grow, shrink, basis
    'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
};

function validarComandoFlexbox(comando) {
    const input = document.getElementById('comando');
    const erro = document.getElementById('erro-sintaxe');
    
    // Resetar estados
    input.classList.remove('input-invalido', 'input-valido');
    erro.style.display = 'none';
    
    // Verificar se o comando está vazio
    if (!comando.trim()) {
        input.classList.add('input-invalido');
        erro.textContent = 'Por favor, digite um comando CSS';
        erro.style.display = 'block';
        return false;
    }
    
    // Verificar formato básico (deve conter :)
    if (!comando.includes(':')) {
        input.classList.add('input-invalido');
        erro.textContent = 'Formato inválido. Use: propriedade: valor;';
        erro.style.display = 'block';
        return false;
    }
    
    // Extrair propriedade e valor
    const [prop, ...valores] = comando.split(':');
    const propriedade = prop.trim().toLowerCase();
    const valor = valores.join(':').replace(/;$/, '').trim();
    
    // Verificar se a propriedade é válida
    if (!propriedadesValidas.hasOwnProperty(propriedade)) {
        // Tentar converter camelCase para kebab-case
        const propriedadeKebab = propriedade.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        
        if (!propriedadesValidas.hasOwnProperty(propriedadeKebab)) {
            input.classList.add('input-invalido');
            erro.textContent = `Propriedade "${propriedade}" não é válida para Flexbox`;
            erro.style.display = 'block';
            return false;
        }
    }
    
    // Verificar valores para propriedades com valores específicos
    const propriedadeReal = propriedadesValidas.hasOwnProperty(propriedade) ? propriedade : propriedadeKebab;
    
    if (propriedadesValidas[propriedadeReal].length > 0 && 
        !propriedadesValidas[propriedadeReal].includes(valor)) {
        input.classList.add('input-invalido');
        erro.textContent = `Valor "${valor}" inválido para ${propriedadeReal}. Valores aceitos: ${propriedadesValidas[propriedadeReal].join(', ')}`;
        erro.style.display = 'block';
        return false;
    }
    
    // Validações específicas para certas propriedades
    if (propriedadeReal === 'order' && isNaN(parseInt(valor))) {
        input.classList.add('input-invalido');
        erro.textContent = 'O valor de "order" deve ser um número inteiro';
        erro.style.display = 'block';
        return false;
    }
    
    if ((propriedadeReal === 'flex-grow' || propriedadeReal === 'flex-shrink') && isNaN(parseFloat(valor))) {
        input.classList.add('input-invalido');
        erro.textContent = `O valor de "${propriedadeReal}" deve ser um número`;
        erro.style.display = 'block';
        return false;
    }
    
    // Se passou por todas as validações
    input.classList.add('input-valido');
    return true;
}

document.getElementById('comando').addEventListener('input', function() {
    if (this.value.trim() === '') {
        this.classList.remove('input-invalido', 'input-valido');
        document.getElementById('erro-sintaxe').style.display = 'none';
    } else {
        validarComandoFlexbox(this.value);
    }
});