/**
 * Swagger doc emulator
 */
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NeXtro API',
      version: '1.0.0',
      description: 'Swagger API documentation for the NeXtro eCommerce platform',
      termsOfService: '<http://example.com/terms/>',
      contact: {
        name: 'Ernest Bhekizwe Shongwe',
        url: 'http://www.github.com/bshongwe',
        email: 'shongwe.bhekizwe@gmail.com',
      },
      license: {
        name: 'ISC',
        url: 'http://example.com/license',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server',
      },
      {
        url: 'https://api.nextro.com', // will adjust this
        description: 'Production server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
