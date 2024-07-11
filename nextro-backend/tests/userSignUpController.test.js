/**
 * User signup test
 */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../index');
const User = require('../../models/userModel');

describe('User SignUp Controller', () => {
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

  it('should create a user successfully', async () => {
    const response = await request(app)
      .post('/auth/signup')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'Password123',
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.email).toBe('john.doe@example.com');
  });

  it('should return 400 if required fields are missing', async () => {
    const response = await request(app)
      .post('/auth/signup')
      .send({ email: 'john.doe@example.com' });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Please provide email, password, and name.');
  });

  it('should return 409 if user already exists', async () => {
    const user = new User({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'Password123',
    });
    await user.save();

    const response = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'Password123',
      });

    expect(response.status).toBe(409);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('User already exists.');
  });

  it('should handle server errors gracefully', async () => {
    jest.spyOn(User.prototype, 'save').mockImplementationOnce(() => {
      throw new Error('Internal Server Error');
    });

    const response = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Jake Doe',
        email: 'jake.doe@example.com',
        password: 'Password123',
      });

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Internal Server Error');
  });
});
