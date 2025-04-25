import { Router } from 'express';
import * as TeacherController from './teacher.controller.js';

const router = Router();

router.get('/', TeacherController.getAllTeachers);
router.get('/:teacherId', TeacherController.getTeacherById);
router.get('/:teacherId/exams', TeacherController.getTeacherExams);

router.post('/', TeacherController.createTeacher);
router.put('/:teacherId', TeacherController.updateTeacher);
router.delete('/:teacherId', TeacherController.deleteTeacher);

export default router;