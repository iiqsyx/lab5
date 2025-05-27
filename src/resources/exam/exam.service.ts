import prisma from '../../common/prisma';
import { Prisma } from '.prisma/client';

export const getAllExams = async () => {
  return prisma.exam.findMany({
    include: {
      abiturient: true,
      teacher: true
    }
  });
};

export const getExamById = async (id: string) => {
  return prisma.exam.findUnique({
    where: { id },
    include: {
      abiturient: true,
      teacher: true
    }
  });
};

export const getExamTeachers = async (examId: string) => {
  const exam = await prisma.exam.findUnique({
    where: { id: examId },
    include: { teacher: true }
  });
  
  return exam?.teacher ? [exam.teacher] : [];
};

export const createExam = async (examData: Prisma.ExamCreateInput) => {
  // Проверка существования связанных сущностей
  if (examData.abiturient?.connect?.id) {
    const abiturient = await prisma.abiturient.findUnique({
      where: { id: examData.abiturient.connect.id }
    });
    if (!abiturient) throw new Error('Abiturient not found');
  }

  if (examData.teacher?.connect?.id) {
    const teacher = await prisma.teacher.findUnique({
      where: { id: examData.teacher.connect.id }
    });
    if (!teacher) throw new Error('Teacher not found');
  }

  return prisma.exam.create({
    data: examData,
    include: {
      abiturient: true,
      teacher: true
    }
  });
};

export const updateExam = async (
  id: string, 
  data: Prisma.ExamUpdateInput
) => {
  return prisma.exam.update({
    where: { id },
    data,
    include: {
      abiturient: true,
      teacher: true
    }
  });
};

export const deleteExam = async (id: string) => {
  return prisma.exam.delete({
    where: { id }
  });
};