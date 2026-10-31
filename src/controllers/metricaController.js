import Metrica from '../model/Metrica.js';

class metricaController{
    static async leitura(req,res){
        try{
            const newRead = await Metrica.create(req.body);
            res.status(201).json({message: 'gravado com sucesso', status: true})
        } catch (erro) {
            res.status(500).json({message: `falha na leitura: ${erro.message}`, status: false})
        }
    }

    static async lerMetricas(req,res){
        try{
            const listaMetrica = await Metrica.find({});
            res.status(200).json({listaMetrica})
        } catch (erro) {
            res.status(500).json({message: `falha na busca por metricas: ${erro.message}`, status: false})
        }
    }
}

export default metricaController;