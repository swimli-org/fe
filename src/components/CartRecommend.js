import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';

// Icons
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Images
import intelliflo from '../assets/products/intelliflo.png';


export default function CartRecommend() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="cartRecommend">
        <div className="cartRecommendTitle">Recommended Products</div>
        <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button className="cartRecommendChevronLeft">{<FiArrowLeft />}</button>}
            rightChevron={<button className="cartRecommendChevronRight">{<FiArrowRight />}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
        >
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
            <Link to="/product">
                <div className="cartRecommendItem">
                    <div className="cartRecommendItemImage">
                        <img src={intelliflo}></img>
                    </div>
                    <div className="cartRecommendItemTitle">
                        Intelliflo Variable Speed Energy Saving Pool Pump
                    </div>
                    <div className="cartRecommendItemPrice">
                        $1,299.99
                    </div>
                </div>
            </Link>
        </ItemsCarousel>
    </div>
  );
};

