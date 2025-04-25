import {
  getTeachers,
  findTeacherById,
  addTeacher,
  updateTeacher as updateTeacherRepo,
  deleteTeacher,
  findExamsByTeacherId,
  updateExam,
  deleteExam
} from '../repositories/memory.repository';
import type Teacher from './teacher.model';
import type Exam  from '../exam/exam.model';

export const getAllTeachers = (): Teacher[] => getTeachers();

export const getTeacherById = (id: string): Teacher | undefined =>
  findTeacherById(id);

export const getTeacherExams = (teacherId: string): Exam[] =>
  findExamsByTeacherId(teacherId);

export const createTeacher = (data: Omit<Teacher, 'id'>): Teacher =>
  addTeacher(data);

export const updateTeacher = (id: string, data: Partial<Omit<Teacher, 'id'>>): Teacher | undefined =>
  updateTeacherRepo(id, data);

export const deleteTeacherWithExams = (id: string): void => {
  const teacherExams = findExamsByTeacherId(id);
  teacherExams.forEach(exam => {
    if (exam.abiturientId === null) {
      deleteExam(exam.id);
    } else {
      updateExam(exam.id, { teacherId: null });
    }
  });

  deleteTeacher(id);
};