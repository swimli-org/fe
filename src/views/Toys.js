import React, {useEffect} from 'react';

/* Components */
import NavBar from '../components/Navbar';
import CategoryPageHeadingTab from '../components/CategoryPageHeadingTab';
import CategoryPageContentTab from '../components/CategoryPageContentTab';
import Footer from '../components/Footer';



export default function Toys() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Toys | Swimli"
  });

  const style = {
    backgroundColor: '#044183',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
    transition: 'all .4s ease'
  }

  return (
    <div className="container">
      <NavBar />
      <CategoryPageHeadingTab style={style} title="Toys" />
      <CategoryPageContentTab category="Toys" />
      <Footer />
    </div>
    )
}
