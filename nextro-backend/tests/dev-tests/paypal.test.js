/**
 * Creates tests for Paypal
 */
const request = require('supertest');
const app = require('../index');

describe('PayPal Payment Endpoints', () => {
  it('should create a PayPal order', async () => {
    const res = await request(app)
      .post('/api/payments/paypal/create-order')
      .send({
        total: '50.00', // Amount in dollars
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should capture a PayPal order', async () => {
    const orderResponse = await request(app)
      .post('/api/payments/paypal/create-order')
      .send({
        total: '50.00', // Amount in dollars
      });

    const orderID = orderResponse.body.id;

    const captureResponse = await request(app)
      .post(`/api/payments/paypal/capture-order/${orderID}`)
      .send();

    expect(captureResponse.statusCode).toEqual(200);
    expect(captureResponse.body).toHaveProperty('status', 'COMPLETED');
  });
});
