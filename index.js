import express from 'express'
const app = express();

// Servidor para rodar o front end
app.use(express.static('./src/public'));

app.listen(5500, '0.0.0.0', () => {
    console.log('Servidor rodando e liberado na rede!');
});