import {
  createContext, ReactNode, useState, useCallback, useEffect,
} from 'react';
import api from '../services/api';

export const ProductContext = createContext({} as ProductContextType);

interface IProducts {
    id: string;
    image: string;
    name: string;
    price: string;
   }

type ProductContextType = {
    products: IProducts[],
    handleSetCart: (id: string, name: string, price: string, image: string) => void,
    itemsCart: IProducts[]
}

type ProductContextProps = {
    children: ReactNode
}

export function ProductContextProvider(rest: ProductContextProps) {
  const [products, setProducts] = useState<IProducts[]>([]);

  const [itemsCart, setItemsCart] = useState<IProducts[]>([]);

  const getProducts = useCallback(async () => {
    const response = await api.get('/');
    setProducts(response.data);
  }, []);

  // const carts = localStorage.getItem('@CarrinhoDeCompras.cart');

  // if (carts) {
  //  cartsArray = JSON.parse(carts);
  // }

  const handleSetCart = (id: string, name: string, price: string, image: string) => {
    // const allCarts = [...cartsArray, idCart];

    // localStorage.setItem('@CarrinhoDeCompras.cart', JSON.stringify([...teste, idCart]));
    // console.log('added', idCart);

    const cart: IProducts = {
      id,
      name,
      price,
      image,
    };

    setItemsCart([...itemsCart, cart]);
  };

  useEffect(() => {
    getProducts();

    // const allProducts = localStorage.getItem('@CarrinhoDeCompras.cart');

    // if (allProducts.length > 0) {
    //  setItemsCart([...allProducts, '100']);
    // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(itemsCart);

  return (
    <ProductContext.Provider value={{ products, handleSetCart, itemsCart }}>
      {rest.children}
    </ProductContext.Provider>
  );
}
