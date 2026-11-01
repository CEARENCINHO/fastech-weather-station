import express from 'express';
import metricaController from '../controllers/metricaController.js';

const router = express.Router();

router.post('/leitura',metricaController.leitura)
router.get('/lerTabela',metricaController.lerMetricas)

export default router;