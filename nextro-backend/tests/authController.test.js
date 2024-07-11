/**
 * Auth test
 */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../index');
const User = require('../../models/userModel');

describe('Auth Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should sign in user successfully', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('Password123', 10),
    });
    await user.save();

    const response = await request(app)
      .post('/auth/signin')
      .send({
        email: 'john.doe@example.com',
        password: 'Password123',
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeDefined();
  });

  it('should not sign in with incorrect password', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('Password123', 10),
    });
    await user.save();

    const response = await request(app)
      .post('/auth/signin')
      .send({
        email: 'john.doe@example.com',
        password: 'WrongPassword',
      });

    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Invalid email or password.');
  });

  it('should log out user successfully', async () => {
    const response = await request(app)
      .post('/auth/logout')
      .send();

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Logged out successfully');
  });
});
