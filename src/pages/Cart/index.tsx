import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import Header from '../../components/Header';
import {
  Container, Content, TitleCart, SubtitleCart, ContainerCarts, CartItem,
} from './styles';

const Cart: React.FC = () => {
  const { itemsCart } = useProduct();

  return (
    <Container>
      <Header type="back" text="Voltar" />
      <Content>
        { itemsCart.length > 0 ? (
          <>
            <TitleCart>Carrinho (0):</TitleCart>
            <ContainerCarts>
              <CartItem>
                <img src={itemsCart[0].image} alt={itemsCart[0].name} />
              </CartItem>
            </ContainerCarts>
          </>
        ) : (
          <>
            <TitleCart>O seu carrinho de compras está vazio</TitleCart>
            <Link to="/">
              <SubtitleCart>Não perca essas ofertas fantásticas</SubtitleCart>
            </Link>

          </>
        ) }

      </Content>

    </Container>
  );
};

export default Cart;
