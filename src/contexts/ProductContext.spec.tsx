import { renderHook } from '@testing-library/react-hooks';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProvider } from './ProductContext';

describe('product hooks', () => {
  it('should be able list products', () => {
    const { result } = renderHook(() => useProduct(), { wrapper: ProductContextProvider });

    // console.log(result.current);
  });
});
