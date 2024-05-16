import React, { useState } from 'react';
import axios from 'axios';

const Payments = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const totalAmount = 100;

    const handlePayment = (e) => {
        e.preventDefault();

        const paymentData = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            total: totalAmount // Zmiana nazwy na 'total'
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
            <form onSubmit={handlePayment}>
                <label>
                    Card Number:
                    <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                </label>
                <label>
                    CVV:
                    <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} />
                </label>
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default Payments;
