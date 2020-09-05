import React, {useState} from 'react';
import './styles/App.css';
import {Link, useHistory} from 'react-router-dom'
import Footer from './components/Footer'
import CarouselSlider from './components/Carousel'

import categoriesList from './components/categories.json'
import CategoryCard from './components/CategoryCard'
import {useSelector} from 'react-redux'


function App() {
  const[categories]=useState(categoriesList)
  const auth = useSelector(state=>state.authReducer)
console.log(auth)
  return (
    <div className='container'>
      <CarouselSlider/>
      <h1>Categories</h1>
      <div className='category-container'>
        {categories && categories.map(category=>{
          return(
            <CategoryCard key={category.category} category={category.category} bgColor={category.backgroundColor}/>
          )
        })}
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
