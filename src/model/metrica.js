import mongoose from 'mongoose';

const dadoBD = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    temp: {type: Number},
    umidade: {type: Number},
    press: {type: Number},
    vVento: {type: Number},
    dirVento: {type: Number},
    time: {type: Date, default: Date.now}
})

const metrica = mongoose.model('metrica',dadoBD);

export default metrica;