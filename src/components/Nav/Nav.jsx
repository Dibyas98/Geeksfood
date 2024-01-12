import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Switch from "../switch/Switch";
const home ={
  color: 'blue'
}
const MenuOption = ['home','quotas','resturant','food','contact'];


export default function Nav(props) {
  const[men,setmen] = useState(props.menul)
  const handelmen=(ele)=>{
    setmen(ele);
    props.menu(ele);
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
                <Link to={ele} className= {`menu ${props.mode}text`} style={ele === `${men}` ? home : {}} onClick={()=>handelmen(ele)}>{ele}</Link>
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