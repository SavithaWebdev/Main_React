import logo from "../../logo.png";
import {useState} from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = ()=>{
  const [btnText, setBtnText]= useState('LOGIN');
  return(
    <div className="header">
     <div className="logo-container">
     <img className = "logo" src={logo} alt="logo-image"></img>
     </div>
     <div className="nav-items">
     <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About Us</Link></li>
     <li><Link to="/contact">Contact</Link></li>
     <li>Cart</li>
     <button className="login-btn" onClick={()=>{
      btnText==='LOGIN'? setBtnText('LOGOUT'):setBtnText('LOGIN');
     }}>{btnText}</button>
     </ul>
     
     </div>
    </div>
  )
}
export default Header;