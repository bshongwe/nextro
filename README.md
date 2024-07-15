# 🛍️Webstack - Portfolio Project
MERN stack eCommerce web-based app for my ALX Software Engineering (Full Stack/ Backend) certification
<br></br>

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
```
npm run dev
```
<br></br>
- `frontend`: use the following command at the root of <b>nextro-frontend</b>
```
npm start
```
<br></br>
## API Routes
### For the frontend
sign up:
- `/api/product-details` (post)

addToCartProduct:
- `/api/addtocart` (post)

addToCartProductCount:
- `/api/countAddToCartProduct` (get)

addToCartProductView:
- `/api/view-card-product` (get)

updateCartProduct:
- `/api/update-cart-product` (post)

deleteCartProduct:
- `/api/delete-cart-product` (post)

searchProduct:
- `/api/search` (get)

filterProduct:
- `/api/filter-product` (post)

payment:
- `/api/checkout` (post)

getOrder:
- `/api/order-list` (get)

allOrder:
- `/api/all-order`
<br></br>
### For the backend
#### For users
- `router.post"/signup"`
- `router.post"/signin"`
- `router.get"/user-details"`
- `router.get"/userLogout"`

#### Admin panel 
- `router.get"/all-user"`
- `router.post"/update-user"`

#### Product
- `router.post"/upload-product"`
- `router.get"/get-product"`
- `router.post"/update-product"`
- `router.get"/get-categoryProduct"`
- `router.post"/category-product"`
- `router.post"/product-details"`
- `router.get"/search"`
- `router.post"/filter-product"`

#### User add to cart
- `- router.post"/addtocart"`
- `router.get"/countAddToCartProduct"`
- `router.get"/view-card-product"`
- `router.post"/update-cart-product"`
- `router.post"/delete-cart-product"`

#### Payment and order
- `router.post'/checkout'`
- `router.post'/webhook'`
- `router.get"/order-list"`
- `router.get"/all-order"`
<br></br>

# Research References Used
## API Development
- https://github.com/APIDevTools/swagger-express-middleware/issues/161#issue-553305427
