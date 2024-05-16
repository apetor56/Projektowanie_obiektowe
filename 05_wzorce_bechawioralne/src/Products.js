import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleAddToCart = (productId) => {
        axios.post('http://localhost:5000/cart', { productId })
            .then(response => {
                console.log(response.data);
                addToCart(productId);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
