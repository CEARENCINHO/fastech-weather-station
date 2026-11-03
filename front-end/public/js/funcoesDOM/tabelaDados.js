import {converterParaHoraMT} from './converterHora.js'

export function tabelaDados(dado){
    const tabela = document.querySelector("#corpoTabelaMetrica")
    for(let i = 0; i <= dado.length - 1; i++){
        
        const horaConvertida = converterParaHoraMT(dado[i].time)
        const data = new Date()
        const dataAtual = data.toLocaleDateString('pt-BR')

        if (horaConvertida.data == dataAtual){   

            const temp = dado[i].temp
            const umidade = dado[i].umidade
            const pressao = dado[i].press
            const vento = dado[i].vVento
            const dirvento = dado[i].dirVento
            
            tabela.innerHTML += `
            <tr>
                    <th>${horaConvertida.hora}</th>
                    <th style='color: #fff;'>${temp}°C</th>
                    <th style="color: #1BD3D1;" >${umidade}%</th>
                    <th style="color: #F97316;">${vento} km/h</th>
                    <th>${dirvento}°</th>
                    <th style="color: #F97316;">${pressao} hPa</th>
                </tr>
            `
        }
    }
}