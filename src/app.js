import express from 'express'
import conexaoSQL from './config/dbConnect.js'

const app = express()
app.use(express.json())

// app.get('/', (req,res) => {
//     res.status(200).send('Servidor funcioando!')
// })

app.post('/leitura', async (req,res) => {
    try {
        const {
            temperatura,
            umidade,
            pressao,
            velocidade_vento,
            direcao_vento,
            luminosidade,
            condicao_ceu
        } = req.body

        const sql = `
            INSERT INTO leituras 
            (temperatura, umidade, pressao, velocidade_vento, direcao_vento, luminosidade, condicao_ceu) 
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `

        const valores = [
            temperatura ?? null,
            umidade ?? null,
            pressao ?? null,
            velocidade_vento ?? null,
            direcao_vento ?? null,
            luminosidade ?? null,
            condicao_ceu ?? null
        ]

        const [resultado] = await conexaoSQL.query(sql, valores)
        res.status(500).json({ mensagem: 'Gravado com sucesso' });
    } catch (erro) {
        console.error('Erro ao salvar no banco:', erro);
        res.status(500).json({ mensagem: 'Falha interna ao registrar leitura.' });
    }
})

export default app;