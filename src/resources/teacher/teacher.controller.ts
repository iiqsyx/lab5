import { Request, Response } from 'express';
import * as TeacherService from './teacher.service';

export const getAllTeachers = async (_req: Request, res: Response): Promise<void> => {
  const teachers = await TeacherService.getAllTeachers();
  res.json(teachers);
};

export const getTeacherById = async (req: Request, res: Response): Promise<void> => {
  const { teacherId } = req.params;
  if (!teacherId) {
    res.status(400).send('Teacher ID is required');
    return;
  }

  const teacher = await TeacherService.getTeacherById(teacherId);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
};

export const getTeacherExams = async (req: Request, res: Response): Promise<void> => {
  const { teacherId } = req.params;
  if (!teacherId) {
    res.status(400).send('Teacher ID is required');
    return;
  }

  const exams = await TeacherService.getTeacherExams(teacherId);
  res.json(exams);
};

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacher = await TeacherService.createTeacher(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const updateTeacher = async (req: Request, res: Response): Promise<void> => {
  const { teacherId } = req.params;
  if (!teacherId) {
    res.status(400).send('Teacher ID is required for update');
    return;
  }

  const teacher = await TeacherService.updateTeacher(teacherId, req.body);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
};

export const deleteTeacher = async (req: Request, res: Response): Promise<void> => {
  const { teacherId } = req.params;
  if (!teacherId) {
    res.status(400).send('Teacher ID is required for deletion');
    return;
  }

  await TeacherService.deleteTeacherWithExams(teacherId);
  res.status(204).send();
};