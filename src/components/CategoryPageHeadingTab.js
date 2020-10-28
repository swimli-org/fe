import React from 'react';

import '../styles/Tabs.css';

const CategoryPageHeadingTab = (props) => {
    return (
        <div className='categoryPageHeading' style={props.style}>
            <div className='tabContainer'>
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}

export default CategoryPageHeadingTab;
