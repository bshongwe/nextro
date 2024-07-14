// Main App
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Context from './context';
import SummaryApi from './common';
import { setUserDetails } from './store/userSlice';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })

      const dataApi = await dataResponse.json()

      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    /** User details */
    fetchUserDetails()
    /** User cart product */
    fetchUserAddToCart()

  },[])
  return (
    <>
      <Context.Provider value={{
          fetchUserDetails, // fetch user details
          cartProductCount, // current user add to cart product count
          fetchUserAddToCart
      }}>
        <ToastContainer
          position='top-center'
        />

        <Header/>
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
