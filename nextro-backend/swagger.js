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
      description: 'API documentation for the NeXtro eCommerce platform',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
