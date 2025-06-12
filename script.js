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
    { 
        nivel: 5, 
        objetivo: "Coloque os blocos na vertical.", 
        flexProperties: { flexDirection: 'column' },
        dica: "Pense em como mudar a direção do fluxo principal"
    },
    { 
        nivel: 6, 
        objetivo: "Inverta a ordem dos blocos.", 
        flexProperties: { flexDirection: 'column-reverse' },
        dica: "Similar ao anterior, mas com a ordem invertida"
    },
    { 
        nivel: 7, 
        objetivo: "Permita que os blocos quebrem linha.", 
        flexProperties: { flexWrap: 'wrap' },
        dica: "Como permitir que os itens fluam para múltiplas linhas quando necessário"
    },
    { 
        nivel: 8, 
        objetivo: "Aumente o espaçamento entre os blocos.", 
        flexProperties: { justifyContent: 'space-evenly' },
        dica: "Uma variação mais uniforme do espaçamento entre itens"
    },
    { 
        nivel: 9, 
        objetivo: "Alinhe os blocos na parte inferior.", 
        flexProperties: { alignItems: 'flex-end' },
        dica: "Como posicionar os itens na parte inferior do container"
    },
    { 
        nivel: 10, 
        objetivo: "Coloque os blocos no centro em coluna.", 
        flexProperties: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
        dica: "Combine mudança de direção com alinhamento central"
    },
    { 
        nivel: 11, 
        objetivo: "Alinhe os blocos no canto direito.", 
        flexProperties: { justifyContent: 'flex-end' },
        dica: "Oposto do que fez no nível 4"
    },
    { 
        nivel: 12, 
        objetivo: "Inverta a direção em linha.", 
        flexProperties: { flexDirection: 'row-reverse' },
        dica: "Similar ao nível 6, mas para o eixo horizontal"
    },
    { 
        nivel: 13, 
        objetivo: "Distribua os blocos uniformemente na horizontal.", 
        flexProperties: { justifyContent: 'space-evenly' },
        dica: "Uma versão mais equilibrada do espaçamento"
    },
    { 
        nivel: 14, 
        objetivo: "Alinhe os blocos ao topo.", 
        flexProperties: { alignItems: 'flex-start' },
        dica: "Oposto do nível 9"
    },
    { 
        nivel: 15, 
        objetivo: "Centralize os blocos apenas horizontalmente.", 
        flexProperties: { justifyContent: 'center' },
        dica: "Apenas no eixo principal"
    },
    { 
        nivel: 16, 
        objetivo: "Permita que os blocos quebrem linha e alinhe ao topo.", 
        flexProperties: { flexWrap: 'wrap', alignItems: 'flex-start' },
        dica: "Junte duas propriedades que já usou antes"
    },
    { 
        nivel: 17, 
        objetivo: "Espalhe os blocos verticalmente.", 
        flexProperties: { flexDirection: 'column', justifyContent: 'space-around' },
        dica: "Adapte uma solução anterior para o eixo vertical"
    },
    { 
        nivel: 18, 
        objetivo: "Alinhe ao final e distribua igualmente.", 
        flexProperties: { justifyContent: 'space-between', alignItems: 'flex-end' },
        dica: "Combine duas técnicas diferentes"
    },
    { 
        nivel: 19, 
        objetivo: "Coloque em coluna e alinhe à direita.", 
        flexProperties: { flexDirection: 'column', alignItems: 'flex-end' },
        dica: "Direção vertical com alinhamento específico"
    },
    { 
        nivel: 20, 
        objetivo: "Ajuste os blocos para preencher o espaço disponível.", 
        flexProperties: { flexGrow: '1' },
        dica: "Como fazer os itens expandirem para ocupar espaço disponível"
    },
    { 
        nivel: 21, 
        objetivo: "Use flex-shrink para diminuir o tamanho dos blocos.", 
        flexProperties: { flexShrink: '1' },
        dica: "Como controlar o encolhimento dos itens"
    },
    { 
        nivel: 22, 
        objetivo: "Aplique flex-basis no tamanho 50px para definir tamanhos iniciais.", 
        flexProperties: { flexBasis: '50px' },
        dica: "Defina um tamanho base antes da distribuição de espaço"
    },
    { 
        nivel: 23, 
        objetivo: "Crie 3 colunas de blocos com espaçamento entre elas usando flexbox.", 
        flexProperties: { 
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        dica: "Combine quebra de linha com tamanhos proporcionais nos itens"
    },
    { 
        nivel: 24, 
        objetivo: "Use align-self para alinhar um bloco específico.", 
        flexProperties: { alignSelf: 'center' },
        dica: "Como sobrescrever o alinhamento para um item específico"
    },
    { 
        nivel: 25, 
        objetivo: "Faça todos os blocos se expandirem igualmente", 
        flexProperties: { 
            target: 'items', // Indica que a propriedade é nos itens
            properties: { flexGrow: '1' } // Verifica flex-grow nos blocos
        },
        dica: "Use uma propriedade que permita que os itens cresçam igualmente"
    },
    { 
        nivel: 26, 
        objetivo: "Coloque um bloco maior que os outros.", 
        flexProperties: { flexGrow: '2' },
        dica: "Faça um item se expandir mais que os outros"
    },
    { 
        nivel: 27, 
        objetivo: "Distribua o espaço igualmente em coluna.", 
        flexProperties: { flexDirection: 'column', justifyContent: 'space-evenly' },
        dica: "Adapte uma técnica de espaçamento para o eixo vertical"
    },
    { 
        nivel: 28, 
        objetivo: "Ajuste os blocos para que se expandam e encolham igualmente.", 
        flexProperties: { flex: '1 1 auto' },
        dica: "Controle completo de crescimento, redução e tamanho base"
    },
    { 
        nivel: 29, 
        objetivo: "Crie um layout responsivo com blocos de tamanho variável.", 
        flexProperties: { flex: '1 1 100px' },
        dica: "Itens que se ajustam mas mantêm um tamanho mínimo"
    },
    { 
        nivel: 30, 
        objetivo: "Aplique todas as propriedades corretamente!", 
        flexProperties: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' },
        dica: "Combine todas as técnicas essenciais em um layout completo"
    }
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

    if (nivel <= 31) {
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

    try {
        // Verifica se é nível que aplica em itens (nível 25)
        const aplicarNosBlocos = desafio.flexProperties && 
                               desafio.flexProperties.target === 'items';

        const propriedades = comando.split(';').filter(p => p.trim());
        
        propriedades.forEach(prop => {
            let [chave, valor] = prop.split(':').map(item => item.trim());
            if (chave && valor) {
                chave = chave.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                
                if (aplicarNosBlocos) {
                    // Aplica em todos os blocos
                    document.querySelectorAll('.bloco').forEach(bloco => {
                        bloco.style[chave] = valor;
                    });
                } else {
                    // Aplica no container
                    blocosContainer.style[chave] = valor;
                }
            }
        });

        if (verificarObjetivo(blocosContainer, desafio)) {
            nivelCompleto = true;
            mostrarFeedback('success', '✅ Correto! Você acertou!', 3000);
            document.getElementById('proximo-nivel').classList.remove('hidden');
        } else {
            mostrarFeedback('info', '⚠️ Comando aplicado, mas não resolveu o nível. Tente outro!', 3000);
        }
    } catch (e) {
        mostrarFeedback('error', '❌ Erro: ' + e.message, 3000);
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
    // Verificação para propriedades em itens (nível 25)
    if (desafio.flexProperties && desafio.flexProperties.target === 'items') {
        const blocos = document.querySelectorAll('.bloco');
        return Array.from(blocos).every(bloco => {
            const estilo = window.getComputedStyle(bloco);
            return estilo.flexGrow === '1' || 
                   estilo.flex === '1' || 
                   estilo.flex === '1 1 0%';
        });
    }

    // Verificação normal para outros níveis
    const estiloComputado = window.getComputedStyle(blocosContainer);
    for (let key in desafio.flexProperties) {
        if (key === 'target' || key === 'properties') continue;
        
        let valorEsperado = desafio.flexProperties[key];
        let valorAplicado = blocosContainer.style[key] || 
                          estiloComputado.getPropertyValue(key.replace(/([A-Z])/g, '-$1').toLowerCase());
        
        if (valorAplicado !== valorEsperado) {
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
        mostrarErro(input, erro, 'Por favor, digite um comando CSS');
        return false;
    }
    
    // Verificar cada propriedade separadamente
    const propriedades = comando.split(';').filter(p => p.trim());
    
    for (const prop of propriedades) {
        if (!prop.includes(':')) {
            mostrarErro(input, erro, `Formato inválido em "${prop}". Use: propriedade: valor`);
            return false;
        }
        
        let [chave, valor] = prop.split(':').map(item => item.trim());
        valor = valor.replace(/;$/, '');
        
        if (!chave || !valor) {
            mostrarErro(input, erro, `Formato inválido em "${prop}". Use: propriedade: valor`);
            return false;
        }
        
        // Converter para kebab-case para validação
        const chaveKebab = chave.replace(/([A-Z])/g, '-$1').toLowerCase();
        const propriedadeValida = Object.keys(propriedadesValidas).find(
            p => p.toLowerCase() === chaveKebab.toLowerCase()
        );
        
        if (!propriedadeValida) {
            mostrarErro(input, erro, `Propriedade "${chave}" inválida para Flexbox`);
            return false;
        }
        
        // Verificar valores específicos
        if (propriedadesValidas[propriedadeValida].length > 0 && 
            !propriedadesValidas[propriedadeValida].includes(valor)) {
            mostrarErro(input, erro, 
                `Valor "${valor}" inválido para ${propriedadeValida}. ` +
                `Valores aceitos: ${propriedadesValidas[propriedadeValida].join(', ')}`);
            return false;
        }
        
        // Validações específicas
        if (propriedadeValida === 'order' && !/^\d+$/.test(valor)) {
            mostrarErro(input, erro, 'O valor de "order" deve ser um número inteiro');
            return false;
        }
        
        if ((propriedadeValida === 'flex-grow' || propriedadeValida === 'flex-shrink') && 
            isNaN(parseFloat(valor))) {
            mostrarErro(input, erro, `O valor de "${propriedadeValida}" deve ser um número`);
            return false;
        }
    }
    
    // Se passou por todas as validações
    input.classList.add('input-valido');
    return true;
}

function mostrarErro(input, elementoErro, mensagem) {
    input.classList.add('input-invalido');
    elementoErro.textContent = mensagem;
    elementoErro.style.display = 'block';
}

document.getElementById('comando').addEventListener('input', function() {
    if (this.value.trim() === '') {
        this.classList.remove('input-invalido', 'input-valido');
        document.getElementById('erro-sintaxe').style.display = 'none';
    } else {
        validarComandoFlexbox(this.value);
    }
});
