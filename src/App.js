import React, {useState} from 'react';
import './styles/App.css';
import Footer from './components/Footer'
import categoriesList from './components/categories.json'
import CategoryCard from './components/CategoryCard'


function App() {
  const[categories, setCategories]=useState(categoriesList)
  return (
    <>
    <div className="container">
    <h1>Categories</h1>
    <div className='category-container'>
      {categories && categories.map(category=>{
        return(
          <CategoryCard key={category.category} category={category.category} bgColor={category.backgroundColor}/>
        )
      })}
    </div>
    </div>
    </>
  );
}

export default App;
