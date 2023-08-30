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
        // Ensure attributes don't exceed certain values
        const attributeName = inputElement.parentElement.id; // Get the attribute name from the parent element's ID
        let maxLimit = 960; // Default maxLimit
        
        if (attributeName === 'Constituicao' ||
            attributeName === 'Potencia' ||
            attributeName === 'Agilidade' ||
            attributeName === 'Recuperacao' ||
            attributeName === 'Imaterial' ||
            attributeName === 'Espirito' ||
            attributeName === 'visao' ||
            attributeName === 'Audicao' ||
            attributeName === 'Olfato' ||
            attributeName === 'Tato') {
            maxLimit = 120;
        }
        
        if (parseInt(this.value) > maxLimit) {
            this.value = maxLimit.toString();
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

        // Calcula e atualiza o total de Potência
        const potenciaInput = document.querySelector('#Potencia input');
        const totalPotencia = calculateTotalPotencia(
            parseInt(potenciaInput.value),
            parseInt(forcaInput.value),
            parseInt(corridaInput.value),
            parseInt(concentracaoInput.value)
        );
        updateTotalPotencia(totalPotencia);

        // Calcula e atualiza o total de Agilidade
        const agilidadeInput = document.querySelector('#Agilidade input');
        const totalAgilidade = calculateTotalAgilidade(
            parseInt(agilidadeInput.value),
            parseInt(corridaInput.value),
            parseInt(concentracaoInput.value)
        );
        updateTotalAgilidade(totalAgilidade);
        

        // Calcula e atualiza o total de Recuperação
        const recuperacaoInput = document.querySelector('#Recuperacao input');        
        const totalRecuperacao = calculateTotalRecuperacao(
            parseInt(recuperacaoInput.value),
            parseInt(almaInput.value),  
            parseInt(menteInput.value),
            parseInt(concentracaoInput.value)
        );
        updateTotalRecuperacao(totalRecuperacao);
        
        // Calcula e atualiza o total de Imaterial
        const imaterialInput = document.querySelector('#Imaterial input');        
        const totalImaterial = calculateTotalImaterial(
            parseInt(imaterialInput.value),
            parseInt(manaInput.value),
            parseInt(menteInput.value),
            parseInt(concentracaoInput.value)
        );
        updateTotalImaterial(totalImaterial);

        // Calcula e atualiza o total de Espírito
        const espiritoInput = document.querySelector('#Espirito input');        
        const totalEspirito = calculateTotalEspirito(
            parseInt(espiritoInput.value),
            parseInt(menteInput.value),
            parseInt(concentracaoInput.value)
        );
        updateTotalEspirito(totalEspirito);
        

    });
});

// Função para calcular o total de Alma
function calculateTotalAlma(xp) {
    if (xp >= 480) {
        return (200 * xp);
    } else {
        return (150 * xp) + 150;
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
        return (150 * xp) + 150;
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
        totalForca = (xp * 6 +300);
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
        totalForca = (xp * 24);
    } else {
        totalForca = (xp * 32);
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
        return (4.5 * xp);
    } else {
        return (6 * xp) + 15;
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
        totalConcentracao = (xp * 1.2) + 10;
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
function calculateTotalConstituicao(constituicaoInput, almaInput, forcaInput) {
    const totalConstituicao = constituicaoInput + (almaInput + forcaInput) / 2.285;
    if (totalConstituicao > 840){
        return parseFloat(totalConstituicao.toFixed(0));
    }

    else {
        return parseFloat(totalConstituicao.toFixed(1));
    }

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
    constituicaoH2.textContent = totalConstituicao;
}

// Função para calcular o total de Potência
function calculateTotalPotencia(potenciaInput, forcaInput, corridaInput, concentracaoInput) {
    const totalPotencia = potenciaInput + (forcaInput + corridaInput + concentracaoInput) / 3.427;
    if (totalPotencia > 840){
        return parseFloat(totalPotencia.toFixed(0));
    }

    else {
        return parseFloat(totalPotencia.toFixed(1));
    }
}

// Função para atualizar o total de Potência no HTML
function updateTotalPotencia(totalPotencia) {
    const potenciaDiv = document.querySelector('#Potencia');
    let potenciaH2 = potenciaDiv.querySelector('.total-value');
    if (!potenciaH2) {
        potenciaH2 = document.createElement('h2');
        potenciaH2.classList.add('total-value');
        const inputElement = potenciaDiv.querySelector('input');
        potenciaDiv.insertBefore(potenciaH2, inputElement);
    }
    potenciaH2.textContent = totalPotencia;
}

// Função para calcular o total de Agilidade
function calculateTotalAgilidade(agilidadeInput, corridaInput, concentracaoInput) {
    const totalAgilidade = agilidadeInput + (corridaInput + concentracaoInput) / 2.285;
    if (totalAgilidade > 840){
        return parseFloat(totalAgilidade.toFixed(0));
    }

    else {
        return parseFloat(totalAgilidade.toFixed(1));
    }
}

// Função para atualizar o total de Agilidade no HTML
function updateTotalAgilidade(totalAgilidade) {
    const agilidadeDiv = document.querySelector('#Agilidade');
    let agilidadeH2 = agilidadeDiv.querySelector('.total-value');
    if (!agilidadeH2) {
        agilidadeH2 = document.createElement('h2');
        agilidadeH2.classList.add('total-value');
        const inputElement = agilidadeDiv.querySelector('input');
        agilidadeDiv.insertBefore(agilidadeH2, inputElement);
    }
    agilidadeH2.textContent = totalAgilidade;
}


// Função para calcular o total de Recuperação
function calculateTotalRecuperacao(recuperacaoInput, almaInput, menteInput, concentracaoInput) {
    const totalRecuperacao = recuperacaoInput + (almaInput + menteInput + concentracaoInput) / 3.427;
    if (totalRecuperacao > 840){
        return parseFloat(totalRecuperacao.toFixed(0));
    }

    else {
        return parseFloat(totalRecuperacao.toFixed(1));
    }
}

// Função para atualizar o total de Recuperação no HTML
function updateTotalRecuperacao(totalRecuperacao) {
    const recuperacaoDiv = document.querySelector('#Recuperacao');
    let recuperacaoH2 = recuperacaoDiv.querySelector('.total-value');
    if (!recuperacaoH2) {
        recuperacaoH2 = document.createElement('h2');
        recuperacaoH2.classList.add('total-value');
        const inputElement = recuperacaoDiv.querySelector('input');
        recuperacaoDiv.insertBefore(recuperacaoH2, inputElement);
    }
    recuperacaoH2.textContent = totalRecuperacao;
}

// Função para calcular o total de Imaterial
function calculateTotalImaterial(imaterialInput,manaInput, menteInput, concentracaoInput) {
    const totalImaterial = imaterialInput + (manaInput + menteInput + concentracaoInput) / 3.427;
    if (totalImaterial > 840){
        return parseFloat(totalImaterial.toFixed(0));
    }

    else {
        return parseFloat(totalImaterial.toFixed(1));
    }
}

// Função para atualizar o total de Imaterial no HTML
function updateTotalImaterial(totalImaterial) {
    const imaterialDiv = document.querySelector('#Imaterial');
    let imaterialH2 = imaterialDiv.querySelector('.total-value');
    if (!imaterialH2) {
        imaterialH2 = document.createElement('h2');
        imaterialH2.classList.add('total-value');
        const inputElement = imaterialDiv.querySelector('input');
        imaterialDiv.insertBefore(imaterialH2, inputElement);
    }
    imaterialH2.textContent = totalImaterial;
}

// Função para calcular o total de Espirito
function calculateTotalEspirito(espiritoInput, menteInput, concentracaoInput) {
    const totalEspirito = espiritoInput + (menteInput + concentracaoInput) / 2.285;
    if (totalEspirito > 840){
        return parseFloat(totalEspirito.toFixed(0));
    }

    else {
        return parseFloat(totalEspirito.toFixed(1));
    }
}

// Função para atualizar o total de Espirito no HTML
function updateTotalEspirito(totalEspirito) {
    const espiritoDiv = document.querySelector('#Espirito');
    let espiritoH2 = espiritoDiv.querySelector('.total-value');
    if (!espiritoH2) {
        espiritoH2 = document.createElement('h2');
        espiritoH2.classList.add('total-value');
        const inputElement = espiritoDiv.querySelector('input');
        espiritoDiv.insertBefore(espiritoH2, inputElement);
    }
    espiritoH2.textContent = totalEspirito;
}


function calculateAverage() {
    let sum = 0;
    for (let i = 0; i < statNumberInputs.length; i++) {
        const value = parseInt(statNumberInputs[i].value);
        sum += value;
    }
    const average = sum / 6; // Dividir pela quantidade desejada (6)
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
    rankElement.textContent = `Rank ${rank} – Total de ${totalPoints} – Média de ${average.toFixed(2)}\n`;
}

// Chamadas iniciais para calcular e exibir valores
const totalPoints = calculateTotalPoints();
const rank = calculateRank(average);
const average = calculateTotalPoints()/6;

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

updateRank(rank, average, totalPoints);

// Function to toggle between light mode and dark mode
function toggleDarkMode() {
    const body = document.querySelector('body'); // Seleciona o elemento <body>
    body.classList.toggle('darkmode'); // Adiciona ou remove a classe 'darkmode' do elemento <body>

    // Store dark mode state in localStorage
    const darkModeOn = body.classList.contains('darkmode');
    localStorage.setItem('DarkModeON', darkModeOn);

    // Update dark mode switch state
    const switchDarkMode = document.getElementById('switch-DarkMode'); // ID atualizado
    switchDarkMode.checked = darkModeOn;
}

// Check the localStorage on page load and apply dark mode if previously enabled
window.addEventListener('load', () => {
    const darkModeOn = localStorage.getItem('DarkModeON') === 'true';
    const body = document.querySelector('body'); // Seleciona o elemento <body>
    const switchDarkMode = document.getElementById('switch-DarkMode');

    if (darkModeOn) {
        body.classList.add('darkmode'); // Adiciona a classe 'darkmode' ao elemento <body>
        switchDarkMode.checked = true;
    }
});





















