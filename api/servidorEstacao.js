import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
// servidor para rodar o back end
app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor iniciado')
})