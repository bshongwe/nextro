// Routes for clientside API to integrate
// with backend
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'success',
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : 'order',
                element : <OrderPage/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    {
                        path : "all-orders",
                        element : <AllOrder/>
                    }
                ]
            },
        ]
    }
])


export default router
