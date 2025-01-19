const request = require('supertest');
const app = require('../server'); // Importer votre serveur

describe('GET /', () => {
  it('should return 200 and HTML content', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Liste de tâches');
  });
});
