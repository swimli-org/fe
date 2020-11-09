import React, {useEffect} from 'react';

/* CSS */

/* Components */
import CategoryPageHeadingTab from '../components/CategoryPageHeadingTab';
import CategoryPageContentTab from '../components/CategoryPageContentTab';


export default function Chemicals() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Chemicals | Swimli"
  });

  const style = {
    backgroundColor: '#9BB9E6',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
    transition: 'all .4s ease'
  }

  return (
    <div className='App'>
      <CategoryPageHeadingTab style={style} title='Chemicals' />
      <CategoryPageContentTab category='Chemicals'  />
    </div>
    )
}
