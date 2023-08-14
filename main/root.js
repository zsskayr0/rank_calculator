// Obtém a referência para o campo de entrada e botão de redefinição
const inputField = document.getElementById('inputText');
const resetButton = document.getElementById('reset-button');

// Obtém todas as tags <p> com a classe 'statnumber'
const statNumberElements = document.querySelectorAll('.statnumber');

// Array para armazenar os valores das estatísticas do usuário
let valoresUsuario = [0, 0, 0, 0, 0, 0];

// Função para imprimir a array completa
function imprimirArray() {
    console.log(valoresUsuario);
}

let currentStatIndex = 0; // Índice da estatística atualmente sendo editada

// Carrega os valores das estatísticas do armazenamento local ao carregar a página
window.addEventListener('load', () => {
    for (let i = 0; i < statNumberElements.length; i++) {
        const savedValue = localStorage.getItem(`stat_${i}`);
        if (savedValue !== null) {
            statNumberElements[i].textContent = savedValue;
            valoresUsuario[`stat_${i}`] = parseInt(savedValue); // Adiciona ao objeto valoresUsuario
        }
    }
});

// Adiciona um evento de escuta para a tecla "Enter"
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita a ação padrão do "Enter" (submissão do formulário)

        const inputValue = parseInt(inputField.value) || 0; // Obtém o valor numérico ou 0 se não for um número
        statNumberElements[currentStatIndex].textContent = inputValue; // Atualiza o conteúdo do elemento <p> com o valor da estatística
        localStorage.setItem(`stat_${currentStatIndex}`, inputValue); // Salva o valor no armazenamento local

        valoresUsuario[currentStatIndex] = inputValue; // Atualiza o valor na array do usuário

        imprimirArray(); // Chama a função para imprimir a array completa

        currentStatIndex = (currentStatIndex + 1) % statNumberElements.length; // Avança para a próxima estatística ou volta à primeira
        inputField.value = ''; // Limpa o campo de entrada

        // Define o foco novamente no campo de entrada
        inputField.focus();
    }
});

// Adiciona um evento de escuta para o botão de redefinição
resetButton.addEventListener('click', () => {
    localStorage.clear(); // Limpa todos os valores salvos no armazenamento local
    statNumberElements.forEach((element, index) => {
        element.textContent = '0'; // Redefine os valores das estatísticas para 0
        valoresUsuario[`stat_${index}`] = 0; // Atualiza o valor na array do usuário
    });
});

const inputElement = document.getElementById("inputText");
const statContainer = document.getElementById("stat-container");

inputElement.addEventListener("input", function() {
    // Limpa qualquer caractere que não seja número
    this.value = this.value.replace(/[^\d]/g, '');

    // Limita a entrada a 3 caracteres
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }

    // Calcula o rank e exibe
    const average = calculateAverage(this.value);
    const rank = calculateRank(average);
    updateRank(rank);
});

function calculateAverage(value) {
    const numericValue = parseInt(value);
    const statsCount = 6; // Número de stats
    return numericValue / statsCount;
}

function calculateRank(average) {
    if (average >= 0 && average < 87) {
        return "E";
    } else if (average < 174) {
        return "D";
    } else if (average < 261) {
        return "C";
    } else if (average < 348) {
        return "B";
    } else if (average < 435) {
        return "A";
    } else if (average < 522) {
        return "S";
    } else if (average < 609) {
        return "SS";
    } else if (average < 696) {
        return "SSS";
    } else {
        return "Z";
    }
}

function updateRank(rank) {
    const rankElement = document.getElementById("rank");
    rankElement.textContent = `Rank: ${rank}`;
}
