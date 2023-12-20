import { CDN_URL, LOGO_URL } from "../../utils/constants";
import { useState,useEffect } from "react";
//Header component container
const Header=()=>{

    const [btnameReact,setbtnameReact]=useState("Login")
    console.log("header Render")
    useEffect(()=>{
        console.log("hi")
    },[btnameReact])

    
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
                        if((btnameReact ==="Login")?setbtnameReact("Logout"):setbtnameReact("Login"));
                    }}>{btnameReact}</button>
                </ul>
            </div>
        </div>
       
    )
}

export default Header;