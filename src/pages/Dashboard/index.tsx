import React from 'react';
import Header from '../../components/Header';
import {
  Container, Content, ContainerCart, Cart, Title, Price, AddCart,
} from './styles';

import { useProduct } from '../../hooks/useProduct';

const Dashboard: React.FC = () => {
  const { products } = useProduct();

  return (
    <Container>

      <Header />
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
              <AddCart>Adicionar ao Carrinho</AddCart>

            </Cart>
          ))}
        </ContainerCart>

      </Content>

    </Container>
  );
};

export default Dashboard;
