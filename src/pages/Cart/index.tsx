import React from 'react';
import api from '../../services/api';

const Cart: React.FC = () => {
  async function teste() {
    const testeret = await api.get('/');
    console.log(testeret.data);
  }

  teste();

  return (
    <h1>teste</h1>
  );
};

export default Cart;
