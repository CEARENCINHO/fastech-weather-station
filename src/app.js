import express from 'express'
import router from './router/metricaRoutes.js'
import conexaoMongoBD from './config/dbConnect.js'
import cors from 'cors';


const conexao = await conexaoMongoBD();

conexao.on('Erro', (erro) => {
    console.erro("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
app.use(cors())
app.use(express.json())
router(app)



export default app;