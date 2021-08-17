import React from "react";
import "./HeaderTop.css";
import jordanLogo from "../../../../assets/jordan.svg";
import converseLogo from "../../../../assets/converse-icon.png";
import { TOP_HEADER_DATA } from "../../../../data/header-data/TOP_HEADER_DATA";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="headerTop__container">
        <div className="headerTop__logoWrapper">
          <NavLink to="/jordan">
            <img src={jordanLogo} alt="" className="headerTop__logo" />
          </NavLink>
          <NavLink to="/converse">
            <img src={converseLogo} alt="" className="headerTop__logo" />
          </NavLink>
        </div>
        <ul className="header__topCollection">
          <li className="header__topItem">
            <NavLink className="links" to="/">Help</NavLink>
            <div className="headerTop__dropdown">
              <h2 className="dropdown__title">Help</h2>
              <ul className="topItem__collection">
                {
                    TOP_HEADER_DATA?.map(topItem => (
                      <li key={topItem?.id} className="headerTop__ItemChild">
                          <NavLink className="links__secondary" to={`${topItem?.route}`}>
                            {topItem?.dropdownName}
                          </NavLink>
                      </li>
                    ))
                }
              </ul>
            </div>
          </li>
          <li className="header__topItem">
            <NavLink className="links" to="/">Join us</NavLink>
          </li>
          <li className="header__topItem">
            <NavLink className="links" to="/">Sing In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
