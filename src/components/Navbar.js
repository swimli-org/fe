import React, { useState, useEffect, useRef } from 'react'
import { Input } from 'antd';
import menu from '../assets/menu.svg'
import back from '../assets/back.svg'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import account from '../assets/account.svg'
import cart from '../assets/cart.svg'
import autoship from '../assets/autoship.svg'
import '../styles/Navbar.css'
import { Link, useHistory } from 'react-router-dom'


export default function Navbar() {
  const name = `${localStorage.getItem('swimliFirstName')}`
  const history = useHistory();
  const { Search } = Input;
    const [visible, setVisible] = useState(false)

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const [modulIsOpen, setModulIsOpen] = useState(false)

    const [searchTerm, setSearchTerm] = useState()
  
    return (
      <div className='navbar-container'>
        <div className='navbar'>

          {/* Menu button and Logo */}
          <div className='menu-btn-container'>
            <img src={menu} className='menu-btn' alt='Menu Button' onClick={() => setSidebarIsOpen(!sidebarIsOpen)}></img>
            <img src={logo} className='logo' alt='Logo' onClick={()=>history.push('/')}></img>
          </div>

          {/* User and Cart */}
          <div className='user-container'>
            <div className='user-container-tab'>
              <Link to='/cart'>
                <img src={cart} className='user-container-tab-icon' alt='Cart'></img>
                <div className='cart-badge'>0</div>
              </Link>
            </div>
            <div className='user-container-tab'>
              
              {name !="null"? <Link to='/personal'>
                <img src={account} className='user-container-tab-icon' alt='Account'></img>
                <p>{name !="null"? name:'Guest'}</p>
                </Link>:<Link to='/signin'>
                <img src={account} className='user-container-tab-icon' alt='Account'></img>
                <p>Sign In</p>
                </Link>}
            </div>
            
          </div>

          {/* Searchbar */}
          <div className='search-container'>
          <form className='search-form' >
            <input
              className='search-bar'
              type='text'
              placeholder='Search Swimli...'
            ></input>
            <button className='search-btn' type='submit'>
              <img src={search} className='search-btn-icon' alt='Search'></img>
            </button>
          </form>
          </div>

          {/* Sidebar and Sidebar Tint */}
          <div className={sidebarIsOpen ? "sidebar sidebarClose" : "sidebar"}>
            <div className='sidebarHeader'>
              {name !="null"? <Link to='/personal' onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                Hey, {name !="null"? name:''}!
                </Link>:<Link to='/signin' onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                Sign In
                </Link>}
              <img src={back} className='sidebarback-btn' alt='Back Button' onClick={() => setSidebarIsOpen(!sidebarIsOpen)}></img>
            </div>
            <div className='sidebarCategories'>
              <div className='sidebarTitle'>Shop by Category</div>
              <div className='sidebarContent'>
                <ul onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                  <Link to='/Toys'><li>Toys</li></Link>
                  <Link to='/Floats'><li>Floats</li></Link>
                  <Link to='/Chemicals'><li>Chemicals</li></Link>
                  <Link to='/Furniture'><li>Furniture</li></Link>
                  <Link to='/Equipment'><li>Equipment</li></Link>
                  <Link to='/Covers'><li>Covers</li></Link>
                  <Link to='/#'><li>Parts & Tools</li></Link>
                  
                </ul>
              </div>
            </div>
            <div className='sidebarUser'>
              <div className='sidebarTitle'>Account</div>
              <div className='sidebarContent'>
                <ul onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                  <Link to='/Personal'><li>Account Settings</li></Link>
                  <Link to='/Orders'><li>Orders</li></Link>
                  <Link to='/Autoship'><li>Autoship</li></Link>
                  
                  {name !="null null"? <Link onClick={()=>{
                    localStorage.removeItem('swimliFirstName') 
                    localStorage.removeItem('swimliLastName')}}to='/'><li>
                  Sign Out
                  </li>
                  </Link>:<Link to='/signin'><li>
                  Sign In
                  </li>
                  </Link>}
                  
                </ul>
              </div>
            </div>
          </div>
          <div onClick={() => setSidebarIsOpen(!sidebarIsOpen)} className={sidebarIsOpen ? "sidebarTint" : "sidebarTint sidebarTintClose"}></div>


        </div>

        {/* Autoship Alert/Modul */}
        <div className='alert-header' onClick={() => setModulIsOpen(!modulIsOpen)}>
              <img src={autoship} className='autoshipIcon' alt='Autoship Icon'></img>
              Save today on your first autoship order!
        </div>
        <div className={modulIsOpen ? "modul" : "modul modulClose"}>
          <button className='modulCloseBtn' onClick={() => setModulIsOpen(!modulIsOpen)}>Close</button>
        </div>
        <div className={modulIsOpen ? "modulTint" : "modulTint modulTintClose"} onClick={() => setModulIsOpen(!modulIsOpen)}></div>




      </div>
  
    )
}