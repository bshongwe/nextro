# NeXtro Backend Tests 🛠️
This directory contains a suite of tests for the NeXtro backend, ensuring the robustness and reliability of the application's core functionalities. The tests cover user model operations, authentication processes, and payment handling.
<br></br>

## Test Suites 📋
### User Model Tests 🧑‍💻

**File:** `tests/userModel.test.js`

- **Test 1:** Create & save user successfully.
- **Test 2:** Hash password before saving.
- **Test 3:** Compare password correctly.
- **Test 4:** Fail to create user without required fields.
- **Test 5:** Fail to create user with duplicate email.
<br></br>

### Authentication Controller Tests 🔒

**File:** `tests/authController.test.js`

- **Test 1:** Sign in user successfully.
- **Test 2:** Handle incorrect password.
- **Test 3:** Log out user successfully.
<br></br>

### Payment Controller Tests 💳

**File:** `tests/paymentController.test.js`

- **Test 1:** Create a payment session successfully.
- **Test 2:** Handle payment creation error gracefully.
<br></br>

### User Sign-Up Controller Tests 📝

**File:** `tests/userSignUpController.test.js`

- **Test 1:** Create a user successfully.
- **Test 2:** Return 400 if required fields are missing.
- **Test 3:** Return 409 if user already exists.
- **Test 4:** Handle server errors gracefully.
<br></br>

## Running the Tests ▶️
To run the tests, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the root directory with the following variables:**
   ```env
   MONGODB_URI = mongodb+srv://<user-details_+_cluster_details>
   TOKEN_SECRET_KEY = "<secret_key>"
   FRONTEND_URL = http://localhost:3000
   STRIPE_SECRET_KEY = <secret_key>
   STRIPE_ENPOINT_WEBHOOK_SECRET_KEY = "<secret_key>"
   PAYPAL_CLIENT_ID = <paypal_client_id>
   PAYPAL_CLIENT_SECRET = <paypal_client_secret>
   FLUTTERWAVE_SECRET_KEY = <flutterwave_secret_key>
   ```

3. **Run the tests:**
   ```bash
   npm test
   ```
<br></br>

## Test Details 📜
### User Model Tests 🧑‍💻

- **Create & Save User:**
  Verifies that a user is created and saved successfully with all required fields.

- **Password Hashing:**
  Ensures that the password is hashed before saving the user.

- **Password Comparison:**
  Tests the password comparison function to validate correct password handling.

- **Validation Errors:**
  Checks for validation errors when required fields are missing.

- **Duplicate Email:**
  Ensures that duplicate emails cannot be used to create new users.
<br></br>

### Authentication Controller Tests 🔒

- **Sign In:**
  Validates that a user can sign in successfully with correct credentials.

- **Incorrect Password:**
  Ensures appropriate handling when an incorrect password is provided.

- **Log Out:**
  Confirms that a user can log out successfully.
<br></br>

### Payment Controller Tests 💳

- **Create Payment Session:**
  Validates successful creation of a payment session using Stripe.

- **Payment Error Handling:**
  Ensures graceful error handling when a payment creation error occurs.
<br></br>

### User Sign-Up Controller Tests 📝

- **Create User:**
  Confirms successful creation of a user with valid input data.

- **Missing Fields:**
  Checks for appropriate error handling when required fields are missing.

- **Duplicate User:**
  Ensures that attempting to create a user with an existing email returns a conflict error.

- **Server Error Handling:**
  Validates graceful handling of internal server errors.
<br></br>

## Contributing 🤝
We welcome contributions to improve our tests and ensure the reliability of NeXtro. If you find any issues or have suggestions for new tests, please open a pull request or issue.

---

Happy Coding!
