import express from 'express';
import requestLogger from './middleware/requestLogger';
import errorHandler from './middleware/errorHandler';
import abiturientRouter from './resources/abiturient/abiturient.router';
import examRouter from './resources/exam/exam.router';
import teacherRouter from './resources/teacher/teacher.router';
import adminRouter from './resources/admin/admin.router';
import { authMiddleware } from './middleware/authenticate';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users/login', adminRouter); // /login доступен без аутентификации
app.use(authMiddleware);

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);
app.use('/users', adminRouter);

app.use(errorHandler);

export default app;