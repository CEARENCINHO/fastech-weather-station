import {converterParaHoraMT} from './converterHora.js'
export function part2(dado){
    console.log(dado)
    const tempAgora = document.querySelectorAll('#temperatura')
    const umidAgora = document.querySelectorAll('#umidade')
    const vento = document.querySelectorAll('#velocidade-vento')
    const dirVento = document.querySelectorAll('#direcaoVento')
    const pressao = document.querySelector('#pressao')
    const valorUmidade = parseFloat(dado.umidade)
    const statusumidade = document.querySelector('#statusumidade')
    const statusDirVento = document.querySelectorAll('#statusDirVento')
    const statusPress = document.querySelector('#statusPress')
    const horaLeitura = document.querySelector('#timenow')


    tempAgora.forEach(card => {
        card.textContent = dado.temp
    })


    umidAgora.forEach(card => {
        card.textContent = dado.umidade
    })

    if (valorUmidade < 12){
            statusumidade.textContent = 'Emergência'
        } else if (valorUmidade < 20) {
            statusumidade.textContent = 'Alerta'
        } else if (valorUmidade < 30) {
            statusumidade.textContent = 'Atenção'
        } else if (valorUmidade < 40) {
            statusumidade.textContent = 'Moderada / Seca'
        } else if (valorUmidade < 70 ) {
            statusumidade.textContent = 'Ideal / Conforto'
        } else if (valorUmidade < 85) {
            statusumidade.textContent = 'Alta / Abafado'
        }



    vento.forEach(card => {
        card.textContent = dado.vVento
    })
    dirVento.forEach(card => {
        card.textContent = dado.dirVento
    })
    statusDirVento.forEach(card => {
        const grau = parseFloat(dado.dirVento)
        if (grau < 22.5 || grau >= 337.5) {
            card.textContent = 'N';
        } else if (grau < 67.5) {
            card.textContent = 'NE';
        } else if (grau < 112.5) {
            card.textContent = 'E';
        } else if (grau < 157.5) {
            card.textContent = 'SE';
        } else if (grau < 202.5) {
            card.textContent = 'S';
        } else if (grau < 247.5) {
            card.textContent = 'SO';
        } else if (grau < 292.5) {
            card.textContent = 'O';
        } else {
            card.textContent = 'NO';
        }
    })



    pressao.textContent = dado.press
    if (parseFloat(dado.press) > 1022){
            statusPress.textContent = 'Alta Estabilidade'
        } else if (parseFloat(dado.press) > 1015){
            statusPress.textContent = 'Estável'
        } else if (parseFloat(dado.press) > 1008){
            statusPress.textContent = 'Condição Normal'
        } else if (parseFloat(dado.press) > 1000){
            statusPress.textContent = 'Instável'
        } else {
            statusPress.textContent = 'Alerta de Tempestade'
        }

    console.log(dado.time)
    

    const horaConvertida = converterParaHoraMT(dado.time)
    horaLeitura.textContent = horaConvertida.hora
}