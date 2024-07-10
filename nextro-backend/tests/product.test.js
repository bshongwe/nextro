/**
 * Product tests
 */
const request = require('supertest');
const app = require('../index');

describe('Product API', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Laptop',
        description: 'A powerful laptop',
        price: 999.99,
        category: 'Electronics',
        stock: 10,
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('product');
  });
});
