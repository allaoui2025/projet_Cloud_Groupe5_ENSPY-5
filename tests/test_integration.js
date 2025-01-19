const request = require('supertest');
const app = require('../server');

describe('Integration Tests', () => {
  it('should add a task', async () => {
    const response = await request(app)
      .post('/add')
      .send({ task: 'Learn Docker' });

    expect(response.status).toBe(302); // Redirection après ajout
  });
});
