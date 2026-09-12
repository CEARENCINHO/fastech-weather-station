// ===========================================
//                 ABRIR MENU

// import { text } from "express"

// ===========================================
const btMenu = document.querySelector('#btMenu img')
const menu = document.querySelector('.navbar')
const navBar = document.querySelector('.navbar')

btMenu.addEventListener('click', () => {
    navBar.classList.toggle('ativo')
    
    if (navBar.classList.contains('ativo')){
        btMenu.setAttribute('src', 'img/x.svg')
    } else {
        btMenu.setAttribute('src','img/list.svg')
    }
    
})

// ===========================================
//                 hora na infor-tempo
// ===========================================

const hora = document.querySelector('#hora')
const data = new Date()

const dataFormatada = data.toLocaleDateString('pt-BR')
console.log(dataFormatada)
hora.textContent = ` ${dataFormatada}`

// ===========================================
//                 Classificação da iluminação
// ===========================================
function classificacaoLume(lume){
    if (lume >= 50000 ){
        return 'Sol Pleno'
    } else if (lume > 20000){
        return 'Ensolarado'
    } else if (lume > 5000){
        return 'Claridade'
    } else if (lume > 500){
        return 'Nublado'
    } else if (lume > 50){
        return 'Crepúsculo'
    } else {
        return 'Noite'
    }
}


// ===========================================
//                 Carregar dados do BD
// ===========================================

const tabela = document.querySelector('#corpoTabelaMetrica')

async function carregarDados() {
    try{

        const resposta = await fetch("http://localhost:3000/lerTabela")
        // VERIFICAR STATUS DE CONEXÃO
        if (!resposta.ok){
            console.log('Não conctou ao banco de dados')
            throw new Error(`Erro na requisição: ${resposta.status}`);
        } else {
            console.log('COnectado com sucesso!')
        }
        const dados = await resposta.json();
        const dado = dados.toReversed()


        const tempCard = document.querySelectorAll('#temperatura')
        const umidadeCard = document.querySelectorAll('#umidade')
        const ventoCard = document.querySelectorAll('#velocidade-vento')
        const dirVento = document.querySelectorAll('#direcaoVento')
        const dirVentoGraus = document.querySelectorAll('#direcaoVentoGraus')
        const data_hora = document.querySelector('#timenow')
        const condCeu = document.querySelector('.weather')
        const press = document.querySelector('#pressao')
        const statusPress = document.querySelector('#statusPress')
        const statusUmidade = document.querySelector('#statusumidade')
        
        // HORA DO ULTIMA COLETA DE DADOS
        const dataObj = new Date(dado[0]["data_hora"]);

        const data = dataObj.toLocaleDateString('pt-BR');
        const hora = dataObj.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        // CONDIÇÃO DO CEU DA SESSÃO INTRODUÇÃO
        const condicaoCeu = dado[0]['condicao_ceu'] 
        switch (condicaoCeu){
            case 'Ensolarado':
                condCeu.textContent = '☀️'
                break
            case 'Parcialmente nublado':
                condCeu.textContent = '⛅'
                break
            case 'Chuvoso':
                condCeu.textContent = '🌧️'
                break
            case 'Nublado':
                condCeu.textContent = '☁️'
                break
        }

        data_hora.textContent = `${data} às ${hora}`;

        // CARDS DA ULTIMA MEDIDA
        tempCard.forEach(card => {
            card.textContent = dado[0]['temperatura'];
        });
        umidadeCard.forEach(card => {
            card.textContent = dado[0]['umidade']
            
        })

        // CLASSIFICAÇÃO DA UMIDADE RELATIVA DO AR
        const valorUmidade = parseFloat(dado[0]['umidade'])
        const umiCard = document.querySelector('umidade')
        
        if (valorUmidade < 12){
            statusUmidade.textContent = 'Emergência'
        } else if (valorUmidade < 20) {
            statusUmidade.textContent = 'Alerta'
        } else if (valorUmidade < 30) {
            statusUmidade.textContent = 'Atenção'
        } else if (valorUmidade < 40) {
            statusPresstatusUmidade.textContent = 'Moderada / Seca'
        } else if (valorUmidade < 70) {
            statusUmidade.textContent = 'Ideal / Conforto'
        } else if (valorUmidade > 85) {
            statusUmidade.textContent = 'Alta / Abafado'
        }
        
        ventoCard.forEach(card => {
            card.textContent = dado[0]['velocidade_vento']
        })

        dirVentoGraus.forEach(card => {
            card.textContent = dado[0]['direcao_vento']
        })

        // card direção do vento
        dirVento.forEach(card => {
            const grau = parseFloat(dado[0]['direcao_vento'])
            if (grau <= 22.5 || grau >= 337.5) {
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
            } else if (grau >= 292.5) {
                card.textContent = 'NO';
            }
        })

        // card iluminação
        const lumeCard = document.querySelector('#iluminacao')

        lumeCard.textContent = classificacaoLume(parseFloat(dado[0]['luminosidade']))

        // card pressão
        press.textContent = dado[0]['pressao']
        
        if (parseFloat(dado[0]['pressao']) > 1022){
            statusPress.textContent = 'Alta Estabilidade'
        } else if (parseFloat(dado[0]['pressao']) > 1015){
            statusPress.textContent = 'Estável'
        } else if (parseFloat(dado[0]['pressao']) > 1008){
            statusPress.textContent = 'Condição Normal'
        } else if (parseFloat(dado[0]['pressao']) > 1000){
            statusPress.textContent = 'Instável'
        } else {
            statusPress.textContent = 'Alerta de Tempestade'
        }



        // tabela do dia
        for(let i = 0; i <= dado.length - 1; i += 5){
            
            const dataHora = dado[i]["data_hora"]
            const [dataIso,horaIso] = dataHora.split('T')
            const data = dataIso.split('-').reverse().join('/')
            const hora = horaIso.slice(0,5)

            if (dataFormatada == data){

                const temp = dado[i]["temperatura"]
                const umidade = dado[i]['umidade']
                const pressao = dado[i]['pressao']
                const vento = dado[i]['velocidade_vento']
                const dirvento = dado[i]['direcao_vento']
                const lume = classificacaoLume(parseFloat(dado[i]['luminosidade']))
                const condCeu = dado[i]['condicao_ceu']
                
                tabela.innerHTML += `
                <tr>
                        <th>${hora}</th>
                        <th style='color: #fff;'>${temp}°C</th>
                        <th style="color: #1BD3D1;" >${umidade}%</th>
                        <th style="color: #F97316;">${vento} km/h</th>
                        <th>${dirvento}°</th>
                        <th>${lume}</th>
                        <th style="color: #3B82F6;">${condCeu}</th>
                        <th style="color: #F97316;">${pressao} hPa</th>
                    </tr>
                `
            }
        }
        

    } catch (error) {
        console.error("Falaha ao buscar dados da API", error)
    }
}

carregarDados()
