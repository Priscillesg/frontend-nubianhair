import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="nav">
                <div class="container">
                    <h1 class="logo"><a href="/">Nubian Hair Style</a></h1>
                    <ul> 
                        <li><a href="/">HOME</a></li>                  
                        <li><a href="a">SIGN IN</a></li>
                        <li><a href="portfolio.html">SIGN UP</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header