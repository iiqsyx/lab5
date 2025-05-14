import request from 'supertest';
import app from '../../app';

describe('Abiturient API', () => {
  it('GET /abiturients - success', async () => {
    const result = await request(app).get('/abiturients').expect(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it('POST /abiturients - success', async () => {
    const abiturientData = {
      lastName: 'Ivanov',
      firstName: 'Ivan',
      numCertificate: 'CT-12345'
    };
    
    const result = await request(app)
      .post('/abiturients')
      .send(abiturientData)
      .expect(201);
      
    expect(result.body.lastName).toEqual(abiturientData.lastName);
    expect(result.body.firstName).toEqual(abiturientData.firstName);
  });
});