// Obtém todas as tags <input> com a classe 'statnumber'
const statNumberInputs = document.querySelectorAll('.statnumber');
const rankElement = document.querySelector('#rankdisplay'); // Corrected ID
const totalPointsElement = document.querySelector('#totalpoints'); // Element to display total points

// Adiciona evento de escuta para cada input de estatística
statNumberInputs.forEach((inputElement) => {
    inputElement.addEventListener("input", function() {
        // Limpa qualquer caractere que não seja número
        this.value = this.value.replace(/[^\d]/g, '');

        // Limita a entrada a 3 caracteres
        if (this.value.length > 3) {
            this.value = this.value.slice(0, 3);
        }

        // Recalcula a média, o total de pontos e atualiza o rank
        const average = calculateAverage();
        const totalPoints = calculateTotalPoints();
        const rank = calculateRank(average);
        updateRank(rank, average, totalPoints);

        // Calcula e atualiza o total de Alma
        const almaInput = document.querySelector('#Alma input');
        const totalAlma = calculateTotalAlma(parseInt(almaInput.value));
        updateTotalAlma(totalAlma);

        // Calcula e atualiza o total de Mana
        const manaInput = document.querySelector('#Mana input');
        const totalMana = calculateTotalMana(parseInt(manaInput.value));
        updateTotalMana(totalMana);
    });
});

// Função para calcular o total de Alma
function calculateTotalAlma(xp) {
    if (xp >= 480) {
        return 200 * xp;
    } else {
        return 150 * xp;
    }
}

// Função para atualizar o total de Alma no HTML
function updateTotalAlma(totalAlma) {
    const almaDiv = document.querySelector('#Alma');
    let almaH2 = almaDiv.querySelector('.total-value');
    if (!almaH2) {
        almaH2 = document.createElement('h2');
        almaH2.classList.add('total-value');
        almaDiv.insertBefore(almaH2, almaDiv.querySelector('input'));
    }
    almaH2.textContent = `${totalAlma} HP`;
}

// Função para calcular o total de Mana
function calculateTotalMana(xp) {
    if (xp >= 480) {
        return 200 * xp;
    } else {
        return 150 * xp;
    }
}

// Função para atualizar o total de Mana no HTML
function updateTotalMana(totalMana) {
    const manaDiv = document.querySelector('#Mana');
    let manaH2 = manaDiv.querySelector('.total-value');
    if (!manaH2) {
        manaH2 = document.createElement('h2');
        manaH2.classList.add('total-value');
        manaDiv.insertBefore(manaH2, manaDiv.querySelector('input'));
    }
    manaH2.textContent = `${totalMana} MP`;
}

function calculateAverage() {
    let sum = 0;
    for (let i = 0; i < statNumberInputs.length; i++) {
        const value = parseInt(statNumberInputs[i].value);
        sum += value;
    }
    const average = sum / statNumberInputs.length;
    return average;
}

function calculateTotalPoints() {
    let total = 0;
    for (let i = 0; i < statNumberInputs.length; i++) {
        const value = parseInt(statNumberInputs[i].value);
        total += value;
    }
    return total;
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

function updateRank(rank, average, totalPoints) {
    rankElement.textContent = `Rank ${rank} - Total de ${totalPoints} - Média de ${average.toFixed(2)}`;
}


