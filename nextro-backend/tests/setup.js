/**
 * Setup test for DB
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Connect to the test database
 */
beforeAll(async () => {
  const url = process.env.MONGO_TEST_URI;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

/**
 * Close the database connection after tests
 */
afterAll(async () => {
  await mongoose.connection.close();
});
