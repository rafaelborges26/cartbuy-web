import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import {
  Container, Content, ContainerCart, Cart, Title, Price, AddCart,
} from './styles';

import { useProduct } from '../../hooks/useProduct';

const Dashboard: React.FC = () => {
  const { products, handleSetCart } = useProduct();

  const history = useHistory();

  const handleAddCart = (id: string, name: string, price: string, image: string) => {
    handleSetCart(id, name, price, image);
    history.push('/cart');
  };

  return (
    <Container>

      <Header type="cart" text="Carrinho" />
      <Content>

        <ContainerCart>
          { products && products.map((product) => (
            <Cart key={product.id}>
              <img src={product.image} alt={product.name} />
              <Title>{product.name}</Title>
              <Price>
                R$
                <span> </span>
                {product.price}
              </Price>
              <AddCart
                onClick={
                  () => handleAddCart(product.id, product.name, product.price, product.image)
}
              >
                Adicionar ao Carrinho
              </AddCart>

            </Cart>
          ))}
        </ContainerCart>

      </Content>

    </Container>
  );
};

export default Dashboard;
