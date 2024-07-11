/**
 * Auth Test suite
 */
const request = require('supertest');
const app = require('../index');

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    await request(app).post('/api/auth/register').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    const res = await request(app).post('/api/auth/login').send({
      email: 'john@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
