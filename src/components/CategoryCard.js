import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoryCard(props) {
    return (
        <div className="category-box-container" >
          <Link className='category' style={{backgroundColor: props.bgColor}} to={`/${props.category}`}>{props.category}</Link>
        </div>
    )
}
