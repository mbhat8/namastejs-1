import { CDN_URL, LOGO_URL } from "../../utils/constants";
//Header component container
const Header=()=>{
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
                </ul>
            </div>
        </div>
       
    )
}

export default Header;