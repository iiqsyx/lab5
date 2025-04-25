const abiturients = [];
const exams = [];
const teachers = [];


/* ========== Abiturient ========== */
export const getAbiturients = () => abiturients;

export const addAbiturient = (abiturient) => {
  abiturients.push(abiturient);
  return abiturient;
};

export const findAbiturientById = (id) =>
  abiturients.find(a => a.id === id);

export const updateAbiturient = (id, data) => {
  const abiturient = findAbiturientById(id);
  if (abiturient) Object.assign(abiturient, data);
  return abiturient;
};

export const deleteAbiturient = (id) => {
  const index = abiturients.findIndex(a => a.id === id);
  if (index !== -1) abiturients.splice(index, 1);
};

/* ========== Exam ========== */
export const getExams = () => exams;

export const addExam = (exam) => {
  exams.push(exam);
  return exam;
};

export const findExamById = (id) =>
  exams.find(e => e.id === id);

export const updateExam = (id, data) => {
  const exam = findExamById(id);
  if (exam) Object.assign(exam, data);
  return exam;
};

export const deleteExam = (id) => {
  const index = exams.findIndex(e => e.id === id);
  if (index !== -1) exams.splice(index, 1);
};

export const findExamsByAbiturientId = (abiturientId) =>
  exams.filter(e => e.abiturientId === abiturientId);

export const findExamsByTeacherId = (teacherId) =>
  exams.filter(e => e.teacherId === teacherId);

/* ========== Teacher ========== */
export const getTeachers = () => teachers;

export const addTeacher = (teacher) => {
  teachers.push(teacher);
  return teacher;
};

export const findTeacherById = (id) =>
  teachers.find(t => t.id === id);

export const updateTeacher = (id, data) => {
  const teacher = findTeacherById(id);
  if (teacher) Object.assign(teacher, data);
  return teacher;
};

export const deleteTeacher = (id) => {
  const index = teachers.findIndex(t => t.id === id);
  if (index !== -1) teachers.splice(index, 1);
};

