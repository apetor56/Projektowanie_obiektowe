import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payments = () => {
    const [setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then(response => {
                setCartItems(response.data);
                calculateTotalPrice(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    const calculateTotalPrice = (items) => {
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        setTotalPrice(totalPrice);
    };

    const handlePayment = (e) => {
        e.preventDefault();

        const paymentData = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            total: totalPrice
        };

        axios.post('http://localhost:5000/payments', paymentData)
            .then(response => {
                console.log('Payment successful:', response.data);
            })
            .catch(error => {
                console.error('Error making payment:', error);
            });
    };

    return (
        <div>
            <h2>Payments</h2>
            <p>Total Price: {totalPrice}</p>
            <form onSubmit={handlePayment}>
                <label>
                    Card Number: <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                </label>
                <label>
                    Expiry Date: <input type="text" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                </label>
                <label>
                    CVV: <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} />
                </label>
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default Payments;
