import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiMinusCircle, FiTrash2 } from 'react-icons/fi';
import { useProduct } from '../../hooks/useProduct';
import Header from '../../components/Header';
import {
  Container,
  Content,
  TitleCart,
  SubtitleCart,
  ContainerCarts,
  CartItem,
  DescriptionCart,
  TextsCart,
  EditItems,
  QuantityCart,
} from './styles';

const Cart: React.FC = () => {
  const {
    itemsCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveCart,
  } = useProduct();

  return (
    <Container>
      <Header type="back" text="Voltar" />
      <Content>
        { itemsCart.length > 0 ? (
          <>
            <TitleCart>
              Carrinho (
              {itemsCart.length}
              )
            </TitleCart>

            { itemsCart.map((item) => (
              <ContainerCarts>
                <CartItem>
                  <DescriptionCart>
                    <img src={item.image} alt={item.name} />
                    <TextsCart>
                      <h5>{item.name}</h5>
                      <span>
                        R$
                        {' '}
                        {item.price}
                      </span>
                    </TextsCart>
                  </DescriptionCart>
                  <EditItems>
                    <FiTrash2 onClick={() => handleRemoveCart(item.id)} />
                    <QuantityCart>
                      <FiMinusCircle
                        onClick={() => handleDecreaseQuantity(item.id)}
                      />
                      {item.quantity}
                      <FiPlusCircle onClick={() => handleIncreaseQuantity(item.id)} />
                    </QuantityCart>
                  </EditItems>

                </CartItem>
              </ContainerCarts>
            )) }
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
