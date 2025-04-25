import {
  getExams,
  findExamById,
  addExam,
  updateExam as updateExamRepo,
  findAbiturientById,
  findTeacherById
} from '../repositories/memory.repository';
import Exam from './exam.model';
import Teacher from '../teacher/teacher.model';

export const getAllExams = (): Exam[] => getExams();

export const getExamById = (id: string): Exam | undefined => findExamById(id);

export const getExamTeachers = (examId: string): Teacher[] => {
  const exam = findExamById(examId);
  if (!exam?.teacherId) return [];

  const teacher = findTeacherById(exam.teacherId);
  return teacher ? [teacher] : [];
};

export const createExam = (examData: Omit<Exam, 'id'>): Exam => {
  // Валидация связанных сущностей
  if (examData.abiturientId && !findAbiturientById(examData.abiturientId)) {
    throw new Error('Abiturient not found');
  }
  if (examData.teacherId && !findTeacherById(examData.teacherId)) {
    throw new Error('Teacher not found');
  }

  return addExam(examData);
};

export const updateExam = (id: string, data: Partial<Omit<Exam, 'id'>>): Exam | undefined =>
  updateExamRepo(id, data);

export const deleteExam = (id: string): void => {
  deleteExam(id);
};