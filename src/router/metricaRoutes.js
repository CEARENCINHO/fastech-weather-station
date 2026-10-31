import express from 'exporess';
import metricaController from '../controllers/metricaController.js';

const router = express.Router();

router.post('/leitura',metricaController.leitura)

export default router;