# 🛍️ NeXtro (Webstack - Portfolio Project)
![Visits Badge](https://hits.sh/github.com/bshongwe/nextro.svg?style=flat-square&label=Visits&color=blue)
![GitHub Repo Stars](https://img.shields.io/github/stars/bshongwe/nextro)
![GitHub Forks](https://img.shields.io/github/forks/bshongwe/nextro)
![GitHub Issues](https://img.shields.io/github/issues/bshongwe/nextro)
![GitHub License](https://img.shields.io/github/license/bshongwe/nextro)

MERN stack eCommerce web-based app for my ALX Software Engineering (Full Stack/ Backend) certification
<br></br>
NeXtro is a full-stack eCommerce platform built with the MERN stack (MongoDB, Express, React, Node.js). The platform features user authentication, product browsing, cart management, order processing, and secure payments with Stripe and PayPal. The application supports both customer and administrator roles, allowing for comprehensive management of products, users, and orders.

## Table of Contents
- [Setup Dev Environment](#setup-dev-environment)
- [App Development & User Stories](#app-development--user-stories)
- [Project Presentation](#project-presentation)
- [Repo/ Project Contents](#repo-project-contents)
  - [Web Infrastructure Diagram](#web-infrastructure-diagram)
  - [Development Servers](#development-servers)
  - [API Routes](#api-routes)
- [Research References Used](#research-references-used)

### SETUP DEV ENVIRONMENT:
🛠️ Kanban, draw.io, GitHub & GitLab and deployment setup
<br></br>

### APP DEVELOPMENT & USER STORIES:
- 🔐 User auth (signup, login, JWT), basic UI
- 🛒 Product management (CRUD), with admin functionalities
- 🛍️ Shopping cart functionality, integrated with user profile management
- 💳 Checkout process, integrate with payment gateway
- 📦 Order management and user order history
- ⭐ Product reviews and ratings, including search and filtering
- 🧪 Testing, fix bugs, optimize performance (mainly Git Lab)
- 🚀📄 Final deployment, write documentation (Git Lab & Git Hub)
<br></br>

### PROJECT PRESENTATION:
📊 Project presentation, final review and adjustments (Google slide & Kanban Workflow)
<br></br>

# Repo/ Project Contents
## Web Infrastructure Diagram
<img src="NeXtro-Draw-IO.PNG">
<br></br>

## Developement Servers
To run the project's servers, first run the backend server, thereater, the frontend server:
- `backend`: use the following command at the root of <b>nextro-backend</b>

```bash
npm run dev
```
<br></br>
- `frontend`: use the following command at the root of <b>nextro-frontend</b>

```bash
npm start
```
<br></br>

## API Routes

| **Type**    | **Main Group**      | **Endpoint**                  | **Method** | **Description**                               | **Status Responses**     |
|-------------|---------------------|-------------------------------|------------|-----------------------------------------------|--------------------------|
| Frontend    | 🛍️ Product Details  | `/api/product-details`        | POST       | For signing up users                          | 200, 400, 409, 500       |
| Backend     | 🛍️ Products         | `router.post"/upload-product"`| POST       | Upload product                                | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.get"/get-product"`    | GET        | Get product details                           | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.post"/update-product"`| POST       | Update product                                | 200, 400, 409, 500       |
| Backend     | 🛍️ Products         | `router.get"/get-categoryProduct"` | GET   | Get products by category                      | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.post"/category-product"` | POST   | Get products by category                      | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.post"/product-details"` | POST    | Get product details                           | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.get"/search"`         | GET        | Search for a product                          | 200, 400, 500            |
| Backend     | 🛍️ Products         | `router.post"/filter-product"`| POST       | Filter products                               | 200, 400, 500            |
| Frontend    | 🛒 Cart              | `/api/addtocart`              | POST       | Add product to cart                           | 200, 400, 409, 500       |
| Frontend    | 🛒 Cart              | `/api/countAddToCartProduct`  | GET        | Get the count of products in the cart         | 200, 400, 500            |
| Frontend    | 🛒 Cart              | `/api/view-card-product`      | GET        | View products in the cart                     | 200, 400, 500            |
| Frontend    | 🛒 Cart              | `/api/update-cart-product`    | POST       | Update product in the cart                    | 200, 400, 409, 500       |
| Frontend    | 🛒 Cart              | `/api/delete-cart-product`    | POST       | Delete product from the cart                  | 200, 400, 409, 500       |
| Backend     | 🛒 Cart              | `router.post"/addtocart"`     | POST       | Add product to cart                           | 200, 400, 409, 500       |
| Backend     | 🛒 Cart              | `router.get"/countAddToCartProduct"` | GET | Get count of products in cart                 | 200, 400, 500            |
| Backend     | 🛒 Cart              | `router.get"/view-card-product"` | GET   | View products in cart                         | 200, 400, 500            |
| Backend     | 🛒 Cart              | `router.post"/update-cart-product"` | POST | Update product in cart                        | 200, 400, 409, 500       |
| Backend     | 🛒 Cart              | `router.post"/delete-cart-product"` | POST | Delete product from cart                      | 200, 400, 409, 500       |
| Frontend    | 🔍 Product Search    | `/api/search`                 | GET        | Search for a product                          | 200, 400, 500            |
| Frontend    | 🗂️ Product Filter    | `/api/filter-product`         | POST       | Filter products                               | 200, 400, 500            |
| Frontend    | 💳 Payment           | `/api/checkout`               | POST       | Payment processing                            | 200, 400, 500            |
| Backend     | 💳 Payment and Order | `router.post'/checkout'`      | POST       | Checkout                                      | 200, 400, 500            |
| Backend     | 💳 Payment and Order | `router.post'/webhook'`       | POST       | Payment webhook                               | 200, 400, 500            |
| Frontend    | 📦 Order             | `/api/order-list`             | GET        | Get user order list                           | 200, 400, 500            |
| Frontend    | 📦 Order             | `/api/all-order`              | GET        | Get all orders                                | 200, 400, 500            |
| Backend     | 💳 Payment and Order | `router.get"/order-list"`     | GET        | Get user order list                           | 200, 400, 500            |
| Backend     | 💳 Payment and Order | `router.get"/all-order"`      | GET        | Get all orders                                | 200, 400, 500            |
| Backend     | 🔐 Users             | `router.post"/signup"`        | POST       | Sign up users                                 | 200, 400, 409, 500       |
| Backend     | 🔐 Users             | `router.post"/signin"`        | POST       | Sign in users                                 | 200, 400, 401, 500       |
| Backend     | 🔐 Users             | `router.get"/user-details"`   | GET        | Get user details                              | 200, 400, 401, 500       |
| Backend     | 🔐 Users             | `router.get"/userLogout"`     | GET        | Log out users                                 | 200, 400, 401, 500       |
| Backend     | 🛠️ Admin Panel       | `router.get"/all-user"`       | GET        | Get all users                                 | 200, 400, 401, 500       |
| Backend     | 🛠️ Admin Panel       | `router.post"/update-user"`   | POST       | Update user details                           | 200, 400, 401, 409, 500  |

<br></br>

# Technologies Used

✔️ Frontend: React, React Router, Tailwind CSS</br>
✔️ Backend: Node.js, Express, MongoDB, Mongoose</br>
✔️ State Management: Redux Toolkit</br>
✔️ Authentication: JWT</br>
✔️ Payments: Stripe (implemented), Flutterwave and PayPal (in development)</br>
✔️ Deployment: Vercel (client-side), MongoDB Atlas (database), Cloudinary (product images)</br>
✔️ CI/CD: GitHub Actions, GitLab CI/CD
<br></br>
 
 # Further Development Plans
 
✔️ Further UI/UX enhancements</br>
✔️ Adding more features such as wish lists and product recommendations</br>
✔️ Continuous performance and scalability improvements
 <br></br>
 
# Research References Used
## API Development References
- https://github.com/APIDevTools/swagger-express-middleware/issues/161#issue-553305427
- https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
- https://medium.com/@holasoymalva/how-to-make-your-first-rest-api-in-node-js-82c05fca9106
<br></br>

## NeXtro Development References
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/en)
- [Redux-Toolkit](https://react-redux.js.org/introducti...)
- [React Router](https://reactrouter.com/en/main/start...)
- [Mongoose](https://mongoosejs.com/)
- [JsonWebToken](https://www.npmjs.com/package/jsonweb...)
- [Dotenv](https://www.npmjs.com/package/dotenv)
