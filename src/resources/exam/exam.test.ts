import request from 'supertest';
import app from '../../app';

describe('Exam API', () => {
  it('GET /exams - success', async () => {
    const result = await request(app).get('/exams').expect(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it('POST /exams - success', async () => {
    const examData = {
      subject: 'Mathematics',
      score: 85
    };
    
    const result = await request(app)
      .post('/exams')
      .send(examData)
      .expect(201);
      
    expect(result.body.subject).toEqual(examData.subject);
    expect(result.body.score).toEqual(examData.score);
  });
});