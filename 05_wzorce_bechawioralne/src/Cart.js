import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product.id}>
                        <h3>{item.product.name}</h3>
                        <p>Price: {item.product.price}</p>
                        <p>Description: {item.product.description}</p>
                        <p>Count: {item.quantity}</p>
                    </li>
                ))}
            </ul>
            <Link to="/payments">Go to Payments</Link>
        </div>
    );
};

export default Cart;
