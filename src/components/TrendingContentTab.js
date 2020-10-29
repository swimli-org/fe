import React from 'react';
import { Link } from 'react-router-dom'

/* Import CSS */
import '../styles/Tabs.css';


/* Import Images */
import intelliflo from '../assets/products/intelliflo.png';



const TrendingContentTab = (props) => {
    return (
        <div className='trendingContentContainer' style={{backgroundColor: props.bgColor}}>
            <div className='trendingContentTitle'>{props.title}</div>

            <div className='trendingContentBody'>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
                <Link to='/product'>
                    <div className='trendingItemContainer'>
                        <div className='trendingItemImage'>
                            <img src={intelliflo}></img>
                        </div>
                        <div className='trendingItemTitle'>
                            <div className='trendingItemBrand'>Pentair</div>
                            Intelliflo Variable Speed Energy Saving Pool Pump
                        </div>
                        </div>
                </Link>
            </div>
        </div>
    );
}

export default TrendingContentTab;
