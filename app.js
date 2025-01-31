// Selecionar elementos da página
const addAmigo = document.getElementById('amigo'); // Campo de texto para adicionar nomes
const listaAmigos = document.getElementById('listaAmigos'); // Lista de nomes adicionados
const resultado = document.getElementById('resultado'); // Elemento para exibir o resultado do sorteio

// Array para armazenar os nomes digitados
let nomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const nome = addAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Valida se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Validar se o nome já foi adicionado
    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array e à lista na tela
    nomes.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    addAmigo.value = '';
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome à lista
    nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}
