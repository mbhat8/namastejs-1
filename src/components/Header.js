import { CDN_URL, LOGO_URL } from "../../utils/constants";
import { useState } from "react";
//Header component container
const Header=()=>{
    let [btnlogin,setBtnLogin]=useState("Login")
    return(
        <div className="header">
             <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <button className="login-button" onClick={()=>{
                        setBtnLogin("Logout")
                    }}>{btnlogin}</button>
                </ul>
            </div>
        </div>
       
    )
}

export default Header;