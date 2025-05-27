import prisma from '../../common/prisma';
import { Prisma } from '.prisma/client';

export const getAllTeachers = async () => {
  return prisma.teacher.findMany({
    include: {
      exams: {
        include: {
          abiturient: true
        }
      }
    }
  });
};

export const getTeacherById = async (id: string) => {
  return prisma.teacher.findUnique({
    where: { id },
    include: {
      exams: {
        include: {
          abiturient: true
        }
      }
    }
  });
};

export const getTeacherExams = async (teacherId: string) => {
  return prisma.exam.findMany({
    where: { teacherId },
    include: {
      abiturient: true
    }
  });
};

export const createTeacher = async (data: Prisma.TeacherCreateInput) => {
  return prisma.teacher.create({
    data,
    include: {
      exams: true
    }
  });
};

export const updateTeacher = async (
  id: string,
  data: Prisma.TeacherUpdateInput
) => {
  return prisma.teacher.update({
    where: { id },
    data,
    include: {
      exams: true
    }
  });
};

export const deleteTeacherWithExams = async (id: string) => {
  return prisma.$transaction([
    // Удаляем экзамены без абитуриентов
    prisma.exam.deleteMany({
      where: {
        teacherId: id,
        abiturientId: null
      }
    }),
    // Обнуляем teacherId у остальных экзаменов
    prisma.exam.updateMany({
      where: {
        teacherId: id,
        abiturientId: { not: null }
      },
      data: { teacherId: null }
    }),
    // Удаляем преподавателя
    prisma.teacher.delete({
      where: { id }
    })
  ]);
};