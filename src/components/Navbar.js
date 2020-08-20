import React,{useState} from 'react'
import { Drawer, Divider,Avatar, Badge, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import menu from '../assets/menu.svg'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {
  const { Search } = Input;
    const[visible, setVisible]=useState(false)
    const[childDraw, setChildDraw]=useState(false)
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    const[count, setCount]=useState(1)

    const[searchTerm, setSearchTerm]=useState()
    return (
        <div className='navbar'>
          <div className="navbarContainer">
            <a href="http://localhost:3000/"><img src={logo} className='logo'></img></a>

            {console.log(searchTerm)}
            <Search
              value={searchTerm}
              className='search-bar'
              placeholder="Search Swimli"
              onChange={(e)=>setSearchTerm(e.target.value)}
              onSearch={() =>alert(`You searched for ${searchTerm}`)}
            />

            <img src={menu} className='menu-btn' onClick={showDrawer}></img>

            <Drawer
              title={<span className='avatar-container'><Avatar size="small" className='avatar' icon={<UserOutlined />} /><p className='username'>Guest</p></span>}
              placement="right"
              closable={false}
              onClick={(e) => {
                if(e.target.tagName.toLowerCase() === 'a'){
                  onClose()
                }
              }}
              onClose={onClose}
              visible={visible}
            >
            <Badge count={count}><p className='cart' onClick={()=>setCount(count + 1)}>Cart</p></Badge>
            <Divider plain>Categories</Divider>
            <p><Link to='/toys'>Toys</Link></p>
            <p><Link to='/floats'>Floats</Link></p>
            <p><Link to='/furniture'>Outdoor Furniture</Link></p>
            <p><Link to='/chemicals'>Chemicals</Link></p>
            <p><Link to='/equipment'>Equipment</Link></p>
            <p><Link to='/covers'>Covers</Link></p>

              {/* <Button type="primary" onClick={showChildrenDrawer}>
                Two-level drawer
              </Button>
              <Drawer
                title="Two-level Drawer"
                width={320}
                closable={false}
                onClose={onChildrenDrawerClose}
                visible={childDraw}
              >
                This is two-level drawer
              </Drawer> */}

            </Drawer>
          </div>
        </div>
      )
}
