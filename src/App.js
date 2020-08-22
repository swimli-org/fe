import React from 'react';
import './styles/App.css';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="container">
    <h1>Categories</h1>
      <div className="category-container">
        <div className="category-box-container">
          <a href="http://localhost:3000/toys">
            <div className="category">Toys</div>
          </a>
        </div>
        <div className="category-box-container">
          <a href="http://localhost:3000/floats">
            <div className="category">Floats</div>
          </a>
        </div>
        <div className="category-box-container">
          <a href="http://localhost:3000/chemicals">
            <div className="category">Chemicals</div>
          </a>
        </div>
        <div className="category-box-container">
          <a href="http://localhost:3000/furniture">
            <div className="category">Furniture</div>
          </a>
        </div>
        <div className="category-box-container">
          <a href="http://localhost:3000/equipment">
            <div className="category">Equipment</div>
          </a>
        </div>
        <div className="category-box-container">
          <a href="http://localhost:3000/covers">

            <div className="category">Covers</div>
          </a>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
