import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
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
import Login from './views/Login'
import Account from './views/Account'
import Orders from './views/Orders'
import Autoship from './views/Autoship'
import Addresses from './views/Addresses'
import Payment_methods from './views/Payment_methods'
import My_pool from './views/My_pool'
import SearchResults from './views/SearchResults'
import Checkout from './views/Checkout'

import Footer from './components/Footer'

import Landing from './views/Landing'


ReactDOM.render(
  <React.StrictMode>
  <Router>
        <div className='App'>
  <Navbar/>
  <Switch>
      <Route path="/toys">
            <Toys />
      </Route>
      <Route path="/furniture">
            <Furniture />
      </Route>
      <Route path="/Floats">
            <Floats />
      </Route>
      <Route path="/Chemicals">
            <Chemicals />
      </Route>
      <Route path="/equipment">
            <Equipment />
      </Route>
      <Route path="/covers">
            <Covers />
      </Route>
      <Route path="/cart">
            <Cart />
      </Route>
      <Route path="/register">
            <Register />
      </Route>
      <Route path="/login">
            <Login />
      </Route>
      <Route path="/account">
            <Account />
      </Route>
      <Route path="/orders">
            <Orders />
      </Route>
      <Route path="/autoship">
            <Autoship />
      </Route>
      <Route path="/addresses">
            <Addresses />
      </Route>
      <Route path="/payment_methods">
            <Payment_methods />
      </Route>
      <Route path="/my_pool">
            <My_pool />
      </Route>
      <Route path="/results/:term">
            <SearchResults />
      </Route>
      <Route path="/landing">
            <Landing />
      </Route>
      <Route exact path="/">
            <App />

      </Route>
      <Route exact path="/checkout">
            <Checkout />

      </Route>
    </Switch>
    <Footer/>
    </div>

   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
