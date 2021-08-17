import React from 'react';
import './Header.css';
import { FiSearch, FiHeart, FiX, FiShoppingBag } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header({callback, removeCallback}) {
    let location = useLocation();
    return (
        <div className="header">
            <div className="header__top">
               <div className="header__topLogoContainer">
                    <img src="https://cdn.worldvectorlogo.com/logos/jordan-2.svg" alt="" className="header__topLogo"/>
               </div>
                <ul className="header__topCollection">
                    <li className="header__topItem">Help
                        <ul className="help__options">
                            <h3>Help</h3>
                            <li className="help__items">Order status</li>
                            <li className="help__items">Dispatch and delivery</li>
                            <li className="help__items">Returns</li>
                            <li className="help__items">Size charts</li>
                            <li className="help__items">Contact us</li>
                            <li className="help__items">Privacy Policy</li>
                            <li className="help__items">Terms of Sale</li>
                            <li className="help__items">Terms of Use</li>
                            <li className="help__items">Send us feedback</li>
                        </ul>
                    </li>
                    <li className="header__topItem">Join us</li>
                    <li className="header__topItem">Sign in</li>
                </ul>
            </div>
            <div className="main__header">
                <div className="mainheader__container">
                    <img src="https://brandlogos.net/wp-content/uploads/2020/11/nike-swoosh-logo.png" alt="" className="mainheader__logo"/>
                    <ul className="mainheader__collection">
                        <li className="mainheader__item">New Releases</li>
                        <li className="mainheader__item">Men</li>
                        <li className="mainheader__item">Women</li>
                        <li className="mainheader__item">Kids</li>
                        <li className="mainheader__item">Sale</li>
                        <li className="mainheader__item">Collections</li>
                    </ul>
                    <div className="mainheader__options">
                        <div className="searchbar" onClick={callback}>
                            <FiSearch/>
                            <input type="text" placeholder="Search" className="searchbar__input"/>
                        </div>
                        <FiHeart className="headermain__icons"/>
                        <NavLink to="/cart">
                            <FiShoppingBag className="headermain__icons"/>
                        </NavLink>
                    </div>
                    <div className="close__searchActive" onClick={removeCallback}>
                        <FiX/>
                    </div>
                </div>
            </div>
            {location.pathname.match("/cart") ? "" : <div className="header__sale">
                <p>Free Shipping & 60-Day Free Returns</p>
                <a href="https://www.google.com">Join now</a>
            </div>}

        </div>
    )
}

export default Header
