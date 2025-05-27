import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV: string = process.env['NODE_ENV'] ?? 'development';
const PORT: number = parseInt(process.env['PORT'] ?? '4000', 10);
const JWT_SECRET_KEY: string = process.env['JWT_SECRET_KEY'] || throwError();

function throwError(): never {
  throw new Error('JWT_SECRET_KEY is not defined in .env file');
}

export { PORT, NODE_ENV, JWT_SECRET_KEY };