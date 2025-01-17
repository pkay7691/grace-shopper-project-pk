import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import SingleProduct from '../features/singleproduct/singleProduct'
import { fetchAllProducts } from '../features/allProducts/allProductsSlice';
import AllUsers from '../features/allUsers/AllUsers';
import Home from '../features/home/Home';
import Register from '../features/auth/Register';
import Login from '../features/auth/Login';
import { me } from './store';
import Checkout from '../features/checkout/Checkout';
import Cart from '../features/cart/cart';
import SingleUser from '../features/singleuser/singleUser';
import userSlice from '../features/user/userSlice';
import GuestCart from '../features/cart/guestcart'
import EditUser from '../features/useredit/userEdit'
import GuestCheckout from '../features/checkout/GuestCheckout';
import Confirmation from '../features/confirmation/Confirmation'


/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  // const isLoggedIn = true
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, []);

  return (
    <div>
      {isLoggedIn && isAdmin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/useredit' element={<EditUser/>}/>
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:userId" element={<SingleUser/>}/>
        </Routes>
         ) : isLoggedIn ? ( 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path='/products/:productId' element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/useredit' element={<EditUser/>}/>
          <Route path='/confirmation' element={<Confirmation />} />

        </Routes>
        ) : ( 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          <Route path="/signup" element={<Register name="signup"/>} />
          <Route path='/cart' element ={<GuestCart/>} />
          <Route path='/guestcheckout' element={<GuestCheckout />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
