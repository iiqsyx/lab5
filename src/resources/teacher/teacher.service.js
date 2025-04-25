import {
  getTeachers,
  findTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher,
  findExamsByTeacherId,
  updateExam,
  deleteExam
} from '../repositories/memory.repository.js';

export const getAllTeachers = () => getTeachers();

export const getTeacherById = (id) => findTeacherById(id);

export const getTeacherExams = (teacherId) =>
  findExamsByTeacherId(teacherId);

export const createTeacher = (data) => addTeacher(data);

export const updateTeacherData = (id, data) =>
  updateTeacher(id, data);

export const deleteTeacherWithExams = (id) => {
  // Обрабатываем связанные экзамены
  const teacherExams = findExamsByTeacherId(id);
  teacherExams.forEach(exam => {
    if (exam.abiturientId === null) {
      deleteExam(exam.id);
    } else {
      updateExam(exam.id, { teacherId: null });
    }
  });

  return deleteTeacher(id);
};