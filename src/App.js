import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

/* Import CSS */
import './styles/App.css';

/* Import Components */
import CarouselSlider from './components/Carousel'
import categoriesList from './components/categories'
import TrendingContentTab from './components/TrendingContentTab';
import CategoriesTab from './components/CategoriesTab';




function App() {
  const[categories]=useState(categoriesList)
  const auth = useSelector(state=>state.authReducer)
console.log(auth)


  return (
    <div className='container'>
      <CarouselSlider/>
      <CategoriesTab />

      <TrendingContentTab title='Trending Now' />
      <TrendingContentTab title='Buy It Today, Get It Tomoorow' />
      <TrendingContentTab title='Recommended For You' />
      <TrendingContentTab title='Summer Fun' />
    </div>
  );
}

export default App;
