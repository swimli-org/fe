import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

// CSS
import './styles/App.css';

// Components
import NavBar from './components/Navbar';
import CarouselSlider from './components/Carousel';
import TrendingContentTab from './components/TrendingContentTab';
import CategoriesTab from './components/CategoriesTab';
import Footer from './components/Footer';




function App() {


useEffect(() => {
  window.scrollTo(0, 0)
  document.title = "Swimli"
});


  return (
    <div className="container">
      <NavBar />
      <div className="content-wrap">
        <CarouselSlider />
        <CategoriesTab />

        <TrendingContentTab title="Trending Now" />
        <TrendingContentTab title="Buy It Today, Get It Tomorrow" />
        <TrendingContentTab title="Recommended For You" />
        <TrendingContentTab title="Summer Fun" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
