import { Router } from 'express';
import * as ExamController from './exam.controller.js';

const router = Router();

router.get('/', ExamController.getAllExams);
router.get('/:examId', ExamController.getExamById);
router.get('/:examId/teachers', ExamController.getExamTeachers);

router.post('/', ExamController.createExam);
router.put('/:examId', ExamController.updateExam);
router.delete('/:examId', ExamController.deleteExam);

export default router;