/**
 * Routes
 */
const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const paymentController = require('../controller/order/paymentController')
const webhooks = require('../controller/order/webhook')
const orderController = require('../controller/order/order.controller')
const allOrderController = require('../controller/order/allOrder.controller')


/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Create a new user account
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/signup",userSignUpController)

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign in a user
 *     description: Authenticate a user
 *     responses:
 *       200:
 *         description: User authenticated successfully
 */
router.post("/signin",userSignInController)

/**
 * @swagger
 * /user-details:
 *   get:
 *     summary: Get user details
 *     description: Retrieve details of the authenticated user
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 */
router.get("/user-details",authToken,userDetailsController)

/**
 * @swagger
 * /userLogout:
 *   get:
 *     summary: Logout a user
 *     description: Logout the authenticated user
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.get("/userLogout",userLogout)


// Admin Panel

/**
 * @swagger
 * /all-user:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users (Admin only)
 *     responses:
 *       200:
 *         description: User list retrieved successfully
 */
router.get("/all-user",authToken,allUsers)

/**
 * @swagger
 * /update-user:
 *   post:
 *     summary: Update user details
 *     description: Update the details of a user
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.post("/update-user",authToken,updateUser)


// Product

/**
 * @swagger
 * /upload-product:
 *   post:
 *     summary: Upload a new product
 *     description: Upload a new product to the catalog (Admin only)
 *     responses:
 *       201:
 *         description: Product uploaded successfully
 */
router.post("/upload-product",authToken,UploadProductController)

/**
 * @swagger
 * /get-product:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products
 *     responses:
 *       200:
 *         description: Products retrieved successfully
 */
router.get("/get-product",getProductController)

/**
 * @swagger
 * /update-product:
 *   post:
 *     summary: Update product details
 *     description: Update the details of a product (Admin only)
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.post("/update-product",authToken,updateProductController)

/**
 * @swagger
 * /get-categoryProduct:
 *   get:
 *     summary: Get one product from each category
 *     description: Retrieve one product from each category
 *     responses:
 *       200:
 *         description: Products by category retrieved successfully
 */
router.get("/get-categoryProduct",getCategoryProduct)

/**
 * @swagger
 * /category-product:
 *   post:
 *     summary: Get products by category
 *     description: Retrieve products by category
 *     responses:
 *       200:
 *         description: Products retrieved successfully
 */
router.post("/category-product",getCategoryWiseProduct)

/**
 * @swagger
 * /product-details:
 *   post:
 *     summary: Get product details
 *     description: Retrieve details of a specific product
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 */
router.post("/product-details",getProductDetails)

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search products
 *     description: Search for products by name or category
 *     responses:
 *       200:
 *         description: Products retrieved successfully
 */
router.get("/search",searchProduct)

/**
 * @swagger
 * /filter-product:
 *   post:
 *     summary: Filter products
 *     description: Filter products based on criteria
 *     responses:
 *       200:
 *         description: Products filtered successfully
 */
router.post("/filter-product",filterProductController)


// User add to cart

/**
 * @swagger
 * /addtocart:
 *   post:
 *     summary: Add product to cart
 *     description: Add a product to the user's cart
 *     responses:
 *       200:
 *         description: Product added to cart successfully
 */
router.post("/addtocart",authToken,addToCartController)

/**
 * @swagger
 * /countAddToCartProduct:
 *   get:
 *     summary: Count products in cart
 *     description: Get the count of products in the user's cart
 *     responses:
 *       200:
 *         description: Product count retrieved successfully
 */
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)

/**
 * @swagger
 * /view-card-product:
 *   get:
 *     summary: View cart products
 *     description: View products in the user's cart
 *     responses:
 *       200:
 *         description: Products in cart retrieved successfully
 */
router.get("/view-card-product",authToken,addToCartViewProduct)

/**
 * @swagger
 * /update-cart-product:
 *   post:
 *     summary: Update cart product
 *     description: Update the quantity of a product in the user's cart
 *     responses:
 *       200:
 *         description: Product in cart updated successfully
 */
router.post("/update-cart-product",authToken,updateAddToCartProduct)

/**
 * @swagger
 * /delete-cart-product:
 *   post:
 *     summary: Delete cart product
 *     description: Remove a product from the user's cart
 *     responses:
 *       200:
 *         description: Product removed from cart successfully
 */
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


// Payment and order

/**
 * @swagger
 * /checkout:
 *   post:
 *     summary: Checkout
 *     description: Process the user's order and payment
 *     responses:
 *       200:
 *         description: Order processed successfully
 */
router.post('/checkout',authToken,paymentController)

/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Webhook
 *     description: Handle Stripe webhook events
 *     responses:
 *       200:
 *         description: Webhook handled successfully
 */
router.post('/webhook',webhooks) // /api/webhook

/**
 * @swagger
 * /order-list:
 *   get:
 *     summary: Get order list
 *     description: Retrieve the list of orders for the authenticated user
 *     responses:
 *       200:
 *         description: Order list retrieved successfully
 */
router.get("/order-list",authToken,orderController)

/**
 * @swagger
 * /all-order:
 *   get:
 *     summary: Get all orders
 *     description: Retrieve the list of all orders (Admin only)
 *     responses:
 *       200:
 *         description: All orders retrieved successfully
 */
router.get("/all-order",authToken,allOrderController)






module.exports = router
