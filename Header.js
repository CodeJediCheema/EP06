import { LOGO_URL } from "./utils/constants";
import { useState } from "react";

const Header = () =>{
    const [btnName, setbtnName] = useState("Login");
    console.log("Header rendered");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>

            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        
                    }}> {btnName}</button>
                </ul>

            </div>
        </div>
        
    )
};

export default Header;