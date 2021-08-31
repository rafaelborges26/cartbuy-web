/* eslint-disable react/prop-types */
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

  type PropsHeader =
    React.HTMLAttributes<HTMLDivElement> & {
    type: 'cart' | 'back';
    text?: string;
  }

const Header: React.FC<PropsHeader> = ({
  type,
  text,
  ...rest
}) => {
  let path = '/';
  if (type === 'cart') {
    path = '/cart';
  } else {
    path = '/';
  }

  return (
    <Container data-testid="Header-component">
      <h2>Market</h2>

      <Link to={path}>
        <div className="CartButton">
          <button type="button">
            {text}
          </button>
          { type === 'cart' && <FiShoppingCart /> }
          { type === 'back' && <FiArrowLeft /> }
        </div>

      </Link>

    </Container>

  );
};
export default Header;
