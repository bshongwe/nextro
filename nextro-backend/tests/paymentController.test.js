/**
 * Payment controller tests
 */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../index');
const User = require('../../models/userModel');

describe('Payment Controller', () => {
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

  it('should create a payment session successfully', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('Password123', 10),
    });
    await user.save();

    const response = await request(app)
      .post('/payments/create')
      .send({
        userId: user._id,
        cartItems: [
          {
            productId: {
              productName: 'Product 1',
              productImage: 'http://example.com/image1.jpg',
              sellingPrice: 1000,
              _id: 'product1',
            },
            quantity: 1,
          },
        ],
      });

    expect(response.status).toBe(303);
    expect(response.body.id).toBeDefined();
  });

  it('should handle payment creation error gracefully', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('Password123', 10),
    });
    await user.save();

    jest.spyOn(stripe.checkout.sessions, 'create').mockImplementationOnce(() => {
      throw new Error('Stripe Error');
    });

    const response = await request(app)
      .post('/payments/create')
      .send({
        userId: user._id,
        cartItems: [
          {
            productId: {
              productName: 'Product 1',
              productImage: 'http://example.com/image1.jpg',
              sellingPrice: 1000,
              _id: 'product1',
            },
            quantity: 1,
          },
        ],
      });

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Stripe Error');
  });
});
