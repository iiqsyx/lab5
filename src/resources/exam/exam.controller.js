import * as ExamService from './exam.service.js';

export const getAllExams = async (req, res) => {
  const exams = await ExamService.getAllExams();
  res.json(exams);
};

export const getExamById = async (req, res) => {
  const exam = await ExamService.getExamById(req.params.examId);
  if (exam) {
    res.json(exam);
  } else {
    res.status(404).send('Exam not found');
  }
};

export const getExamTeachers = async (req, res) => {
  const teachers = await ExamService.getExamTeachers(req.params.examId);
  res.json(teachers);
};

export const createExam = async (req, res) => {
  const exam = await ExamService.createExam(req.body);
  res.status(201).json(exam);
};

export const updateExam = async (req, res) => {
  const exam = await ExamService.updateExam(
    req.params.examId,
    req.body
  );
  if (exam) {
    res.json(exam);
  } else {
    res.status(404).send('Exam not found');
  }
};

export const deleteExam = async (req, res) => {
  await ExamService.deleteExam(req.params.examId);
  res.status(204).send();
};