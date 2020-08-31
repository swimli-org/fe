import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#26a69a',
    borderRadius:"20px"
    
  };
 
export default function CarouselSlider() {
    return (
        <Carousel autoplay effect="fade" autoplaySpeed="50">
    <div>
      <h3 style={contentStyle}>Card 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Card 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Card 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Card 4</h3>
    </div>
  </Carousel>
    )
}
