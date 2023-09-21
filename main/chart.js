//Apenas para fins de estudo.
/*
    const totalAlma = document.getElementById('Alma').querySelector('.statnumber').value;
    const totalMana = document.getElementById('Mana').querySelector('.statnumber').value;
    const totalForca = document.getElementById('Forca').querySelector('.statnumber').value;
    const totalCorrida = document.getElementById('Corrida').querySelector('.statnumber').value;
    const totalMente = document.getElementById('Mente').querySelector('.statnumber').value;
    const totalConcentracao = document.getElementById('Concentracao').querySelector('.statnumber').value;
    const totalConstituicao = parseFloat(document.querySelector('#Constituicao .total-value').textContent);
    const totalPotencia = parseFloat(document.querySelector('#Potencia .total-value').textContent);
    const totalAgilidade = parseFloat(document.querySelector('#Agilidade .total-value').textContent);
    const totalRecuperacao = parseFloat(document.querySelector('#Recuperacao .total-value').textContent);
    const totalImaterial = parseFloat(document.querySelector('#Imaterial .total-value').textContent);
    const totalEspirito = parseFloat(document.querySelector('#Espirito .total-value').textContent);
*/


// Função para calcular a média dos valores
function calculatevalueAverage(values) {
    const sum = values.reduce((acc, value) => acc + parseInt(value), 0);
    return sum / values.length;
    }

    

// Functions to get values from input elements
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
        parseFloat(document.querySelector('#Constituicao .total-value').textContent),
        parseFloat(document.querySelector('#Potencia .total-value').textContent),
        parseFloat(document.querySelector('#Agilidade .total-value').textContent),
        parseFloat(document.querySelector('#Recuperacao .total-value').textContent),
        parseFloat(document.querySelector('#Imaterial .total-value').textContent),
        parseFloat(document.querySelector('#Espirito .total-value').textContent),
        parseFloat(document.querySelector('#Visao .total-value').textContent),
        parseFloat(document.querySelector('#Audicao .total-value').textContent),
        parseFloat(document.querySelector('#Olfato .total-value').textContent),
        parseFloat(document.querySelector('#Tato .total-value').textContent),
    ];
}

function getInputValuesAll() {
    return [
        document.getElementById('Alma').querySelector('.statnumber').value,
        document.getElementById('Mana').querySelector('.statnumber').value,
        document.getElementById('Forca').querySelector('.statnumber').value,
        document.getElementById('Corrida').querySelector('.statnumber').value,
        document.getElementById('Mente').querySelector('.statnumber').value,
        document.getElementById('Concentracao').querySelector('.statnumber').value,
        parseFloat(document.querySelector('#Constituicao .total-value').textContent),
        parseFloat(document.querySelector('#Potencia .total-value').textContent),
        parseFloat(document.querySelector('#Agilidade .total-value').textContent),
        parseFloat(document.querySelector('#Recuperacao .total-value').textContent),
        parseFloat(document.querySelector('#Imaterial .total-value').textContent),
        parseFloat(document.querySelector('#Espirito .total-value').textContent),
        parseFloat(document.querySelector('#Visao .total-value').textContent),
        parseFloat(document.querySelector('#Audicao .total-value').textContent),
        parseFloat(document.querySelector('#Olfato .total-value').textContent),
        parseFloat(document.querySelector('#Tato .total-value').textContent),
    ];
}

// Função para atualizar o gráfico com novos valores
function updateChart() {
const valuesMain = getInputValuesMain();
const valueMax = Math.max(...valuesMain);
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
title:{
    display: true,
    text: 'Stats Base',
  },
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
            suggestedMax: valueMax * 1.1,
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

function updateRadarChart() {
    const valuesMain = getInputValuesMain();
    const valueMax = Math.max(...valuesMain);
    const valueAverage = calculatevalueAverage(valuesMain);
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
                    data: Array(6).fill(valueAverage),
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
                    suggestedMax: valueMax * 1.1,
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

// Função para atualizar o gráfico Sub com novos valores
function updateSubChart() {
    const valuesSub = getInputValuesSub();
    const valueMax = Math.max(...valuesSub);
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
                'Visão',
                'Audição',
                'Olfato',
                'Tato',
            ],
            datasets: [
                {
                label: 'XP Total',
                data: valuesSub,
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
            },
        ]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                        suggestedMax: valueMax * 1.1,
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

// Function to update the Result Chart
function updateResultChart() {
    const valuesAll = getInputValuesAll();
    const valueMax = Math.max(...valuesAll);
    const valueAverage = calculatevalueAverage(valuesAll);
    const ctx = document.getElementById('chartResult').getContext('2d');

    if (window.resultChart) {
        window.resultChart.destroy();
    }

    window.resultChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Alma',
                'Mana',
                'Força',
                'Corrida',
                'Mente',
                'Concentração',
                'Constituição',
                'Potência',
                'Agilidade',
                'Recuperação',
                'Imaterial',
                'Espírito',
                'Visão',
                'Audição',
                'Olfato',
                'Tato',
            ],
            datasets: [
                {
                    label: 'XP Total',
                    data: valuesAll,
                    backgroundColor: 'rgba(168, 130, 200, 0.2)',
                    borderColor: 'rgba(168, 130, 200, 1)',
                    borderWidth: 0.7,
                    pointBackgroundColor: 'rgba(168, 130, 200, 1)',
                    pointBorderColor: '#fff',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.1,
                    fill: true,
                    backgroundColor: 'rgba(168, 130, 200, 0.2)',
                },
                {
                    label: 'Média',
                    data: Array(16).fill(valueAverage),
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 0.7,
                    pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                    pointBorderColor: '#fff',
                    pointRadius: 3,
                },
            ]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        suggestedMax: valueMax * 1.1,
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
input.addEventListener('input', updateResultChart);
});

// Chame a função updateChart() inicialmente para criar o gráfico
updateChart();
updateRadarChart();
updateSubChart();
updateResultChart();
calculatevalueAverage();
