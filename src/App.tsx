import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = (): JSX.Element => (
  <Router>
    <Routes />
  </Router>
);

export default App;
