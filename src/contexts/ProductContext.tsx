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

  interface IProductsCart {
    id: string;
    image: string;
    name: string;
    price: string;
    quantity: number
  }

type ProductContextType = {
    products: IProducts[],
    handleSetCart: (id: string, name: string, price: string, image: string) => void,
    itemsCart: IProductsCart[],
    handleDecreaseQuantity: (id: string) => void
    handleIncreaseQuantity: (id: string) => void
    handleRemoveCart: (id: string) => void

}

type ProductContextProps = {
    children: ReactNode
}

export function ProductContextProvider(rest: ProductContextProps) {
  const [products, setProducts] = useState<IProducts[]>([]);

  const [itemsCart, setItemsCart] = useState<IProductsCart[]>([]);

  const getProducts = useCallback(async () => {
    const response = await api.get('/');
    setProducts(response.data);
  }, []);

  const handleSetCart = (id: string, name: string, price: string, image: string) => {
    const itemFinded = itemsCart.find((item) => item.id === id);

    if (!itemFinded) {
      const cart: IProductsCart = {
        id,
        name,
        price,
        image,
        quantity: 1,
      };

      setItemsCart([...itemsCart, cart]);
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const itemFinded = itemsCart.find((item) => item.id === id);

    const itemsFilter = itemsCart.filter((item) => item.id !== id);

    // se for pra zero
    if (itemFinded?.quantity === 1) {
      setItemsCart(itemsFilter);
      return;
    }

    if (itemFinded?.quantity) {
      itemFinded.quantity -= 1;
    }

    if (itemFinded) {
      itemsFilter.push(itemFinded);
    }

    setItemsCart(itemsFilter);
  };

  const handleIncreaseQuantity = (id: string) => {
    const itemFinded = itemsCart.find((item) => item.id === id);

    const itemsFilter = itemsCart.filter((item) => item.id !== id);

    if (itemFinded?.quantity) {
      itemFinded.quantity += 1;
    }

    if (itemFinded) {
      itemsFilter.push(itemFinded);
    }

    setItemsCart(itemsFilter);
  };

  const handleRemoveCart = (id: string) => {
    const itemsFilter = itemsCart.filter((item) => item.id !== id);

    setItemsCart(itemsFilter);
  };

  useEffect(() => {
    getProducts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider value={{
      products,
      handleSetCart,
      itemsCart,
      handleDecreaseQuantity,
      handleIncreaseQuantity,
      handleRemoveCart,
    }}
    >
      {rest.children}
    </ProductContext.Provider>
  );
}
