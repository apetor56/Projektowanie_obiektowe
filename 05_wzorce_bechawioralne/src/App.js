import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import Payments from './Payments';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
    return (
        <Router>
            <CartProvider>
                <div>
                    <Link to="/products">Products</Link>{' '}
                    <Link to="/cart">Cart</Link>{' '}
                    <Link to="/payments">Payments</Link>
                    <Routes>
                        <Route path="/products" element={<Products />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;
