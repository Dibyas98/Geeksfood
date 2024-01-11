import {React ,useState}from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './footer/Footer';

export default function Layout({mode,toggle}) {
 
  const [menu,setmenu] = useState('home')
  const handelMenu = (arg)=>{
    setmenu((pre)=>arg)
  }
  return (
    <>
    <Nav mode={mode} toggle={toggle} menu={handelMenu} ></Nav>
    <Outlet mode={mode}></Outlet>
    {menu === 'food' || menu === 'contact' ?null :<Footer></Footer>}
    
    </>
  )
}
