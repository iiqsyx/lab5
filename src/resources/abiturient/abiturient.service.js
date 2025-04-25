import {
  getAbiturients,
  findAbiturientById,
  addAbiturient,
  updateAbiturient,
  deleteAbiturient,
  findExamsByAbiturientId,
  updateExam,
  deleteExam
} from '../repositories/memory.repository.js';

export const getAllAbiturients = () => getAbiturients();

export const getAbiturientById = (id) => findAbiturientById(id);

export const getAbiturientExams = (abiturientId) =>
  findExamsByAbiturientId(abiturientId);

export const createAbiturient = (data) => addAbiturient(data);

export const updateAbiturientData = (id, data) =>
  updateAbiturient(id, data);

export const deleteAbiturientWithExams = (id) => {
  const abiturientExams = findExamsByAbiturientId(id);
  abiturientExams.forEach(exam => {
    if (exam.teacherId === null) {
      deleteExam(exam.id);
    } else {
      updateExam(exam.id, { abiturientId: null });
    }
  });

  return deleteAbiturient(id);
};