// Função para calcular a média dos valores
function calculatevalueAverage(values) {
    const sum = values.reduce((acc, value) => acc + parseInt(value), 0);
    return sum / values.length;
    }


// Functions to get values from input elements
function getInputValuesMain() {
    return [
        document.getElementById('Alma').querySelector('.statnumber').value || 0,
        document.getElementById('Mana').querySelector('.statnumber').value || 0,
        document.getElementById('Forca').querySelector('.statnumber').value || 0,
        document.getElementById('Corrida').querySelector('.statnumber').value || 0,
        document.getElementById('Mente').querySelector('.statnumber').value || 0,
        document.getElementById('Concentracao').querySelector('.statnumber').value || 0,
    ];
}

function getInputValuesSub() {
    const values = [
        document.querySelector('#Constituicao .total-value'),
        document.querySelector('#Potencia .total-value'),
        document.querySelector('#Agilidade .total-value'),
        document.querySelector('#Recuperacao .total-value'),
        document.querySelector('#Imaterial .total-value'),
        document.querySelector('#Espirito .total-value'),
        document.querySelector('#Visao .total-value'),
        document.querySelector('#Audicao .total-value'),
        document.querySelector('#Olfato .total-value'),
        document.querySelector('#Tato .total-value'),
    ];

    return values.map(value => (value && value.textContent) ? parseFloat(value.textContent) : 0);
}

function getInputValuesAll() {
    const values = [
        document.getElementById('Alma').querySelector('.statnumber'),
        document.getElementById('Mana').querySelector('.statnumber'),
        document.getElementById('Forca').querySelector('.statnumber'),
        document.getElementById('Corrida').querySelector('.statnumber'),
        document.getElementById('Mente').querySelector('.statnumber'),
        document.getElementById('Concentracao').querySelector('.statnumber'),
        document.querySelector('#Constituicao .total-value'),
        document.querySelector('#Potencia .total-value'),
        document.querySelector('#Agilidade .total-value'),
        document.querySelector('#Recuperacao .total-value'),
        document.querySelector('#Imaterial .total-value'),
        document.querySelector('#Espirito .total-value'),
        document.querySelector('#Visao .total-value'),
        document.querySelector('#Audicao .total-value'),
        document.querySelector('#Olfato .total-value'),
        document.querySelector('#Tato .total-value'),
    ];

    return values.map(value => (value && value.textContent) ? parseFloat(value.textContent) : 0);
}


function getXP() {
    return [
        document.getElementById('Alma').querySelector('.statnumber').value || 0,
        document.getElementById('Mana').querySelector('.statnumber').value || 0,
        document.getElementById('Forca').querySelector('.statnumber').value || 0,
        document.getElementById('Corrida').querySelector('.statnumber').value || 0,
        document.getElementById('Mente').querySelector('.statnumber').value || 0,
        document.getElementById('Concentracao').querySelector('.statnumber').value || 0,
        document.getElementById('Constituicao').querySelector('.statnumber').value || 0,
        document.getElementById('Potencia').querySelector('.statnumber').value || 0,
        document.getElementById('Agilidade').querySelector('.statnumber').value || 0,
        document.getElementById('Recuperacao').querySelector('.statnumber').value || 0,
        document.getElementById('Imaterial').querySelector('.statnumber').value || 0,
        document.getElementById('Espirito').querySelector('.statnumber').value || 0,
        document.getElementById('Visao').querySelector('.statnumber').value || 0,
        document.getElementById('Audicao').querySelector('.statnumber').value || 0,
        document.getElementById('Olfato').querySelector('.statnumber').value || 0,
        document.getElementById('Tato').querySelector('.statnumber').value || 0,
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

// Função para atualizar o gráfico Result com novos valores
function updateResultChart() {
    const valuesAll = getInputValuesAll();
    const ctx = document.getElementById('chartResult').getContext('2d');
    const colors = [
        '#0070ea',   // MainPhysical
        '#73b6ff',   // SubPhysical
        '#da2a6f99',   // Senses
        '#b46bfe',  // SubMagical
        '#8b17fe',   // MainMagical
    ];

    const valuesOrdered = [
        valuesAll[0], valuesAll[2], valuesAll[3],   // MainPhysical
        valuesAll[6], valuesAll[7], valuesAll[8], valuesAll[9],   // SubPhysical
        valuesAll[12], valuesAll[13], valuesAll[14], valuesAll[15],   // Senses
        valuesAll[10], valuesAll[11],  // SubMagical
        valuesAll[1], valuesAll[4], valuesAll[5],   // MainMagical
    ];


    if (window.resultChart) {
        window.resultChart.destroy();
    }


    window.resultChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Alma', 'Força', 'Corrida', 
                'Constituição', 'Potência', 'Agilidade', 'Recuperação',
                'Visão', 'Audição', 'Olfato', 'Tato',
                'Imaterial', 'Espírito',
                'Mana', 'Mente', 'Concentração',
            ],
            datasets: [
                {
                    data: valuesOrdered,
                    backgroundColor: [
                        colors[1],
                        colors[1],
                        colors[1],

                        colors[1],
                        colors[1], 
                        colors[1], 
                        colors[1],

                        colors[2],
                        colors[2],
                        colors[2],
                        colors[2],

                        colors[3], 
                        colors[3],
                        
                        colors[3], 
                        colors[3], 
                        colors[3],
                    ],
                    borderWidth: 1,
                    hoverOffset: 4,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 5,
                        padding: 5,
                    },
                },
            },
        },
    });
}

function updateXPChart() {
    const valuesAll = getXP();
    const totalXP = 
        parseFloat(valuesAll[0]) + 
        parseFloat(valuesAll[1]) + 
        parseFloat(valuesAll[2]) + 
        parseFloat(valuesAll[3]) + 
        parseFloat(valuesAll[4]) + 
        parseFloat(valuesAll[5]) + 
        parseFloat(valuesAll[6]) + 
        parseFloat(valuesAll[7]) + 
        parseFloat(valuesAll[8]) + 
        parseFloat(valuesAll[9]) + 
        parseFloat(valuesAll[10]) + 
        parseFloat(valuesAll[11]) + 
        parseFloat(valuesAll[12]) + 
        parseFloat(valuesAll[13]) + 
        parseFloat(valuesAll[14]) + 
        parseFloat(valuesAll[15]);

    if (window.xpChart) {
        window.xpChart.destroy();
    }

    const ctx = document.getElementById('chartXP').getContext('2d');

    // Define os valores mínimos necessários para cada rank
    const rankMinimums = {
        'Rank E': 0,
        'Rank D': 522,
        'Rank C': 1044,
        'Rank B': 1566,
        'Rank A': 2088,
        'Rank S': 2610,
        'Rank SS': 3132,
        'Rank SSS': 3654,
        'Rank Z': 4176,
    };

    // Cria um array de datasets com os valores mínimos
    const datasets = Object.keys(rankMinimums).map(rank => ({
        label: rank,
        data: [rankMinimums[rank]],
        backgroundColor: 'rgba(0, 0, 0, 0)', // Define uma cor transparente para os valores mínimos
        borderColor: 'rgba(0, 0, 0, 0.5)', // Define uma cor para as linhas dos valores mínimos
        borderWidth: 1,
        pointRadius: 0, // Remove os pontos dos valores mínimos
    }));

    // Adiciona um dataset para a "XP Atual" do jogador
    datasets.push({
        label: 'XP Atual',
        data: [totalXP],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.7,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
    });

    window.xpChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pontuação Mínima'],
            datasets: datasets,
        },
        options: {
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                }
            },
            scales: {
                x: {
                    stacked: true, // Empilha as barras na direção horizontal
                },
                y: {
                    stacked: true, // Empilha as barras na direção vertical
                },
            },
        }
    });
}



// Adicione ouvintes de eventos aos campos de entrada
document.querySelectorAll('.statnumber').forEach(input => {
    input.addEventListener('input', updateChart);
    input.addEventListener('input', updateRadarChart);
    input.addEventListener('input', updateSubChart);
    input.addEventListener('input', updateResultChart);
    input.addEventListener('input', updateXPChart);
});

// Chame a função updateChart() inicialmente para criar o gráfico
updateChart();
updateRadarChart();
updateSubChart();
updateResultChart();
updateXPChart();
