import { v4 as uuidv4 } from 'uuid';
import Abiturient from '../abiturient/abiturient.model';
import Exam from '../exam/exam.model';
import Teacher from '../teacher/teacher.model';

// Инициализация хранилищ с типами
const abiturients: Abiturient[] = [];
const exams: Exam[] = [];
const teachers: Teacher[] = [];

/* ========== Abiturient ========== */
export const getAbiturients = (): Abiturient[] => abiturients;

export const addAbiturient = (abiturientData: Omit<Abiturient, 'id'>): Abiturient => {
  const abiturient = new Abiturient({
    id: uuidv4(),
    ...abiturientData
  });
  abiturients.push(abiturient);
  return abiturient;
};

export const findAbiturientById = (id: string): Abiturient | undefined =>
  abiturients.find(a => a.id === id);

export const updateAbiturient = (id: string, data: Partial<Omit<Abiturient, 'id'>>): Abiturient | undefined => {
  const abiturient = findAbiturientById(id);
  if (abiturient) {
    Object.assign(abiturient, data);
  }
  return abiturient;
};

export const deleteAbiturient = (id: string): void => {
  const index = abiturients.findIndex(a => a.id === id);
  if (index !== -1) {
    abiturients.splice(index, 1);
  }
};

/* ========== Exam ========== */
export const getExams = (): Exam[] => exams;

export const addExam = (examData: Omit<Exam, 'id'>): Exam => {
  const exam = new Exam({
    id: uuidv4(),
    ...examData
  });
  exams.push(exam);
  return exam;
};

export const findExamById = (id: string): Exam | undefined =>
  exams.find(e => e.id === id);

export const updateExam = (id: string, data: Partial<Omit<Exam, 'id'>>): Exam | undefined => {
  const exam = findExamById(id);
  if (exam) {
    Object.assign(exam, data);
  }
  return exam;
};

export const deleteExam = (id: string): void => {
  const index = exams.findIndex(e => e.id === id);
  if (index !== -1) {
    exams.splice(index, 1);
  }
};

export const findExamsByAbiturientId = (abiturientId: string): Exam[] =>
  exams.filter(e => e.abiturientId === abiturientId);

export const findExamsByTeacherId = (teacherId: string): Exam[] =>
  exams.filter(e => e.teacherId === teacherId);

/* ========== Teacher ========== */
export const getTeachers = (): Teacher[] => teachers;

export const addTeacher = (teacherData: Omit<Teacher, 'id'>): Teacher => {
  const teacher = new Teacher({
    id: uuidv4(),
    ...teacherData
  });
  teachers.push(teacher);
  return teacher;
};

export const findTeacherById = (id: string): Teacher | undefined =>
  teachers.find(t => t.id === id);

export const updateTeacher = (id: string, data: Partial<Omit<Teacher, 'id'>>): Teacher | undefined => {
  const teacher = findTeacherById(id);
  if (teacher) {
    Object.assign(teacher, data);
  }
  return teacher;
};

export const deleteTeacher = (id: string): void => {
  const index = teachers.findIndex(t => t.id === id);
  if (index !== -1) {
    teachers.splice(index, 1);
  }
};

// Инициализация тестовыми данными (опционально)
export const initTestData = () => {
  abiturients.length = 0;
  exams.length = 0;
  teachers.length = 0;

  // Добавление тестовых данных
  const teacher1 = addTeacher({
    lastName: 'Иванов',
    firstName: 'Иван',
    degree: 'Доцент'
  });

  const abiturient1 = addAbiturient({
    lastName: 'Петров',
    firstName: 'Петр',
    numCertificate: 12345
  });

  addExam({
    subject: 'Математика',
    date: new Date().toISOString(),
    score: 85,
    abiturientId: abiturient1.id,
    teacherId: teacher1.id
  });
};