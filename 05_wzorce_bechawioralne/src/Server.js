const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const initialProducts = [
    { id: 1, name: 'Laptop', price: 4000.00, description: 'Gaming' },
    { id: 2, name: 'Smartphone', price: 2500.00, description: 'Photos' },
    { id: 3, name: 'Tablet', price: 1200.00, description: 'Graphics' },
    { id: 4, name: 'Smartwatch', price: 700.00, description: 'Fitness' },
    { id: 5, name: 'Gothic Remake CE', price: 1000.00, description: 'Don\'t buy it.' }
];

let cartItems = [];

app.get('/products', (req, res) => {
    res.json(initialProducts);
});

app.post('/payments', (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;
    console.log('Payment details:', { cardNumber, expiryDate, cvv });
    res.status(200).json({ message: `Payment processed successfully.` });
});

app.post('/cart', (req, res) => {
    const { productId } = req.body;
    const product = initialProducts.find(product => product.id === productId);
    if (product) {
        const existingCartItemIndex = cartItems.findIndex(item => item.product.id === productId);
        if (existingCartItemIndex !== -1) {
            cartItems[existingCartItemIndex].quantity++;
        } else {
            cartItems.push({ product, quantity: 1 });
        }
        res.status(200).json({ message: 'Product added to cart.' });
    } else {
        res.status(404).json({ message: 'Product not found.' });
    }
});

app.get('/cart', (req, res) => {
    res.json(cartItems);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
