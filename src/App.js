import React, {useState} from 'react';
import './styles/App.css';
import {Link, useHistory} from 'react-router-dom'
import Footer from './components/Footer'
import categoriesList from './components/categories.json'
import CategoryCard from './components/CategoryCard'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const[categories, setCategories]=useState(categoriesList)
  const auth = useSelector(state=>state.authReducer)
console.log(auth)
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
