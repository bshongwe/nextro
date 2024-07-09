/**
 * Creates tests for Flutterwave
 */
const request = require('supertest');
const app = require('../index');

describe('Flutterwave Payment Endpoints', () => {
  it('should create a Flutterwave payment', async () => {
    const res = await request(app)
      .post('/api/payments/flutterwave')
      .send({
        amount: '50.00',
        currency: 'USD',
        redirect_url: 'http://localhost:3000/payment-success',
        email: 'test@example.com',
        phone_number: '1234567890',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status', 'success');
  });

  it('should verify a Flutterwave payment', async () => {
    const paymentResponse = await request(app)
      .post('/api/payments/flutterwave')
      .send({
        amount: '50.00',
        currency: 'USD',
        redirect_url: 'http://localhost:3000/payment-success',
        email: 'test@example.com',
        phone_number: '1234567890',
      });

    const transaction_id = paymentResponse.body.data.id;

    const verifyResponse = await request(app)
      .get(`/api/payments/flutterwave/verify/${transaction_id}`);

    expect(verifyResponse.statusCode).toEqual(200);
    expect(verifyResponse.body).toHaveProperty('status', 'success');
  });
});
