import { Request, Response } from 'express';
import * as ExamService from './exam.service';

export const getAllExams = async (_req: Request, res: Response): Promise<void> => {
  const exams = await ExamService.getAllExams();
  res.json(exams);
};

export const getExamById = async (req: Request, res: Response): Promise<void> => {
  const { examId } = req.params;
  if (!examId) {
    res.status(400).send('Exam ID is required');
    return;
  }

  const exam = await ExamService.getExamById(examId);
  if (exam) {
    res.json(exam);
  } else {
    res.status(404).send('Exam not found');
  }
};

export const getExamTeachers = async (req: Request, res: Response): Promise<void> => {
  const { examId } = req.params;
  if (!examId) {
    res.status(400).send('Exam ID is required');
    return;
  }

  const teachers = await ExamService.getExamTeachers(examId);
  res.json(teachers);
};

export const createExam = async (req: Request, res: Response): Promise<void> => {
  try {
    const exam = await ExamService.createExam(req.body);
    res.status(201).json(exam);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const updateExam = async (req: Request, res: Response): Promise<void> => {
  const { examId } = req.params;
  if (!examId) {
    res.status(400).send('Exam ID is required for update');
    return;
  }

  const exam = await ExamService.updateExam(examId, req.body);
  if (exam) {
    res.json(exam);
  } else {
    res.status(404).send('Exam not found');
  }
};

export const deleteExam = async (req: Request, res: Response): Promise<void> => {
  const { examId } = req.params;
  if (!examId) {
    res.status(400).send('Exam ID is required for deletion');
    return;
  }

  await ExamService.deleteExam(examId);
  res.status(204).send();
};