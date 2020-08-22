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
import SearchResults from './views/SearchResults'
import Footer from './components/Footer'

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
      <Route path="/results/:term">
            <SearchResults />
      </Route>
      <Route exact path="/">
            <App />

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
