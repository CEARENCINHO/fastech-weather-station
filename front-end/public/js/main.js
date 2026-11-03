import {buscarDados} from './api.js';
import { abriMenu } from './funcoesDOM/divAbriMenu.js';
import { part2 } from './funcoesDOM/ultimaLeitura.js';
import {tabelaDados} from './funcoesDOM/tabelaDados.js'

function horaCerta(){
    const hora = document.querySelector('#hora')
    const data = new Date()

    const dataFormatada = data.toLocaleDateString('pt-BR')
    console.log(dataFormatada)
    hora.textContent = ` ${dataFormatada}`
}

async function carregarDados() {
    const dados = await buscarDados();
    dados.reverse()
    part2(dados[0])
    tabelaDados(dados)
    

}

abriMenu()
horaCerta()
carregarDados();