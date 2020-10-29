import React, { useState } from 'react';

import '../styles/Tabs.css';

/* Import Images */
import intelliflo from '../assets/products/intelliflo.png';


const CategoryPageHeadingTab = (props) => {

    const [filterTop, setFilterTop] = useState(false)


    return (
        <div className='fullContainer'>
            <div className='categoryPageFilterContainer'>
                <div className='categoryPageFilter'>
                    <div className='categoryPageFilterTitle'>
                        {props.category}
                        <p>{props.subcategory}</p>
                    </div>
                    
                    <div className='categoryPageFilterItems'>
                        <p>Subcategory</p>
                        <span>
                            <select>
                                <option>Sub 1</option>
                                <option>Sub 2</option>
                                <option>Sub 3</option>
                                <option>Sub 4</option>
                                <option>Sub 5</option>
                            </select>
                        </span>
                        <p>Price</p>
                        <span>
                            <select>
                                <option>All prices</option>
                                <option>$</option>
                                <option>$$</option>
                                <option>$$$</option>
                            </select>
                        </span>
                        <p>Rating</p>
                        <span>
                            <select>
                                <option>All ratings</option>
                                <option>1 Star</option>
                                <option>2 Stars</option>
                                <option>3 Stars</option>
                                <option>4 Stars</option>
                                <option>5 Stars</option>
                            </select>
                        </span>
                    </div>
                </div>
            </div>
            <div className='categoryPageContentContainer'>
                <div className='categoryPageContent'>
            
                    
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                    <div className='categoryPageItem'>
                        <div className='categoryPageItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='categoryPageItemBrand'>Pentair</div>
                        <div className='categoryPageItemName'>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        <div className='categoryPageItemPrice'>$1,299.99</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPageHeadingTab;
