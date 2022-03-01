import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Containers/MainComponets/Header';
import { BrowserRouter, Route, } from 'react-router-dom';
import ProductList from './Containers/MainComponets/ProductList';
import Product from './Containers/MainComponets/Product';
import ProductDetail from './Containers/MainComponets/ProductDetail';
import { Switch } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/'} exact component={ProductList} />
          <Route path={'/product/:productId'} exact component={ProductDetail} />
          <Route path={'*'}>404 not Found</Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App