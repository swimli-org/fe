import React from 'react'
import { Carousel } from 'antd';

import one from '../assets/one.jpg'
import pool from '../assets/pool.jpg'


  const contentStyle = {
    width: '100%',
    maxWidth: '1320px',
    height: '360px',
    margin: '0px auto',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#26a69a',
  };
 
export default function CarouselSlider() {
    return (
      <Carousel autoplay effect="fade" autoplaySpeed="50">
      <div className='slider-image'>
        <img src={one}></img>
      </div>
      <div className='slider-image'>
        <img src={pool}></img>
      </div>
      <div className='slider-image'>

      </div>
      <div className='slider-image'>
        
      </div>
      </Carousel>
    )
}
