import {React ,useState}from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './footer/Footer';

export default function Layout({mode,toggle}) {
 
  const [menu,setmenu] = useState(()=>{
    const storemenu = localStorage.getItem('current');
    return (storemenu) ? storemenu :'home' 
  })
  const handelMenu = (arg)=>{
    console.log(menu);
    setmenu((pre)=>arg)
    localStorage.setItem("current", arg);
  }
  console.log(menu);
  return (
    <>
    <Nav mode={mode} toggle={toggle} menu={handelMenu} menul={menu}></Nav>
    <Outlet mode={mode}></Outlet>
    {<Footer></Footer>}
    
    </>
  )
}
