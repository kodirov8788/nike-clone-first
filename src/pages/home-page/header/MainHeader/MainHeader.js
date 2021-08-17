import React, { useState } from "react";
import "./MainHeader.css";
import nikeLogo from "../../../../assets/nike.png";
import { NavLink } from "react-router-dom";
import { MAIN_HEADER_DATA } from "../../../../data/header-data/MAIN_HEADER_DATA";
import { SEARCH_RESULTS_DATA } from "../../../../data/header-data/SEARCH_RESULTS_DATA";
import { FiSearch, FiHeart, FiShoppingBag, FiX } from "react-icons/fi";

function MainHeader() {
  const [actionSearch, setActionSearch] = useState(false);
  const [extend, setExtend] = useState();
  const [extend2, setExtend2] = useState([]);
  const handleExtendData = (exdendedData) => {
    setExtend(exdendedData);
  };
  console.log(extend2);
  return (
    <div className={actionSearch ? "active__header" : "main__header"}>
      <div
        className={
          actionSearch ? "active__headerContainer" : "mainheader__container"
        }
      >
        <div className="mainHeader__logo">
          <img src={nikeLogo} alt="" className="mainHeader__logoImage" />
        </div>
        <ul
          className={
            actionSearch
              ? "disabled__headerCollection"
              : "mainHeader__collection"
          }
        >
          {MAIN_HEADER_DATA?.map((mainNavItem) => (
            <li
              className="mainHeader__item"
              key={mainNavItem?.id}
              onMouseOut={() => (
                setExtend(false), setExtend2(mainNavItem.additionalSections)
              )}
              onMouseOver={() =>
                handleExtendData(mainNavItem?.additionalSections)
              }
            >
              <NavLink className="links big" to={`${mainNavItem?.route}`}>
                <span className="mainNav__title">{mainNavItem?.linkName}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          onMouseOver={() => setExtend(!extend)}
          onMouseOut={() => setExtend(!extend)}
          className={extend ? "mainHeader__extend" : "mainHeader__close"}
        >
          {extend
            ? extend2?.map((item2) =>

              <div className="nav__extend__container">
                <div className="navbar__extend__header">
                  <h2>{item2.extendTitle}</h2>
                </div>
                <div className="navbar__extend__title">
                  <p>{item2.title}</p>
                </div>
              </div>

            )
            : ""}

        </div>
        <div
          className={
            actionSearch
              ? "active__container"
              : "mainHeader__searchbarContainer"
          }
        >
          <div
            className={
              actionSearch ? "active__mainSearchbar" : "mainHeader__searchbar"
            }
          >
            <div className="search__icon">
              <FiSearch className="icons" />
            </div>
            <input
              onClick={() => setActionSearch(true)}
              type="text"
              className="searchbar__input"
              placeholder="Search"
              minLength={3}
            />
          </div>
          {actionSearch ? (
            <ul className="search__results">
              <p className="search__title">Popular Search Reults</p>
              {SEARCH_RESULTS_DATA?.map((searchResult) => (
                <li key={searchResult?.id} className="search__result">
                  {searchResult?.searchResult}
                </li>
              ))}
            </ul>
          ) : (
            <div className="searchbar__options">
              <div className="searchbar__item">
                <FiHeart className="icons" />
              </div>
              <div className="searchbar__item">
                <FiShoppingBag className="icons" />
              </div>
            </div>
          )}
        </div>
        {actionSearch ? (
          <div
            className="searchbar__canceler"
            onClick={() => setActionSearch(false)}
          >
            {" "}
            <FiX />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MainHeader;
