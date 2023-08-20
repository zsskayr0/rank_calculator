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
        const averageMain = calculateAverageMain();
        const averageAll = calculateAverageAll();
        const totalPoints = calculateTotalPoints();
        const rankMain = calculateRank(averageMain);
        const rankAll = calculateRank(averageAll);
        updateRank(rankMain, averageMain, totalPoints, rankAll, averageAll);

        // Calcula e atualiza o total de Alma
        const almaInput = document.querySelector('#Alma input');
        const totalAlma = calculateTotalAlma(parseInt(almaInput.value));
        updateTotalAlma(totalAlma);

        // Calcula e atualiza o total de Mana
        const manaInput = document.querySelector('#Mana input');
        const totalMana = calculateTotalMana(parseInt(manaInput.value));
        updateTotalMana(totalMana);

        // Calcula e atualiza o total de Força
        const forcaInput = document.querySelector('#Forca input');
        const totalForca = calculateTotalForca(parseInt(forcaInput.value));
        updateTotalForca(totalForca);

        // Calcula e atualiza o total de Corrida
        const corridaInput = document.querySelector('#Corrida input');
        const totalCorrida = calculateTotalCorrida(parseInt(corridaInput.value));
        updateTotalCorrida(totalCorrida);

        // Calcula e atualiza o total de Mente
        const menteInput = document.querySelector('#Mente input');
        const totalMente = calculateTotalMente(parseInt(menteInput.value));
        updateTotalMente(totalMente);

        // Calcula e atualiza o total de Concentração
        const concentracaoInput = document.querySelector('#Concentracao input');
        const totalConcentracao = calculateTotalConcentracao(parseInt(concentracaoInput.value));
        updateTotalConcentracao(totalConcentracao);

        // Calcula e atualiza o total de Constituição
        const constituicaoInput = document.querySelector('#Constituicao input');
        const totalConstituicao = calculateTotalConstituicao(
            parseInt(constituicaoInput.value),
            parseInt(almaInput.value),
            parseInt(forcaInput.value)
        );
        updateTotalConstituicao(totalConstituicao);
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

// Função para calcular o total de Força
function calculateTotalForca(xp) {
    let totalForca = 0;

    if (xp <= 80) {
        totalForca = (xp * 6);
    } else if (xp <= 160) {
        totalForca = (xp * 6);
    } else if (xp <= 240) {
        totalForca = (xp * 8);
    } else if (xp <= 320) {
        totalForca = (xp * 8);
    } else if (xp <= 400) {
        totalForca = (xp * 10);
    } else if (xp <= 480) {
        totalForca = (xp * 12);
    } else if (xp <= 560) {
        totalForca = (xp * 14);
    } else if (xp <= 640) {
        totalForca = (xp * 14);
    } else if (xp <= 740) {
        totalForca = (xp * 16);
    } else if (xp <= 840) {
        totalForca = (xp * 16);
    } else {
        totalForca = (xp * 64);
    }

    return parseFloat(totalForca.toFixed(1));
}

// Função para atualizar o total de Força no HTML
function updateTotalForca(totalForca) {
    const forcaDiv = document.querySelector('#Forca');
    let forcaH2 = forcaDiv.querySelector('.total-value');
    if (!forcaH2) {
        forcaH2 = document.createElement('h2');
        forcaH2.classList.add('total-value');
        const inputElement = forcaDiv.querySelector('input');
        forcaDiv.insertBefore(forcaH2, inputElement);
    }
    forcaH2.textContent = `${totalForca} N`;
}

// Função para calcular o total de Corrida
function calculateTotalCorrida(xp) {
    let totalCorrida = 0;

    if (xp <= 80) {
        totalCorrida = (xp * 1.225) + 22;
    } else if (xp <= 160) {
        totalCorrida = (((xp - 80) * 0.5) + 120);
    } else if (xp <= 240) {
        totalCorrida = (((xp - 160) * 0.5) + 160);
    } else if (xp <= 320) {
        totalCorrida = (((xp - 240) * 1.25) + 200);
    } else if (xp <= 400) {
        totalCorrida = (((xp - 320) * 1.5) + 300);
    } else if (xp <= 480) {
        totalCorrida = (((xp - 400) * 2.25) + 420);
    } else if (xp <= 560) {
        totalCorrida = (((xp - 480) * 3) + 600);
    } else if (xp <= 640) {
        totalCorrida = (((xp - 560) * 4.925) + 840);
    } else if (xp <= 740) {
        totalCorrida = (((xp - 640) * 11.66) + 1234);
    } else if (xp <= 840) {
        totalCorrida = (((xp - 740) * 13) + 2400);
    } else {
        totalCorrida = (((xp - 840) * 13) + 3700);
    }

    return parseFloat(totalCorrida.toFixed(1));
}

// Função para atualizar o total de Corrida no HTML
function updateTotalCorrida(totalCorrida) {
    const corridaDiv = document.querySelector('#Corrida');
    let corridaH2 = corridaDiv.querySelector('.total-value');
    if (!corridaH2) {
        corridaH2 = document.createElement('h2');
        corridaH2.classList.add('total-value');
        const inputElement = corridaDiv.querySelector('input');
        corridaDiv.insertBefore(corridaH2, inputElement); // Insert before the input element
    }
    corridaH2.textContent = `${totalCorrida} Km/h`;
}

// Função para calcular o total de Mente
function calculateTotalMente(xp) {
    // Substitua a lógica abaixo pelo cálculo real do total de Mente com base na experiência (xp)
    if (xp >= 500) {
        return 4.5 * xp;
    } else {
        return 6 * xp;
    }
}

// Função para atualizar o total de Mente no HTML
function updateTotalMente(totalMente) {
    const menteDiv = document.querySelector('#Mente');
    let menteH2 = menteDiv.querySelector('.total-value');
    if (!menteH2) {
        menteH2 = document.createElement('h2');
        menteH2.classList.add('total-value');
        menteDiv.insertBefore(menteH2, menteDiv.querySelector('input'));
    }
    menteH2.textContent = `${totalMente} Mi`;
}

// Função para calcular o total de Concentração
function calculateTotalConcentracao(xp) {
    let totalConcentracao = 0;

    if (xp <= 80) {
        totalConcentracao = (xp * 1.2);
    } else if (xp <= 160) {
        totalConcentracao = (xp * 1.2);
    } else if (xp <= 240) {
        totalConcentracao = (xp * 1.4);
    } else if (xp <= 320) {
        totalConcentracao = (xp * 1.4);
    } else if (xp <= 400) {
        totalConcentracao = (xp * 1.6);
    } else if (xp <= 480) {
        totalConcentracao = (xp * 1.6);
    } else if (xp <= 560) {
        totalConcentracao = (xp * 1.8);
    } else if (xp <= 640) {
        totalConcentracao = (xp * 1.8);
    } else if (xp <= 740) {
        totalConcentracao = (xp * 2);
    } else if (xp <= 840) {
        totalConcentracao = (xp * 2);
    } else {
        totalConcentracao = (xp * 2.4);
    }

    return parseFloat(totalConcentracao.toFixed(1));
}

// Função para atualizar o total de Concentração no HTML
function updateTotalConcentracao(totalConcentracao) {
    const concentracaoDiv = document.querySelector('#Concentracao');
    let concentracaoH2 = concentracaoDiv.querySelector('.total-value');
    if (!concentracaoH2) {
        concentracaoH2 = document.createElement('h2');
        concentracaoH2.classList.add('total-value');
        concentracaoDiv.insertBefore(concentracaoH2, concentracaoDiv.querySelector('input'));
    }
    concentracaoH2.textContent = `${totalConcentracao} CT`; // Alterado "Mi" para "Concentração"
}

// Função para calcular o total de Constituição
function calculateTotalConstituicao(constituicao, pontosAlma, pontosForca) {
    const totalConstituicao = constituição + (pontosAlma + pontosForca) / 2.285;
    return parseFloat(totalConstituicao.toFixed(1));
}

// Função para atualizar o total de Constituição no HTML
function updateTotalConstituicao(totalConstituicao) {
    const constituicaoDiv = document.querySelector('#Constituicao');
    let constituicaoH2 = constituicaoDiv.querySelector('.total-value');
    if (!constituicaoH2) {
        constituicaoH2 = document.createElement('h2');
        constituicaoH2.classList.add('total-value');
        const inputElement = constituicaoDiv.querySelector('input');
        constituicaoDiv.insertBefore(constituicaoH2, inputElement);
    }
    constituicaoH2.textContent = `${totalConstituicao} pts`;
}

function calculateAverageMain() {
    let sum = 0;
    let count = 0;

    // Somente considera os "stats main" para a média
    for (let i = 0; i < statNumberInputs.length; i++) {
        const value = parseInt(statNumberInputs[i].value);
        if (i < 6) { // Considera apenas os primeiros 6 inputs para "stats main"
            sum += value;
            count++;
        }
    }
    const average = sum / count;
    return average;
}

function calculateAverageAll() {
    let sum = 0;

    // Considera todos os inputs para a média
    for (let i = 0; i < statNumberInputs.length; i++) {
        const value = parseInt(statNumberInputs[i].value);
        sum += value;
    }
    const average = sum / statNumberInputs.length;
    return average;
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

function updateRank(rankMain, averageMain, totalPoints, rankAll, averageAll) {
    rankElement.textContent = `Rank ${rankMain} – Total de ${totalPoints} – Média de ${averageMain.toFixed(2)}\n`;
}

// Chamadas iniciais para calcular e exibir valores
const averageMain = calculateAverageMain();
const averageAll = calculateAverageAll();
const totalPoints = calculateTotalPoints();
const rankMain = calculateRank(averageMain);
const rankAll = calculateRank(averageAll);

const forcaInput = document.querySelector('#Forca input');
const totalForca = calculateTotalForca(parseInt(forcaInput.value));
updateTotalForca(totalForca);

const almaInput = document.querySelector('#Alma input');
const totalAlma = calculateTotalAlma(parseInt(almaInput.value));
updateTotalAlma(totalAlma);

const manaInput = document.querySelector('#Mana input');
const totalMana = calculateTotalMana(parseInt(manaInput.value));
updateTotalMana(totalMana);

const corridaInput = document.querySelector('#Corrida input');
const totalCorrida = calculateTotalCorrida(parseInt(corridaInput.value));
updateTotalCorrida(totalCorrida);

const menteInput = document.querySelector('#Mente input');
const totalMente = calculateTotalMente(parseInt(menteInput.value));
updateTotalMente(totalMente);

const concentracaoInput = document.querySelector('#Concentracao input');
const totalConcentracao = calculateTotalConcentracao(parseInt(concentracaoInput.value));
updateTotalConcentracao(totalConcentracao);

updateRank(rankMain, averageMain, totalPoints, rankAll, averageAll);
