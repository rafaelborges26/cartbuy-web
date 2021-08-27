import {
  createContext, ReactNode, useState, useCallback, useEffect,
} from 'react';
import api from '../services/api';

export const ProductContext = createContext({} as ProductContextType);

interface IProducts {
    id: string;
    image: string;
    name: string;
    price: string
   }

type ProductContextType = {
    products: IProducts[]
}

type ProductContextProps = {
    children: ReactNode
}

export function ProductContextProvider(rest: ProductContextProps) {
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = useCallback(async () => {
    const response = await api.get('/');
    console.log(response.data);
    setProducts(response.data);
  }, []);

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {rest.children}
    </ProductContext.Provider>
  );
}
