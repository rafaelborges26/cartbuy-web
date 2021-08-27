import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    Market

    <div className="CartButton">
      <button type="button">
        Carrinho
      </button>
      <FiShoppingCart />
    </div>

  </Container>
);

export default Header;
