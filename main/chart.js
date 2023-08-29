/*
const totalConstituicao = document.querySelector('#Constituicao .stat-value').value;
const totalPotencia = document.querySelector('#Potencia .stat-value').value;
const totalAgilidade = document.querySelector('#Agilidade .stat-value').value;
const totalRecuperacao = document.querySelector('#Recuperacao .stat-value').value;
const totalImaterial = document.querySelector('#Imaterial .stat-value').value;
const totalEspirito = document.querySelector('#Espirito .stat-value').value;    
*/


// Function to get values from input elements
function getInputValuesMain() {
    return [
        document.getElementById('Alma').querySelector('.statnumber').value,
        document.getElementById('Mana').querySelector('.statnumber').value,
        document.getElementById('Forca').querySelector('.statnumber').value,
        document.getElementById('Corrida').querySelector('.statnumber').value,
        document.getElementById('Mente').querySelector('.statnumber').value,
        document.getElementById('Concentracao').querySelector('.statnumber').value,
    ];
}

function getInputValuesSub() {
    return [
        document.getElementById('Constituicao').querySelector('.statnumber').value,
        document.getElementById('Potencia').querySelector('.statnumber').value,
        document.getElementById('Agilidade').querySelector('.statnumber').value,
        document.getElementById('Recuperacao').querySelector('.statnumber').value,
        document.getElementById('Imaterial').querySelector('.statnumber').value,
        document.getElementById('Espirito').querySelector('.statnumber').value,
        document.getElementById('visao').querySelector('.statnumber').value,
        document.getElementById('Audicao').querySelector('.statnumber').value,
        document.getElementById('Olfato').querySelector('.statnumber').value,
        document.getElementById('Tato').querySelector('.statnumber').value,
    ];
}

function getValuesPlus() {
return [
document.getElementById('Constituicao').querySelector('.stat-value'),
document.getElementById('Potencia').querySelector('.stat-value'),
document.getElementById('Agilidade').querySelector('.stat-value'),
document.getElementById('Recuperacao').querySelector('.stat-value'),
document.getElementById('Imaterial').querySelector('.stat-value'),
document.getElementById('Espirito').querySelector('.stat-value')
];
}

//Constituicao,Potencia,Agilidade,Recuperacao,Imaterial,Espirito

// Função para atualizar o gráfico com novos valores
function updateChart() {
const valuesMain = getInputValuesMain();
const ctx = document.getElementById('chartMain').getContext('2d');

if (window.chart) {
window.chart.destroy();
}

window.chart = new Chart(ctx, {
type: 'bar',
data: {
    labels: [
    'Alma',
    'Mana',
    'Força',
    'Corrida',
    'Mente',
    'Concentração',
],
    datasets: [{
        label: 'XP Total',
        data: valuesMain,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.7,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointRadius: 4,
    }]
},
options: {
    scales: {
        r: {
            beginAtZero: true,
            suggestedMax: 120,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            angleLines: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
        }
    },
    elements: {
        line: {
            borderWidth: 2
        }
    }
}
});


}

// Função para atualizar o gráfico de radar com novos valores
function updateRadarChart() {
const valuesMain = getInputValuesMain();
const averageValue = calculateAverageValue(valuesMain); // Calcula a média dos valores
const ctx = document.getElementById('chartRadar').getContext('2d');

if (window.radarChart) {
window.radarChart.destroy();
}

window.radarChart = new Chart(ctx, {
type: 'radar',
data: {
    labels: [
        'Alma',
        'Mana',
        'Força',
        'Corrida',
        'Mente',
        'Concentração',
    ],
    datasets: [
        {
            label: 'XP Total',
            data: valuesMain,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 0.7,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointRadius: 4,
        },
        {
            label: 'Média',
            data: [averageValue, averageValue, averageValue, averageValue, averageValue, averageValue], // Usa a média para todos os valores
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 0.7,
            pointBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointBorderColor: '#fff',
            pointRadius: 4,
        },
    ],
},
options: {
    scales: {
        r: {
            beginAtZero: true,
            suggestedMax: 120,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            angleLines: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
        },
    },
    elements: {
        line: {
            borderWidth: 2,
        },
    },
},
});
}

// Função para calcular a média dos valores
function calculateAverageValue(values) {
const sum = values.reduce((acc, value) => acc + parseInt(value), 0);
return sum / values.length;
}

// Função para atualizar o gráfico Sub com novos valores
function updateSubChart() {
const valuesSub = getValuesPlus();
const ctx = document.getElementById('chartSub').getContext('2d');

if (window.SubChart) {
window.SubChart.destroy();
}

window.SubChart = new Chart(ctx, {
type: 'line',
data: {
    labels: [
        'Constituição',
        'Potência',
        'Agilidade',
        'Recuperação',
        'Imaterial',
        'Espírito',

    ],
    datasets: [{
        label: 'XP Total',
        data: [totalConstituicao,totalPotencia,totalAgilidade,totalRecuperacao,totalImaterial,totalEspirito],
        backgroundColor: 'rgba(168, 130, 200, 0.2)',
        borderColor: 'rgba(168, 130, 200, 1)',
        borderWidth: 0.7,
        pointBackgroundColor: 'rgba(168, 130, 200, 1)',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: true, 
        backgroundColor: 'rgba(168, 130, 200, 0.2)',
    }]
},
options: {
    scales: {
        r: {
            beginAtZero: true,
            suggestedMax:Math.max(...valuesSub) + 5,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            angleLines: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
        }
    },
    elements: {
        line: {
            borderWidth: 2
        }
    }
}
});
}

// Adicione ouvintes de eventos aos campos de entrada
document.querySelectorAll('.statnumber').forEach(input => {
input.addEventListener('input', updateChart);
input.addEventListener('input', updateRadarChart);
input.addEventListener('input', updateSubChart);
});

// Chame a função updateChart() inicialmente para criar o gráfico
updateChart();
updateRadarChart();
updateSubChart();