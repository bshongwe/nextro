/**
 * Stripe tests
 */
const request = require('supertest');
const app = require('../index');

describe('Stripe API', () => {
  it('should create a Stripe payment intent', async () => {
    const res = await request(app)
      .post('/api/payments/stripe')
      .send({
        amount: 5000,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('clientSecret');
  });
});
