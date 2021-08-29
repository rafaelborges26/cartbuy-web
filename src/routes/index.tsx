import { Switch, Route } from 'react-router-dom';
import { ProductContextProvider } from '../contexts/ProductContext';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const Routes = () => (
  <ProductContextProvider>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </ProductContextProvider>
);

export default Routes;
