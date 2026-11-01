import Metrica from '../model/Metrica.js';

class metricaController{
    static async leitura(req,res){
        try{
            const leitura = await Metrica.create(req.body);
            res.status(201).json({message: 'gravado com sucesso', status: true})
            console.log(`Gravado com sucesso ${leitura}`)
        } catch (erro) {
            res.status(500).json({message: `falha na leitura: ${erro.message}`, status: false})
            console.log(`falha na leitura: ${erro.message}`)
        }
    }

    static async lerMetricas(req,res){
        try{
            const listaMetrica = await Metrica.find({});
            res.status(200).json(listaMetrica)
            console.log("Busca feita com sucesso!")

        } catch (erro) {
            res.status(500).json({message: `falha na busca por metricas: ${erro.message}`, status: false})
        }
    }
}

export default metricaController;