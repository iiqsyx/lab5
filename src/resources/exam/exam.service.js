import {
  getExams,
  findExamById,
  addExam,
  updateExam,
  deleteExam,
  findAbiturientById,
  findTeacherById
} from '../repositories/memory.repository.js';

export const getAllExams = () => getExams();

export const getExamById = (id) => findExamById(id);

export const getExamTeachers = (examId) => {
  const exam = findExamById(examId);
  if (!exam?.teacherId) return [];
  const teacher = findTeacherById(exam.teacherId);
  return teacher ? [teacher] : [];
};

export const createExamWithValidation = (examData) => {
  // Валидация связанных сущностей
  if (examData.abiturientId && !findAbiturientById(examData.abiturientId)) {
    throw new Error('Abiturient not found');
  }
  if (examData.teacherId && !findTeacherById(examData.teacherId)) {
    throw new Error('Teacher not found');
  }

  return addExam(examData);
};

export const updateExamData = (id, data) =>
  updateExam(id, data);

export const deleteExamRecord = (id) =>
  deleteExam(id);