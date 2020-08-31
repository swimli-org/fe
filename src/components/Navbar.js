import React,{useState} from 'react'
import { Drawer, Divider,Avatar, Badge, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import menu from '../assets/menu.svg'
import logo from '../assets/logo.png'
import cart from '../assets/cart.svg'
import autoship from '../assets/autoship.svg'
import '../styles/Navbar.css'
import {Link, useHistory} from 'react-router-dom'


export default function Navbar() {
  const name = `${localStorage.getItem('swimliFirstName')} ${localStorage.getItem('swimliLastName')}`
  const history = useHistory();
  const { Search } = Input;
    const[visible, setVisible]=useState(false)
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    const[searchTerm, setSearchTerm]=useState()

    return (
      <div className='navbar__container'>
        <div className='navbar'>
          <img src={menu} className='menu-btn' alt='Menu Button' onClick={showDrawer}></img>
          <img src={logo} className='logo' alt='Logo' onClick={()=>history.push('/')}></img>

          <div className='desktop-search'>
            <Search
              value={searchTerm}
              className='search-bar'
              placeholder="Search Swimli..."
              onChange={(e)=>setSearchTerm(e.target.value)}
              onSearch={() =>{
              const prom = new Promise(()=>history.push(`/s/${searchTerm}`))
                prom.then(setSearchTerm(""))
              }}
            />
          </div>

          <div className="desktop-links">
            <div className='desktop-links-tab'><Link to='/overview'>Account</Link></div>
            <div className='desktop-links-tab'><Link to='/login'>Login</Link></div>
            <div className='desktop-links-tab'>
              <Link to='/cart'>
                Cart
                <div className='cart-badge'>0</div>
              </Link>
            </div>
          </div>
          <div className='mobile-cart-link'>
          <Link to='/cart'>
            <div className='cart-badge'>0</div>
            <img src={cart} className='cart-button' alt='Cart'></img>
          </Link>
          </div>
          

          <Drawer
            title={
              <span className='avatar-container'>
                <Link className='user-container' to='/overview'>
                  <Avatar size="small" className='avatar' icon={<UserOutlined />} />
                 {name !="null null"? name:'Guest'}
                </Link>
                {name !="null null"? <Link className='login-link' onClick={()=>{
                  localStorage.removeItem('swimliFirstName') 
                  localStorage.removeItem('swimliLastName')}}to='/'>
                  Logout
                </Link>:<Link className='login-link'to='/login'>
                  Login
                </Link>}
                
              </span>
            }
            placement="left"
            closable={false}
            onClick={(e) => {
              if(e.target.tagName.toLowerCase() === 'a'){
                onClose()
              }
            }}
            onClose={onClose}
            visible={visible}
          >
            <Badge count={1}  style={{ backgroundColor: '#2f89fc' }} offset={[10, 10]}><p className='cart'><Link to='/cart'>Cart</Link></p></Badge>
            <Divider plain>Categories</Divider>
            <p><Link to='/toys'>Toys</Link></p>
            <p><Link to='/floats'>Floats</Link></p>
            <p><Link to='/furniture'>Outdoor Furniture</Link></p>
            <p><Link to='/chemicals'>Chemicals</Link></p>
            <p><Link to='/equipment'>Equipment</Link></p>
            <p><Link to='/covers'>Covers</Link></p>
            </Drawer>
          </div>

          <div className='mobile-search'>
            <Search
              value={searchTerm}
              className='search-bar'
              placeholder="Search Swimli..."
              onChange={(e)=>setSearchTerm(e.target.value)}
              onSearch={() =>{
              const prom = new Promise(()=>history.push(`/results/${searchTerm}`))
                prom.then(setSearchTerm(""))
              }}
            />
          </div>
          <div className='alert-header'>
            <Link to='/autoship'>
              <img src={autoship} className='autoship' alt='Autoship Icon' onClick={()=>history.push('/')}></img>
              Save today on your first autoship order!
            </Link>
          </div>
        </div>
  
      )
}
