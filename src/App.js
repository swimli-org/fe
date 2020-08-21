import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="container">
    <h1>Categories</h1>
      <div className="categoryContainer">
        <div className="categoryBoxContainer">
          <a href="/toys">
            <div className="category">Toys</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="/floats">
            <div className="category">Floats</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="/chemicals">
            <div className="category">Chemicals</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="/furniture">
            <div className="category">Furniture</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="/equipment">
            <div className="category">Equipment</div>
          </a>
        </div>
        <div className="categoryBoxContainer">
          <a href="/covers">
            <div className="category">Covers</div>
          </a>
        </div>
      </div>


      <h1>Future Home Page</h1>

    </div>
  );
}

export default App;
