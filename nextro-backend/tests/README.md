# 🧪 NeXtro API Tests

This directory contains the test suite for `NeXtro`'s Backend. The tests are
designed to ensure that all the functionalities of the API work as expected.
The tests are written using Jest and Supertest.

## 🗂️ Test Files

### 🔑 `auth.test.js`

This file contains tests for the authentication endpoints. It tests the
following functionalities:
- ✅ User registration
- ✅ User login
- ❌ Login with incorrect credentials
- 🆔 Fetching authenticated user profile

### 📦 `product.test.js`

This file contains tests for the product-related endpoints. It tests the
following functionalities:
- 🛍️ Fetching all products
- ➕ Creating a new product
- 🔍 Fetching a single product by ID
- ✏️ Updating a product by ID
- 🗑️ Deleting a product by ID

### 👥 `user.test.js`

This file contains tests for the user-related endpoints. It tests the following
functionalities:
- 👨‍👩‍👧‍👦 Fetching all users (admin only)
- 🆔 Fetching a user by ID (admin only)
- 🗑️ Deleting a user by ID (admin only)

### 💳 `stripe.test.js`

This file contains tests for the Stripe payment endpoints. It tests the
following functionalities:
- 💰 Creating a Stripe payment intent
- 📬 Handling Stripe webhook events

### 💸 `paypal.test.js`

This file contains tests for the PayPal payment endpoints. It tests the
following functionalities:
- 🛒 Creating a PayPal order
- ✅ Capturing a PayPal order

### 🌍 `flutterwave.test.js`

This file contains tests for the Flutterwave payment endpoints. It tests the
following functionalities:
- 💵 Creating a Flutterwave payment
- 🔍 Verifying a Flutterwave payment

## 🚀 Running the Tests

To run the tests, follow these steps:

1. **Install Dependencies**

   Ensure all dependencies are installed by running the installation script:

   ```sh
   ./install-dependencies.sh
   ```

2. **Setup Environment Variables**

   Make sure your `.env` file is correctly configured with all the required
   environment variables:

   ```env
   MONGODB_URI=mongodb+srv://<user-details_+_cluster_details>
   TOKEN_SECRET_KEY="<secret_key>"
   FRONTEND_URL=http://localhost:3000
   STRIPE_SECRET_KEY=<secret_key>
   STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY="<secret_key>"
   PAYPAL_CLIENT_ID=<paypal_client_id>
   PAYPAL_SECRET_KEY=<paypal_secret_key>
   PAYPAL_MODE=sandbox
   FLUTTERWAVE_SECRET_KEY=<flutterwave_secret_key>
   ```

3. **Run the Tests**

   Use the following command to run the tests:

   ```sh
   npm test
   ```

   This will execute all test files in the `tests` directory.

## ⚙️ Additional Configuration

### `jest.config.js`

The Jest configuration file. It includes settings for the test environment and
setup files.

### `jest.setup.js`

The Jest setup file. It increases the default timeout for tests to 30 seconds
to accommodate asynchronous operations.

## 🔔 Notes

- Ensure your MongoDB instance is running and accessible via the URI specified
in the `.env` file.
- The tests will create and delete data in your database. It's recommended to
use a test database for running these tests.
- The payment tests (Stripe, PayPal, Flutterwave) require valid credentials and
might perform actual transactions in test modes.

---

For any issues or questions regarding the tests, please refer to the main
project's documentation or contact me:
- [Yahoo](shongwe.bhekizwe@gmail.com)
- [GitHub](https://www.github.com/bshongwe)
- [Facebook](https://www.facebook.com/shongwe.bhekizwe)
- [Twitter](https://www.twitter.com/ernest_bshong)
- [LinkedIn](https://www.linkedin.com/in/ernest-shongwe)
- [Portfolio](https://personal-portfolio-2024-green.vercel.app/)
