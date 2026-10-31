import mongoose from 'mongoose';

async function conectDatabase() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection
}

export default conectDatabase;

// Configuração inicial para se conectar com o mongoBD 