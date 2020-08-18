import React,{useState} from 'react'
import { Drawer, Button } from 'antd';
import menu from '../assets/menu.svg'


export default function Navbar() {
    const[visible, setVisible]=useState(false)
    const[childDraw, setChildDraw]=useState(false)
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    const showChildrenDrawer = () => setChildDraw(true);
    const onChildrenDrawerClose = () => setChildDraw(false);

    return (
        <div className='navbar'>
           <h1>Swimli</h1>
          <img src={menu} className='menu-btn' onClick={showDrawer}></img>
        
        <Drawer
          title="Categories"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
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
