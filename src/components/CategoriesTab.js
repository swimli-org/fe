import React from 'react';
import { Link } from 'react-router-dom'

/* Import CSS */
import '../styles/Tabs.css';

/* Import Images */
import intelliflo from '../assets/products/intelliflo.png'
import toys from '../assets/category-images/toys.png'
import floats from '../assets/category-images/floats.png'
import chemicals from '../assets/category-images/chemicals.png'
import furniture from '../assets/category-images/furniture.png'
import covers from '../assets/category-images/covers.png'

const CategoriesTab = (props) => {
    return (
        <div className='categoriesContainer'>
            <div className='categoriesContainerTitle'>Shop by Category</div>
            
            <div className='trendingContentBody'>
                <Link to='/toys'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={toys}></img>
                        </div>
                        <div className='categoriesItemTitle'>Toys</div>
                    </div>
                </Link>
                <Link to='/floats'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={floats}></img>
                        </div>
                        <div className='categoriesItemTitle'>Floats</div>
                    </div>
                </Link>
                <Link to='/chemicals'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={chemicals}></img>
                        </div>
                        <div className='categoriesItemTitle'>Chemicals</div>
                    </div>
                </Link>
                <Link to='/furniture'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={furniture}></img>
                        </div>
                        <div className='categoriesItemTitle'>Furniture</div>
                    </div>
                </Link>
                <Link to='/equipment'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoriesItemTitle'>Equipment</div>
                    </div>
                </Link>
                <Link to='/covers'>
                    <div className='categoriesItemContainer'>
                        <div className='categoriesItemImage'>
                            <img src={covers}></img>
                        </div>
                    <div className='categoriesItemTitle'>Covers</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CategoriesTab;
