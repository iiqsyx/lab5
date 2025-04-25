import * as abiturientRepository from '../repositories/memory.repository';
import Abiturient from './abiturient.model';
import Exam from '../exam/exam.model';

export const getAllAbiturients = (): Abiturient[] => abiturientRepository.getAbiturients();

export const getAbiturientById = (id: string): Abiturient | undefined =>
  abiturientRepository.findAbiturientById(id);

export const getAbiturientExams = (abiturientId: string): Exam[] =>
  abiturientRepository.findExamsByAbiturientId(abiturientId);

export const createAbiturient = (abiturientData: Omit<Abiturient, 'id'>): Abiturient => {
  const newAbiturient = new Abiturient(abiturientData);
  return abiturientRepository.addAbiturient(newAbiturient);
};

export const updateAbiturient = (id: string, updateData: Partial<Omit<Abiturient, 'id'>>): Abiturient | null => {
  const abiturient = abiturientRepository.findAbiturientById(id);
  if (!abiturient) return null;

  Object.assign(abiturient, updateData);
  return abiturient;
};

export const deleteAbiturientWithExams = (id: string): void => {
  const exams = abiturientRepository.findExamsByAbiturientId(id);

  exams.forEach(exam => {
    if (exam.teacherId === null) {
      abiturientRepository.deleteExam(exam.id);
    } else {
      abiturientRepository.updateExam(exam.id, { abiturientId: null });
    }
  });

  abiturientRepository.deleteAbiturient(id);
};