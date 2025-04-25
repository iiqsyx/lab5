import express from 'express';
import abiturientRouter from './resources/abiturient/abiturient.router.js';
import examRouter from './resources/exam/exam.router.js';
import teacherRouter from './resources/teacher/teacher.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

export default app;