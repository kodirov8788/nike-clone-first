import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import MainContent from "../../components/maincontent/MainContent";
import SchoolSale from "../../components/schoolsale/SchoolSale";
import Trending from "../../components/trending/Trending";
import Foundation from "../../components/foundation/Foundation";
// import Carousel from '../../components/carousel/Carousel';
import UsaTeam from "../../components/usa-team/UsaTeam";
import Benefits from "../../components/benefits/Benefits";
import FooterTop from "../../components/footer-top/FooterTop";
import { FiX } from "react-icons/fi";

function Home() {
  const [show, setShow] = useState(true);
  const showPopup = (e) => {
    localStorage.setItem(
      "kdjasfkjdskflasjfklsdkasjkldjklajdkl",
      "dlkasjkldjklsajdkljfejfgtgtifjeo"
    );

   setShow(false);
  };
  useEffect(() => {
      if(localStorage.getItem("kdjasfkjdskflasjfklsdkasjkldjklajdkl" ) ==="dlkasjkldjklsajdkljfejfgtgtifjeo" ){setShow(false)}
  }, [show]);
  return (
    <div className="home">
      {show ? (
        <div className="popup">
          <FiX onClick={showPopup} />
        </div>
      ) : (
        ""
      )}
      <div className="main__container">
        <Banner />
        <MainContent />
        <SchoolSale />
        <Trending />
        <Foundation />
        {/* <Carousel/> */}
        <UsaTeam />
        <Benefits />
        <FooterTop />
      </div>
    </div>
  );
}

export default Home;
