import prisma from '../../common/prisma';
import type { Prisma } from '.prisma/client';

export const getAllAbiturients = async () => {
  return prisma.abiturient.findMany();
};

export const getAbiturientById = async (id: string) => {
  return prisma.abiturient.findUnique({
    where: { id },
    include: { exams: true }
  });
};

export const getAbiturientExams = async (abiturientId: string) => {
  return prisma.exam.findMany({
    where: { abiturientId }
  });
};

export const createAbiturient = async (data: Prisma.AbiturientCreateInput) => {
  return prisma.abiturient.create({ data });
};

export const updateAbiturient = async (id: string, data: Prisma.AbiturientUpdateInput) => {
  return prisma.abiturient.update({
    where: { id },
    data
  });
};

export const deleteAbiturientWithExams = async (id: string) => {
  return prisma.$transaction([
    prisma.exam.deleteMany({ where: { abiturientId: id } }),
    prisma.abiturient.delete({ where: { id } })
  ]);
};