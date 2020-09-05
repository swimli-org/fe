import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../styles/Search.css'

export default function Search() {
    return (
        <div className="container">
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
            </div>
            <div className='term-container'>
                Showing results for <b>"TERM"</b>
            </div>
            <div className='results-container'>
                <div className='results-item'>1</div>
                <div className='results-item'>2</div>
                <div className='results-item'>3</div>
                <div className='results-item'>4</div>
                <div className='results-item'>5</div>
                <div className='results-item'>6</div>
                <div className='results-item'>7</div>
                <div className='results-item'>8</div>
                <div className='results-item'>9</div>
                <div className='results-item'>10</div>
                <div className='results-item'>11</div>
                <div className='results-item'>12</div>
                <div className='results-item'>13</div>
                <div className='results-item'>14</div>
                <div className='results-item'>15</div>
                <div className='results-item'>16</div>
            </div>



        </div>

    )
}
