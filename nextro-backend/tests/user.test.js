/**
 * User test suite
 */
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

/**
 * First connect to MongoDB
 */
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

  beforeEach(async () => {
    await User.deleteMany({});
  });

  /**
   * Test #1: User creation & save
   */
  it('should create & save user successfully', async () => {
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

  /**
   * Test #2: Password hash
   */
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
    expect(savedUser.password).not.toBe('Password123');
  });

  /**
   * Test #3: Password validation
   */
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

    const wrongPasswordMatch = await bcrypt.compare('WrongPassword', newUser.password);
    expect(wrongPasswordMatch).toBe(false);
  });

  /**
   * Test #4: Duplicate email
   */
  it('should not allow duplicate email', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password123',
    };
    const newUser = new User(userData);
    await newUser.save();

    const duplicateUser = new User(userData);
    let err;
    try {
      await duplicateUser.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
    expect(err.code).toBe(11000);
  });

  /**
   * Test #5: Required field validation
   */
  it('should require email field', async () => {
    const userData = {
      name: 'John Doe',
      password: 'Password123',
    };
    const newUser = new User(userData);
    let err;
    try {
      await newUser.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
    expect(err.errors.email).toBeDefined();
  });
});
