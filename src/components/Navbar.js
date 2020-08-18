import React,{useState} from 'react'
import { Drawer, Divider,Avatar, Badge} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import menu from '../assets/menu.svg'


export default function Navbar() {
    const[visible, setVisible]=useState(false)
    const[childDraw, setChildDraw]=useState(false)
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    const showChildrenDrawer = () => setChildDraw(true);
    const onChildrenDrawerClose = () => setChildDraw(false);
    const[count, setCount]=useState(1)

    return (
        <div className='navbar'>
           <h1>Swimli</h1>
          <img src={menu} className='menu-btn' onClick={showDrawer}></img>
        
        <Drawer
          title={<span><Avatar size="small" className='avatar' icon={<UserOutlined />} />Guest</span>}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Badge count={count}><p className='cart' onClick={()=>setCount(count + 1)}>Cart</p></Badge>
          <Divider plain>Categories</Divider>
        <p>Toys</p>
        <p>Floats</p>
        <p>Outdoor Furniture</p>
        <p>Chemicals</p>
        <p>Equipment</p>
        <p>Covers</p>

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
    )
}
