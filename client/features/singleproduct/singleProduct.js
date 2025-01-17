import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { addCartAsync } from '../cart/cartSlice';
import { fetchProduct, singleProduct } from './singleProductSlice';
import UpdateProduct from '../updateProduct/UpdateProduct';
import { auth } from '../auth/authSlice'



const SingleProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate()
    const product = useSelector(singleProduct);
    const userId = useSelector((state) => state.auth.me.id);
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);




    const dispatch = useDispatch();


    // adds product to user through cart model
    const handleAddToCart = (userId, productId) => {
        let newCart = {
            userId: userId,
            productId: productId,
            cartQuantity: 1,
        }
        dispatch(addCartAsync(newCart))
        navigate('/cart')
    }

    // Adds product to guest cart which is located in local storage
    const handleAddtoCartGuest = () => {
        let currentCart = window.localStorage.getItem('cart');
        currentCart = JSON.parse(currentCart)
        if (!currentCart) {
            let newEmptyCart = [];
            window.localStorage.setItem('cart', JSON.stringify(newEmptyCart))
        }
        let cartItem = {
            description: product.description,
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            cartQuantity: 1,
        }
        let cart = window.localStorage.getItem('cart');
        cart = JSON.parse(cart)
        cart.push(cartItem);
        cart = JSON.stringify(cart)
        window.localStorage.setItem("cart", cart)
        navigate('/cart')
    }

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return (
        <div className='single-product'>
        <div className='single-product-container'>
            <div className='single-product-container-left'>
            <img className='single-product-image' src={`${product.imageUrl}`} />
            </div>
            <div className='single-product-container-right'>
            <div className='single-product-name'> {product.name}</div>
            <div className='single-product-price'>$ {product.price}</div>
            <div className='single-product-description' >Description - {product.description}</div>
            {isLoggedIn ? <button className='add-to-cart' id='add-to-user-cart' onClick={(e) => handleAddToCart(userId, product.id)}>Add to Cart</button> : <button class='add-to-cart' id='add-to-guest-cart' onClick={(e) => handleAddtoCartGuest()}>Add to Cart</button>}
            {isAdmin ? <UpdateProduct id={product.id}/> : null}
            </div>
            
            
            
           
        </div>
        </div>
    )
}

export default SingleProduct;
