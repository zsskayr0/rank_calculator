// Obtém a referência para o campo de entrada e botão de redefinição
const inputField = document.getElementById('temperature');
const resetButton = document.getElementById('reset-button');

// Obtém todas as tags <p> com a classe 'statnumber'
const statNumberElements = document.querySelectorAll('.statnumber');

// Array para armazenar os valores das estatísticas do usuário
const valoresUsuario = {};

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

        const statId = statNumberElements[currentStatIndex].parentElement.id;
        valoresUsuario[statId] = inputValue; // Atualiza o valor na array do usuário

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
    statNumberElements.forEach((element) => {
        element.textContent = '0'; // Redefine os valores das estatísticas para 0
    });
    valoresUsuario = {}; // Limpa os valores da array do usuário
});
