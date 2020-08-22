import React from 'react';
import './styles/App.css';
import {Link, useHistory} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="container">
    <h1>Categories</h1>
      <div className="category-container">
        <div className="category-box-container">
          <Link to='/toys'>
            <div className="category">Toys</div>
          </Link>
        </div>
        <div className="category-box-container">
          <Link to='/floats'>
            <div className="category">Floats</div>
          </Link>
        </div>
        <div className="category-box-container">
          <Link to='/chemicals'>
            <div className="category">Chemicals</div>
          </Link>
        </div>
        <div className="category-box-container">
          <Link to='/furniture'>
            <div className="category">Furniture</div>
          </Link>
        </div>
        <div className="category-box-container">
          <Link to='/equipment'>
            <div className="category">Equipment</div>
          </Link>
        </div>
        <div className="category-box-container">
          <Link to='/covers'>
            <div className="category">Covers</div>
          </Link>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
