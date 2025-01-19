const request = require('supertest');
const app = require('../server');

describe('Functionality Tests', () => {
  it('should display the homepage', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Liste de tâches');
  });
});
