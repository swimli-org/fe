import React,{useState} from 'react'
import { Drawer, Divider,Avatar, Badge, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import menu from '../assets/menu.svg'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import account from '../assets/account.svg'
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
      <div className='navbar-container'>
        <div className='navbar'>
          
          <div className='menu-btn-container'>
            <img src={menu} className='menu-btn' alt='Menu Button' onClick={showDrawer}></img>
            <img src={logo} className='logo' alt='Logo' onClick={()=>history.push('/')}></img>
          </div>

          <div className='user-container'>
            <div className='user-container-tab'>
              <Link to='/cart'>
                <img src={cart} className='user-container-tab-icon' alt='Cart'></img>
                <div className='cart-badge'>0</div>
              </Link>
            </div>
            <div className='user-container-tab'>
              <Link to='/signin'>
                <img src={account} className='user-container-tab-icon' alt='Account'></img>
                <p>Sign In</p>
              </Link>
            </div>
            
          </div>

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

          
  

          <Drawer
            title={
              <Link className='sidebar-user-container' to='/personal'>
                <Avatar size="small" className='sidebar-user-avatar' icon={<UserOutlined />} />
                <div className='sidebar-user-username' to='/overview'>
                  <Link to='/personal' >
                    {name !="null null"? name:'Guest'}
                  </Link>
                </div>
              </Link>
            }
            placement="left"
            closable={true}
            onClick={(e) => {
              if(e.target.tagName.toLowerCase() === 'a'){
                onClose()
              }
            }}
            onClose={onClose}
            visible={visible}
          >
            


            <span className='signin-container'>
              {name !="null null"? <Link className='signin-link' onClick={()=>{
                localStorage.removeItem('swimliFirstName') 
                localStorage.removeItem('swimliLastName')}}to='/'>
                Sign Out
              </Link>:<Link className='signin-link'to='/signin'>
                Sign In
              </Link>}
                
            </span>

          </Drawer>
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




/* For search
<Search
value={searchTerm}
className='search-bar1'
placeholder="Search Swimli..."
onChange={(e)=>setSearchTerm(e.target.value)}
onSearch={() =>{
const prom = new Promise(()=>history.push(`/s/${searchTerm}`))
  prom.then(setSearchTerm(""))
}}
/>
*/