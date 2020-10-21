import React, {useEffect} from 'react';
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Search.css'
import intelliflo from '../assets/products/intelliflo.jpg'



export default function Search() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    
      return (
        <div className="container">
            <div className='search-page-container'>
                <div className='mobile-filter-container'>Filter</div>
                <div className='sort-container'>
                    Sort:
                </div>
                <div className='filter-container'>
                    <div className='filter-title'>Categories</div>
                    <div className='filter-items'>
                        <p>Chemicals</p>
                        <p>Equipment</p>
                        <p>Covers</p>
                        <p>Furniture</p>
                        <p>Floats</p>
                        <p>Toys & Games</p>
                        <p>Parts & Hardware</p>
                        <p>Liners</p>
                        <p>Filters</p>
                    </div>
                    <div className='filter-title'>Made for</div>
                    <div className='filter-items'>
                        <p>Inground Pools</p>
                        <p>Above Ground Pools</p>
                        <p>Spas</p>
                        <p>Pools & Spas</p>
                    </div>
                    <div className='filter-title'>Brand</div>
                    <div className='filter-items'>
                        <p>Brand 1</p>
                        <p>Brand 2</p>
                        <p>Brand 3</p>
                        <p>Brand 4</p>
                        <p>Brand 5</p>
                        <p>Brand 6</p>
                        <p>Brand 7</p>
                        <p>Brand 8</p>
                        <p>Brand 9</p>
                        <p>Brand 10</p>
                        <p>Brand 11</p>
                        <p>Brand 12</p>
                    </div>
                    <div className='filter-title'>Price</div>
                    <div className='filter-items'>
                        <p>$</p>
                        <p>$$</p>
                        <p>$$$</p>
                    </div>
                </div>
                <div className='term-container'>
                    <p>Showing results for <b>"Term"</b></p>
                    <span>1 - 16 of 2,912</span>
                </div>
                <div className='results-container'>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                    <div className='results-item'>
                        <Link to='/product'>
                            <div className='results-item-image'>
                                <img src={intelliflo} alt='Intelliflo'></img>
                            </div>
                            <div className='results-item-title'>
                                <span>Pentair</span>
                                Intelliflo Variable Speed Energy Saving Pool Pump
                            </div>
                            <div className='results-item-rating'>635 Reviews</div>
                            <div className='results-item-price'>$1,299.99</div>
                        </Link>
                    </div>
                </div>
                <div className='view-more-container'>
                    <Button className='viewmore-btn'>View More</Button>
                </div>
            </div>



        </div>

    )
}
