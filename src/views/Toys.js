import React, {useEffect} from 'react';

/* CSS */

/* Images */

/* Components */
import CategoryPageHeadingTab from '../components/CategoryPageHeadingTab';
import CategoryPageContentTab from '../components/CategoryPageContentTab';



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
    <div className='App'>
      <CategoryPageHeadingTab style={style} title='Toys' />
      <CategoryPageContentTab category='Toys' />
    </div>
    )
}
