import { Router } from 'express';
import * as AbiturientController from './abiturient.controller.js';

const router = Router();

router.get('/', AbiturientController.getAllAbiturients);
router.get('/:abiturientId', AbiturientController.getAbiturientById);
router.get('/:abiturientId/exams', AbiturientController.getAbiturientExams);

router.post('/', AbiturientController.createAbiturient);
router.put('/:abiturientId', AbiturientController.updateAbiturient);
router.delete('/:abiturientId', AbiturientController.deleteAbiturient);

export default router;