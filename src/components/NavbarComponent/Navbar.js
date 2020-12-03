import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="header">
            
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="header__logo__div">
                    <img className="header__logo" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" />
                    <span className="explore__plus">
                        Explore <span className="plus"> plus </span> 
                        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"/>
                    </span>
                </div>
            </Link>
            
            
            {/* Searchbar */}
            <div className="header__searchbar">
                <input type="text" placeholder="Search for products,brands and more" />
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
            </div>
            {/* Login */}
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <div className="header__login">
                   <span>
                        Login
                   </span> 
                </div>
            </Link>

            <Link to="/cart" style={{ textDecoration: 'none' }}>
                <div className="header__cart">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    <span>
                    Cart

                    </span>
                </div>
            </Link>
            
            {/* Cart */}
        </div>
    )
}

export default Navbar
