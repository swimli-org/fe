import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Toys from './views/Toys'
import Furniture from './views/Furniture'
import Floats from './views/Floats'
import Chemicals from './views/Chemicals'
import Equipment from './views/Equipment'
import Covers from './views/Covers'
import Cart from './views/Cart'
import Register from './views/Register'
import Signin from './views/Signin'
import ForgotPassword from './views/ForgotPassword'
import Overview from './views/Overview'
import Personal from './views/Personal'
import Orders from './views/Orders'
import Autoship from './views/Autoship'
import Addresses from './views/Addresses'
import PaymentMethods from './views/PaymentMethods'
import MyPool from './views/MyPool'
import S from './views/S'
import Checkout from './views/Checkout'
import Footer from './components/Footer'
import Product from './views/Product'

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
  <Router>
        <div className='App'>
  <Navbar/>
  <Switch>
      <Route path="/toys/">
            <Toys />
      </Route>
      <Route path="/furniture/">
            <Furniture />
      </Route>
      <Route path="/floats/">
            <Floats />
      </Route>
      <Route path="/chemicals/">
            <Chemicals />
      </Route>
      <Route path="/equipment/">
            <Equipment />
      </Route>
      <Route path="/covers/">
            <Covers />
      </Route>
      <Route path="/cart/">
            <Cart />
      </Route>
      <Route path="/register/">
            <Register />
      </Route>
      <Route path="/signin/">
            <Signin />
      </Route>
      <Route path="/forgot-password/">
            <ForgotPassword />
      </Route>
      <Route path="/overview/">
            <Overview />
      </Route>
      <Route path="/personal/">
            <Personal />
      </Route>
      <Route path="/orders/">
            <Orders />
      </Route>
      <Route path="/autoship/">
            <Autoship />
      </Route>
      <Route path="/addresses/">
            <Addresses />
      </Route>
      <Route path="/payment-methods/">
            <PaymentMethods />
      </Route>
      <Route path="/my-pool/">
            <MyPool />
      </Route>
      <Route path="/s/:term/">
            <S />
      </Route>
      <Route exact path="/">
            <App />
      </Route>
      <Route exact path="/checkout/">
            <Checkout />
      </Route>
      <Route exact path="/product/">
            <Product />
      </Route>
    </Switch>
    <Footer/>
    </div>

   </Router>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
