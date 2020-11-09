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




function App(props) {
  const[categories]=useState(categoriesList)
  const auth = useSelector(state=>state.authReducer)
console.log(auth)


useEffect(() => {
  window.scrollTo(0, 0)
  document.title = "Swimli"
});


  return (
    <div className='container'>
      <CarouselSlider />
      <CategoriesTab />

      <TrendingContentTab title='Trending Now' />
      <TrendingContentTab title='Buy It Today, Get It Tomorrow' />
      <TrendingContentTab title='Recommended For You' />
      <TrendingContentTab title='Summer Fun' />
    </div>
  );
}

export default App;
