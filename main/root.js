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
                attributeName === 'Espirito') {
                maxLimit = 120;
            } else if (attributeName === 'Visao' ||
                    attributeName === 'Audicao' ||
                    attributeName === 'Olfato' ||
                    attributeName === 'Tato') {
                maxLimit = 240;
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
            
            // Calcula e atualiza o total de Visão
            const visaoInput = document.querySelector('#Visao input');        
            const totalVisao = calculateTotalVisao(
                parseInt(visaoInput.value),
                parseInt(menteInput.value),
                parseInt(concentracaoInput.value)
            );
            updateTotalVisao(totalVisao);

            // Calcula e atualiza o total de Audição
            const audicaoInput = document.querySelector('#Audicao input');        
            const totalAudicao = calculateTotalAudicao(
                parseInt(audicaoInput.value),
                parseInt(menteInput.value),
                parseInt(concentracaoInput.value)
            );
            updateTotalAudicao(totalAudicao);

            // Calcula e atualiza o total de Olfato
            const olfatoInput = document.querySelector('#Olfato input');        
            const totalOlfato = calculateTotalOlfato(
                parseInt(olfatoInput.value),
                parseInt(menteInput.value),
                parseInt(concentracaoInput.value)
            );
            updateTotalOlfato(totalOlfato);

            // Calcula e atualiza o total de Tato
            const TatoInput = document.querySelector('#Tato input');        
            const totalTato = calculateTotalTato(
                parseInt(TatoInput.value),
                parseInt(menteInput.value),
                parseInt(concentracaoInput.value)
            );
            updateTotalTato(totalTato);

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

// Função para calcular o Tier com base no valor total da Alma
function calculateTier(total) {
    if (total > 960) {
        return 'Tier -1';
    } else if (total >= 840) {
        return 'Tier 0';
    } else if (total >= 740) {
        return 'Tier 1';
    } else if (total >= 640) {
        return 'Tier 2';
    } else if (total >= 560) {
        return 'Tier 3';
    } else if (total >= 480) {
        return 'Tier 4';
    } else if (total >= 400) {
        return 'Tier 5';
    } else if (total >= 320) {
        return 'Tier 6';
    } else if (total >= 240) {
        return 'Tier 7';
    } else if (total >= 160) {
        return 'Tier 8';
    } else if (total >= 80) {
        return 'Tier 9';
    } else {
        return 'Tier 10';
    }
}

// Função para atualizar o total de Alma no HTML
function updateTotalAlma() {
    const almaDiv = document.querySelector('#Alma');
    const almaInput = document.querySelector('#Alma input');
    const totalAlma = calculateTotalAlma(parseInt(almaInput.value));
    const tierAlma = calculateTier(parseInt(almaInput.value));
    let almaH2 = almaDiv.querySelector('.total-value');
    let tierH2 = almaDiv.querySelector('.tier-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        almaDiv.insertBefore(tierH2, almaDiv.querySelector('input'));
    }

    if (!almaH2) {
        almaH2 = document.createElement('h2');
        almaH2.classList.add('total-value');
        almaDiv.insertBefore(almaH2, almaDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierAlma} &`;
    almaH2.textContent = `${totalAlma} HP`;
    tierH2.style.marginRight = '3px';
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
function updateTotalMana() {
    const manaDiv = document.querySelector('#Mana');
    const manaInput = document.querySelector('#Mana input');
    const totalMana = calculateTotalMana(parseInt(manaInput.value));
    const tierMana = calculateTier(parseInt(manaInput.value));
    let manaH2 = manaDiv.querySelector('.total-value');
    let tierH2 = manaDiv.querySelector('.tier-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        manaDiv.insertBefore(tierH2, manaDiv.querySelector('input'));
    }

    if (!manaH2) {
        manaH2 = document.createElement('h2');
        manaH2.classList.add('total-value');
        manaDiv.insertBefore(manaH2, manaDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierMana} &`;
    manaH2.textContent = `${totalMana} MP`;
    tierH2.style.marginRight = '3px';
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
    function updateTotalForca() {
        const forcaDiv = document.querySelector('#Forca');
        const forcaInput = document.querySelector('#Forca input');
        const totalForca = calculateTotalForca(parseInt(forcaInput.value));
        const tierForca = calculateTier(parseInt(forcaInput.value));
        let forcaH2 = forcaDiv.querySelector('.total-value');
        let tierH2 = forcaDiv.querySelector('.tier-value');
    
        if (!tierH2) {
            tierH2 = document.createElement('h2');
            tierH2.classList.add('tier-value');
            forcaDiv.insertBefore(tierH2, forcaDiv.querySelector('input'));
        }
    
        if (!forcaH2) {
            forcaH2 = document.createElement('h2');
            forcaH2.classList.add('total-value');
            forcaDiv.insertBefore(forcaH2, forcaDiv.querySelector('input'));
        }
    
        tierH2.textContent = `${tierForca} &`;
        forcaH2.textContent = `${totalForca} N`;
        tierH2.style.marginRight = '3px';
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
function updateTotalCorrida() {
    const corridaDiv = document.querySelector('#Corrida');
    const corridaInput = document.querySelector('#Corrida input');
    const totalCorrida = calculateTotalCorrida(parseInt(corridaInput.value));
    const tierCorrida = calculateTier(parseInt(corridaInput.value));
    
    let corridaH2 = corridaDiv.querySelector('.total-value');
    let tierH2 = corridaDiv.querySelector('.tier-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        corridaDiv.insertBefore(tierH2, corridaDiv.querySelector('input'));
    }

    if (!corridaH2) {
        corridaH2 = document.createElement('h2');
        corridaH2.classList.add('total-value');
        corridaDiv.insertBefore(corridaH2, corridaDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierCorrida} &`;
    corridaH2.textContent = `${totalCorrida} Km/h`;
    tierH2.style.marginRight = '3px';
}

    // Função para calcular o total de Mente
    function calculateTotalMente(xp) {
        return xp >= 500 ? 4.5 * xp : 6 * xp + 15;
    }

// Função para atualizar o total de Mente no HTML
function updateTotalMente() {
    const menteDiv = document.querySelector('#Mente');
    const menteInput = document.querySelector('#Mente input');
    const totalMente = calculateTotalMente(parseInt(menteInput.value));
    const tierMente = calculateTier(parseInt(menteInput.value));
    
    let menteH2 = menteDiv.querySelector('.total-value');
    let tierH2 = menteDiv.querySelector('.tier-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        menteDiv.insertBefore(tierH2, menteDiv.querySelector('input'));
    }

    if (!menteH2) {
        menteH2 = document.createElement('h2');
        menteH2.classList.add('total-value');
        menteDiv.insertBefore(menteH2, menteDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierMente} &`;
    menteH2.textContent = `${totalMente} Mi`;
    tierH2.style.marginRight = '3px';
}

    // Função para calcular o total de Concentração
    function calculateTotalConcentracao(xp) {
        const xpMultipliers = [
            { upperLimit: 80, multiplier: 1.2 },
            { upperLimit: 160, multiplier: 1.2 },
            { upperLimit: 240, multiplier: 1.4 },
            { upperLimit: 320, multiplier: 1.4 },
            { upperLimit: 400, multiplier: 1.6 },
            { upperLimit: 480, multiplier: 1.6 },
            { upperLimit: 560, multiplier: 1.8 },
            { upperLimit: 640, multiplier: 1.8 },
            { upperLimit: 740, multiplier: 2 },
            { upperLimit: 840, multiplier: 2 },
            { upperLimit: 960, multiplier: 2.4 },
        ];
    
        let totalConcentracao = 0;
    
        for (const entry of xpMultipliers) {
            if (xp <= entry.upperLimit) {
                totalConcentracao = xp * entry.multiplier;
                break;
            }
        }
    
        return parseFloat(totalConcentracao.toFixed(1));
    }

// Função para atualizar o total de Concentração no HTML
function updateTotalConcentracao() {
    const concentracaoDiv = document.querySelector('#Concentracao');
    const concentracaoInput = document.querySelector('#Concentracao input');
    const totalConcentracao = calculateTotalConcentracao(parseInt(concentracaoInput.value));
    const tierConcentracao = calculateTier(parseInt(concentracaoInput.value));

    let concentracaoH2 = concentracaoDiv.querySelector('.total-value');
    let tierH2 = concentracaoDiv.querySelector('.tier-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        concentracaoDiv.insertBefore(tierH2, concentracaoDiv.querySelector('input'));
    }

    if (!concentracaoH2) {
        concentracaoH2 = document.createElement('h2');
        concentracaoH2.classList.add('total-value');
        concentracaoDiv.insertBefore(concentracaoH2, concentracaoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierConcentracao} &`;
    concentracaoH2.textContent = `${totalConcentracao} CT`;
    tierH2.style.marginRight = '3px';
}


    // Função para calcular o total de Constituição
    function calculateTotalConstituicao(constituicaoInput, almaInput, forcaInput) {
        const totalConstituicao = constituicaoInput + (almaInput + forcaInput) / 2.285;
        
        if (totalConstituicao > 840){
            return parseFloat(totalConstituicao.toFixed(0));
        } else {
            return parseFloat(totalConstituicao.toFixed(1));
        }
    }
    
// Função para atualizar o total de Constituição no HTML
function updateTotalConstituicao(totalConstituicao) {
    const constituicaoDiv = document.querySelector('#Constituicao');
    const tierConstituicao = calculateTier(totalConstituicao);
    let tierH2 = constituicaoDiv.querySelector('.tier-value');
    let totalH2 = constituicaoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        constituicaoDiv.insertBefore(tierH2, constituicaoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        constituicaoDiv.insertBefore(totalH2, constituicaoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierConstituicao} &`;
    totalH2.textContent = ` ${totalConstituicao}pt`;
    tierH2.style.marginRight = '3px';
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
    const tierPotencia = calculateTier(totalPotencia);
    let tierH2 = potenciaDiv.querySelector('.tier-value');
    let totalH2 = potenciaDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        potenciaDiv.insertBefore(tierH2, potenciaDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        potenciaDiv.insertBefore(totalH2, potenciaDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierPotencia} &`;
    totalH2.textContent = ` ${totalPotencia}pt`;
    tierH2.style.marginRight = '3px';
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
    const tierAgilidade = calculateTier(totalAgilidade);
    let tierH2 = agilidadeDiv.querySelector('.tier-value');
    let totalH2 = agilidadeDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        agilidadeDiv.insertBefore(tierH2, agilidadeDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        agilidadeDiv.insertBefore(totalH2, agilidadeDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierAgilidade} &`;
    totalH2.textContent = ` ${totalAgilidade}pt`;
    tierH2.style.marginRight = '3px';
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
    const tierRecuperacao = calculateTier(totalRecuperacao);
    let tierH2 = recuperacaoDiv.querySelector('.tier-value');
    let totalH2 = recuperacaoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        recuperacaoDiv.insertBefore(tierH2, recuperacaoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        recuperacaoDiv.insertBefore(totalH2, recuperacaoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierRecuperacao} &`;
    totalH2.textContent = ` ${totalRecuperacao}pt`;
    tierH2.style.marginRight = '3px';
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
    const tierImaterial = calculateTier(totalImaterial);
    let tierH2 = imaterialDiv.querySelector('.tier-value');
    let totalH2 = imaterialDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        imaterialDiv.insertBefore(tierH2, imaterialDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        imaterialDiv.insertBefore(totalH2, imaterialDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierImaterial} &`;
    totalH2.textContent = ` ${totalImaterial}pt`;
    tierH2.style.marginRight = '3px';
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

// Função para atualizar o total do Espirito no HTML
function updateTotalEspirito(totalEspirito) {
    const espiritoDiv = document.querySelector('#Espirito');
    const tierEspirito = calculateTier(totalEspirito);
    let tierH2 = espiritoDiv.querySelector('.tier-value');
    let totalH2 = espiritoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        espiritoDiv.insertBefore(tierH2, espiritoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        espiritoDiv.insertBefore(totalH2, espiritoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierEspirito} &`;
    totalH2.textContent = ` ${totalEspirito}pt`;
    tierH2.style.marginRight = '3px';
}


    // Função para calcular o total de Visao
    function calculateTotalVisao(visaoInput, menteInput, concentracaoInput) {
        const totalVisao = visaoInput + (menteInput + concentracaoInput) / 2.285;
        if (totalVisao > 840){
            return parseFloat(totalVisao.toFixed(0));
        }

        else {
            return parseFloat(totalVisao.toFixed(1));
        }
    }

// Função para atualizar o total da Visao no HTML
function updateTotalVisao(totalVisao) {
    const visaoDiv = document.querySelector('#Visao');
    const tierVisao = calculateTier(totalVisao);
    let tierH2 = visaoDiv.querySelector('.tier-value');
    let totalH2 = visaoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        visaoDiv.insertBefore(tierH2, visaoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        visaoDiv.insertBefore(totalH2, visaoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierVisao} &`;
    totalH2.textContent = ` ${totalVisao}pt`;
    tierH2.style.marginRight = '3px';
}


    // Função para calcular o total de Audição
    function calculateTotalAudicao(audicaoInput, menteInput, concentracaoInput) {
        const totalAudicao = audicaoInput + (menteInput + concentracaoInput) / 2.285;
        if (totalAudicao > 840){
            return parseFloat(totalAudicao.toFixed(0));
        }

        else {
            return parseFloat(totalAudicao.toFixed(1));
        }
    }

// Função para atualizar o total da Audicao no HTML
function updateTotalAudicao(totalAudicao) {
    const audicaoDiv = document.querySelector('#Audicao');
    const tierAudicao = calculateTier(totalAudicao);
    let tierH2 = audicaoDiv.querySelector('.tier-value');
    let totalH2 = audicaoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        audicaoDiv.insertBefore(tierH2, audicaoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        audicaoDiv.insertBefore(totalH2, audicaoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierAudicao} &`;
    totalH2.textContent = ` ${totalAudicao}pt`;
    tierH2.style.marginRight = '3px';
}


    // Função para calcular o total de Olfato
    function calculateTotalOlfato(olfatoInput, menteInput, concentracaoInput) {
        const totalOlfato = olfatoInput + (menteInput + concentracaoInput) / 2.285;
        if (totalOlfato > 840){
            return parseFloat(totalOlfato.toFixed(0));
        }

        else {
            return parseFloat(totalOlfato.toFixed(1));
        }
    }

// Função para atualizar o total do Olfato no HTML
function updateTotalOlfato(totalOlfato) {
    const olfatoDiv = document.querySelector('#Olfato');
    const tierOlfato = calculateTier(totalOlfato);
    let tierH2 = olfatoDiv.querySelector('.tier-value');
    let totalH2 = olfatoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        olfatoDiv.insertBefore(tierH2, olfatoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        olfatoDiv.insertBefore(totalH2, olfatoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierOlfato} &`;
    totalH2.textContent = ` ${totalOlfato}pt`;
    tierH2.style.marginRight = '3px';
}


    // Função para calcular o total de Tato
    function calculateTotalTato(tatoInput, menteInput, concentracaoInput) {
        const totalTato = tatoInput + (menteInput + concentracaoInput) / 2.66;
        if (totalTato > 720){
            return parseFloat(totalTato.toFixed(0));
        }

        else {
            return parseFloat(totalTato.toFixed(1));
        }
    }

// Função para atualizar o total do Tato no HTML
function updateTotalTato(totalTato) {
    const tatoDiv = document.querySelector('#Tato');
    const tierTato = calculateTier(totalTato);
    let tierH2 = tatoDiv.querySelector('.tier-value');
    let totalH2 = tatoDiv.querySelector('.total-value');

    if (!tierH2) {
        tierH2 = document.createElement('h2');
        tierH2.classList.add('tier-value');
        tatoDiv.insertBefore(tierH2, tatoDiv.querySelector('input'));
    }

    if (!totalH2) {
        totalH2 = document.createElement('h2');
        totalH2.classList.add('total-value');
        tatoDiv.insertBefore(totalH2, tatoDiv.querySelector('input'));
    }

    tierH2.textContent = `${tierTato} &`;
    totalH2.textContent = ` ${totalTato}pt`;
    tierH2.style.marginRight = '3px';
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
        const rankMap = [
            { min: 0, max: 86, rank: "E" },
            { min: 87, max: 173, rank: "D" },
            { min: 174, max: 260, rank: "C" },
            { min: 261, max: 347, rank: "B" },
            { min: 348, max: 434, rank: "A" },
            { min: 435, max: 521, rank: "S" },
            { min: 522, max: 608, rank: "SS" },
            { min: 609, max: 695, rank: "SSS" },
        ];
    
        for (const item of rankMap) {
            if (average >= item.min && average <= item.max) {
                return item.rank;
            }
        }
    
        return "Z";
    }
    

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }



    // Chamadas iniciais para calcular e exibir valores
    const totalPoints = calculateTotalPoints();
    const average = calculateTotalPoints()/6;
    const rank = calculateRank(average);

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

    function updateRank(rank, average, totalPoints, statID) {
        if (window.innerWidth <= 768) {
            rankElement.innerHTML = `Rank ${rank} – Total de ${formatNumberWithCommas(totalPoints)}
             – Média de ${average.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
            <br>Poder de Luta Base de ${formatNumberWithCommas((totalPoints * 29.56989247).toFixed(0))}
            <br>id: ${rank+totalPoints}`;
        } else {
            rankElement.textContent = `Rank ${rank} – Total de ${formatNumberWithCommas(totalPoints)}
             – Média de ${average.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
             \n – Poder de Luta Base de ${formatNumberWithCommas((totalPoints * 29.56989247).toFixed(0))}
             \nid: ${rank+totalPoints}`;
        }
    }

    // Chame a função para calcular o powerRating inicialmente
    updateRank(rank, average, totalPoints);