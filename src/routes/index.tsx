import { Switch, Route } from 'react-router-dom';
import { ProductContextProvider } from '../contexts/ProductContext';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <ProductContextProvider>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </ProductContextProvider>
);

export default Routes;
