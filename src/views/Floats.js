import React, {useEffect} from 'react';

/* CSS */

/* Components */
import CategoryPageHeadingTab from '../components/CategoryPageHeadingTab';
import CategoryPageContentTab from '../components/CategoryPageContentTab';


export default function Floats() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  const style = {
    backgroundColor: '#F0026F',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
    transition: 'all .4s ease'
  }

  return (
    <div className='App'>
      <CategoryPageHeadingTab style={style} title='Floats' />
      <CategoryPageContentTab category='Floats'  />
    </div>
    )
}
