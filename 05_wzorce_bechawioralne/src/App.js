import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Payments from './Payments';

const App = () => {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
