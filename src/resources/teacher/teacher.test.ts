import request from 'supertest';
import app from '../../app';

describe('Teacher API', () => {
  it('GET /teachers - success', async () => {
    const result = await request(app).get('/teachers').expect(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it('POST /teachers - success', async () => {
    const teacherData = {
      lastName: 'Smith',
      firstName: 'John',
      degree: 'PhD'
    };
    
    const result = await request(app)
      .post('/teachers')
      .send(teacherData)
      .expect(201);
      
    expect(result.body.lastName).toEqual(teacherData.lastName);
    expect(result.body.degree).toEqual(teacherData.degree);
  });
});