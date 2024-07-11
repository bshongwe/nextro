/**
 * User Model Test
 */
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

describe('User Model Test', () => {
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

  it('create & save user successfully', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password123',
      profilePic: '',
      role: 'customer',
    };
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.profilePic).toBe(userData.profilePic);
    expect(savedUser.role).toBe(userData.role);
  });

  it('should hash password before saving', async () => {
    const userData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'Password123',
    };
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    const isMatch = await bcrypt.compare('Password123', savedUser.password);

    expect(isMatch).toBe(true);
  });

  it('should compare password correctly', async () => {
    const userData = {
      name: 'Jake Doe',
      email: 'jake.doe@example.com',
      password: 'Password123',
    };
    const newUser = new User(userData);
    await newUser.save();

    const isMatch = await bcrypt.compare('Password123', newUser.password);
    expect(isMatch).toBe(true);
  });

  it('should fail to create user without required fields', async () => {
    const userData = {
      name: 'Jane Doe',
      password: 'Password123',
    };
    const invalidUser = new User(userData);

    let err;
    try {
      await invalidUser.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('should fail to create user with duplicate email', async () => {
    const userData1 = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password123',
    };

    const userData2 = {
      name: 'Jane Doe',
      email: 'john.doe@example.com',
      password: 'Password123',
    };

    const user1 = new User(userData1);
    await user1.save();

    const user2 = new User(userData2);

    let err;
    try {
      await user2.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error);
    expect(err.code).toBe(11000); // Duplicate key error code
  });
});
