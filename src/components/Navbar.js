import React,{useState} from 'react'
import { Drawer, Divider,Avatar, Badge, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import menu from '../assets/menu.svg'
import logo from '../assets/logo.png'
import cart from '../assets/cart.svg'
import '../styles/Navbar.css'
import {Link, useHistory} from 'react-router-dom'


export default function Navbar() {
  const history = useHistory();
  const { Search } = Input;
    const[visible, setVisible]=useState(false)
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    const[searchTerm, setSearchTerm]=useState()

    return (
      <div className='navbar__container'>
        <div className='navbar'>
          <img src={menu} className='menu-btn' onClick={showDrawer}></img>
          <img src={logo} onClick={()=>history.push('/')} className='logo'></img>
          <img src={cart} className='cart-btn' onClick={()=>history.push('/cart')}></img>

          <Drawer
            title={
              <span className='avatar-container'>
                <Link className='user-container' to='/account'>
                  <Avatar size="small" className='avatar' icon={<UserOutlined />} />
                  Guest
                </Link>
                <Link className='login-link'to='/login'>
                  Login
                </Link>
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
            <Badge count={1}><p className='cart'><Link to='/cart'>Cart</Link></p></Badge>
            <Divider plain>Categories</Divider>
            <p><Link to='/toys'>Toys</Link></p>
            <p><Link to='/floats'>Floats</Link></p>
            <p><Link to='/furniture'>Outdoor Furniture</Link></p>
            <p><Link to='/chemicals'>Chemicals</Link></p>
            <p><Link to='/equipment'>Equipment</Link></p>
            <p><Link to='/covers'>Covers</Link></p>
            </Drawer>
          </div>

          <div className='searchbar'>
            <Search
              value={searchTerm}
              className='search-bar'
              placeholder="Search Swimli"
              onChange={(e)=>setSearchTerm(e.target.value)}
              onSearch={() =>{
              const prom = new Promise(()=>history.push(`/results/${searchTerm}`))
                prom.then(setSearchTerm(""))
              }}
            />
          </div>
        </div>
  
      )
}
