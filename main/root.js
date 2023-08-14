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
    });
});

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
