import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/products/add" component={AddProductPage} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/products/edit/:id" component={EditProductPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
