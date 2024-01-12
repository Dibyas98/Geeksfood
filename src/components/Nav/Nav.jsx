import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Switch from "../switch/Switch";
const home ={
  color: 'blue'
}
const MenuOption = ['home','quotas','resturant','food','contact'];


export default function Nav(props) {
  const [menu,setmenu] = useState(()=>{
    const storemenu = localStorage.getItem('current');
    return (storemenu) ? storemenu :'home' 
  })
  const handelMenu = (arg)=>{
    console.log(menu);
    setmenu((pre)=>arg)
    localStorage.setItem("current", arg);
  }


  return (
    <nav className= {`${props.mode}back`}>
      <div className="nav-container">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h1>GeekFood</h1>
          
        </div>

        <div className="menu">
          <ul>
          {
            MenuOption.map((ele, index) => (
              <li key={new Date()+index}  >
                <Link to={`/${ele}`} className= {`menu ${props.mode}text`}>{ele}</Link>
              </li>
            ))
          
          
          }
          </ul>
        </div>
        <div className="get-started">
          <button>get Started</button>
        </div>
        <Switch  toggle = {props.toggle}> </Switch>
      </div>
      <div className="mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
    </nav>
  );
}