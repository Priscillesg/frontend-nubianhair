import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="nav">
                <div class="container">
                    <h1 class="logo"><a href="/">Nubian Hair Style</a></h1>
                    <Link to="Login">SIGN IN/SIGN UP</Link>
                    <Link to="favouritesList">FAVOURITES</Link>
                    <button>Log Out</button>
                    {/* <ul> 
                        <li><a href="/">HOME</a></li>                  
                        <li><a href="a">SIGN IN</a></li>
                        <li><a href="portfolio.html">SIGN UP</a></li>
                    </ul> */}
                </div>
            </nav>
        </div>
    )
}

export default Header