import React, {useEffect} from 'react';

// Components
import NavBar from '../components/Navbar';
import CategoryPageHeadingTab from '../components/CategoryPageHeadingTab';
import CategoryPageContentTab from '../components/CategoryPageContentTab';
import Footer from '../components/Footer';


export default function Floats() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Furniture | Swimli"
  });


  const style = {
    backgroundColor: '#313131',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
    transition: 'all .4s ease'
  }

  return (
    <div className="container">
      <NavBar />
      <CategoryPageHeadingTab style={style} title="Furniture" />
      <CategoryPageContentTab category="Furniture" />
      <Footer />
    </div>
    )
}
