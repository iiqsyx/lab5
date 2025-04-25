import * as TeacherService from './teacher.service.js';

export const getAllTeachers = async (req, res) => {
  const teachers = await TeacherService.getAllTeachers();
  res.json(teachers);
};

export const getTeacherById = async (req, res) => {
  const teacher = await TeacherService.getTeacherById(req.params.teacherId);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
};

export const getTeacherExams = async (req, res) => {
  const exams = await TeacherService.getTeacherExams(req.params.teacherId);
  res.json(exams);
};

export const createTeacher = async (req, res) => {
  const teacher = await TeacherService.createTeacher(req.body);
  res.status(201).json(teacher);
};

export const updateTeacher = async (req, res) => {
  const teacher = await TeacherService.updateTeacher(
    req.params.teacherId,
    req.body
  );
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send('Teacher not found');
  }
};

export const deleteTeacher = async (req, res) => {
  await TeacherService.deleteTeacher(req.params.teacherId);
  res.status(204).send();
};