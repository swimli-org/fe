import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="container">
    <h1>Categories</h1>
      <div className="categoryContainer">
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/toys">
            <div className="category">Toys</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/floats">
            <div className="category">Floats</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/chemicals">
            <div className="category">Chemicals</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/furniture">
            <div className="category">Furniture</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/equipment">
            <div className="category">Equipment</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="http://localhost:3000/covers">
            <div className="category">Covers</div>
          </a>
        </div>
      </div>


      <h1>Future Home Page</h1>

    </div>
  );
}

export default App;
