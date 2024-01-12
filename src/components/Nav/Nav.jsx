import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Switch from "../switch/Switch";
import { nanoid } from "nanoid";
const home = {
  color: "blue",
};
const MenuOption = ["home", "quotas", "resturant", "food", "contact"];

export default function Nav(props) {
  const [men, setmen] = useState(props.menul);
  const handelmen = (ele) => {
    setmen(ele);
    props.menu(ele);
  };
  
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);


  return (
    <nav className={`${props.mode}back`}>
      <div className="nav-container">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h1>GeekFood</h1>
        </div>

        <div className="menu">
          <ul>
            {MenuOption.map((ele, index) => (
              <li key= {nanoid()}>
                <Link
                  to={`/${ele}`}
                  className={`menu ${props.mode}text`}
                  style={ele === `${men}` ? home : {}}
                  onClick={() => handelmen(ele)}
                >
                  {ele}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="get-started">
          <button>get Started</button>
        </div>
        <Switch toggle={props.toggle}> </Switch>
      </div>
      <div
        className="mobile"
        style={{ color: props.mode === "dark" ? "black" : "white" }}
      >
        <i className="fa-solid fa-bars relative" onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
></i>
        {isMobileMenuVisible ?<div  className="w-44 absolute h-screen p-3 bg-[#ffba08]  right-0 rounded-tl-xl top-16 animate__animated animate__slideInRight">
        <ul className="flex flex-col gap-2">
            {MenuOption.map((ele, index) => (
              <li key={nanoid()}>
                <Link
                  to={`/${ele}`}
                  className="capitalize"
                  style={ele === `${men}` ? home : {}}
                  onClick={() => handelmen(ele)}
                   >
                  {ele}
                </Link>
              </li>
            ))}
          </ul>
        </div>:null

        }
      </div>
    </nav>
  );
}
