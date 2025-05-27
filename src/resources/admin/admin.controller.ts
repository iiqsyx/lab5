import bcrypt from 'bcrypt';
import prisma from '../../common/prisma';
import { JWT_SECRET_KEY } from '../../common/config';
import jwt from 'jsonwebtoken';

export const createAdmin = async (data: { login: string; password: string }) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.admin.create({
    data: {
      login: data.login,
      password: hashedPassword,
    },
  });
};

export const login = async (data: { login: string; password: string }) => {
  const admin = await prisma.admin.findUnique({
    where: { login: data.login },
  });
  if (!admin) {
    throw new Error('Invalid login or password');
  }
  const isPasswordValid = await bcrypt.compare(data.password, admin.password);
  if (!isPasswordValid) {
    throw new Error('Invalid login or password');
  }
  const token = jwt.sign(
    { id: admin.id, login: admin.login },
    JWT_SECRET_KEY,
    { expiresIn: '1h' } 
  );
  return { token };
};