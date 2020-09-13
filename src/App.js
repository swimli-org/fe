import React, {useState} from 'react';
import './styles/App.css';
import {Link, useHistory} from 'react-router-dom'
import Footer from './components/Footer'
import CarouselSlider from './components/Carousel'

import categoriesList from './components/categories.json'
import CategoryCard from './components/CategoryCard'
import {useSelector} from 'react-redux'



import intelliflo from './assets/products/intelliflo.png'
import toys from './assets/category-images/toys.png'
import floats from './assets/category-images/floats.png'
import chemicals from './assets/category-images/chemicals.png'
import furniture from './assets/category-images/furniture.png'
import covers from './assets/category-images/covers.png'



function App() {
  const[categories]=useState(categoriesList)
  const auth = useSelector(state=>state.authReducer)
console.log(auth)
  return (
    <div className='container'>
      <CarouselSlider/>
      <div className='home-container'>
        <div className='home-container-title'>Categories</div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={toys}></img>
          </div>
          <div className='category-title'>Toys</div>
        </div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={floats}></img>
          </div>
          <div className='category-title'>Floats</div>
        </div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={chemicals}></img>
          </div>
          <div className='category-title'>Chemicals</div>
        </div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={furniture}></img>
          </div>
          <div className='category-title'>Furniture</div>
        </div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='category-title'>Equipment</div>
        </div>
        <div className='category-container'>
          <div className='category-image'>
            <img src={covers}></img>
          </div>
          <div className='category-title'>Covers</div>
        </div>
      </div>

      <div className='home-container'>
        <div className='home-container-title'>Trending Now</div>
        <Link to='/product'>
          <div className='boxed-items-container'>
            <div className='boxed-items-image'>
              <img src={intelliflo}></img>
            </div>
            <div className='boxed-items-price'>Price</div>
            <div className='boxed-items-title'>
              <span>Pentair</span>
              Intelliflo Variable Speed Energy Saving Pool Pump
            </div>
          </div>
        </Link>
        <div className='boxed-items-container'>
          <div className='boxed-items-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='boxed-items-price'>Price</div>
          <div className='boxed-items-title'>
            <span>Brand</span>
            Title
          </div>
        </div>
        <div className='boxed-items-container'>
          <div className='boxed-items-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='boxed-items-price'>Price</div>
          <div className='boxed-items-title'>
            <span>Brand</span>
            Title
          </div>
        </div>
        <div className='boxed-items-container'>
          <div className='boxed-items-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='boxed-items-price'>Price</div>
          <div className='boxed-items-title'>
            <span>Brand</span>
            Title 
          </div>
        </div>
        <div className='boxed-items-container'>
          <div className='boxed-items-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='boxed-items-price'>Price</div>
          <div className='boxed-items-title'>
            <span>Brand</span>
            Title
          </div>
        </div>
        <div className='boxed-items-container'>
          <div className='boxed-items-image'>
            <img src={intelliflo}></img>
          </div>
          <div className='boxed-items-price'>Price</div>
          <div className='boxed-items-title'>
            <span>Brand</span>
            Title
          </div>
        </div>
      </div>

      <div className='product-container' link>
        <Link className='product-link' to='/product'>
          View Product
        </Link>
      </div>

    </div>
  );
}

export default App;
