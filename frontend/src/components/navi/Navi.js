import React, { useEffect, useState, useContext } from "react";
import "./Navi.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import LanguageSelector from "../languageSelector/LanguageSelector";
import { LanguageContext } from "../language/Language";

const Navi = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { dictionary } = useContext(LanguageContext);

  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.background = "#9e2a2b";
        document.getElementById("navbar").style.opacity = "0.95";
      } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.background = "#faa307";
        document.getElementById("navbar").style.opacity = "1";
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <div>
      {window.innerWidth <= 800 ? (
        <div id="navbar">
          {" "}
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
              <img alt="logo" id="logo" src={logo}></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <p style={{ color: "orange" , height:'4vh'}}></p>
                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/">
                    <p>{dictionary.Homepage}</p>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/about/">
                    <p>{dictionary.Aboutus}</p>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/products/">
                    <p>{dictionary.ourProducts}</p>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/contact/">
                    <p>{dictionary.contact}</p>
                  </Link>
                </NavItem>
                <NavItem>
                  <LanguageSelector></LanguageSelector>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      ) : (
        <div id="navbar">
          <div></div>
          <div>
            <Link to="/">
              {" "}
              <p className="ism">{dictionary.Homepage}</p>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <p className="ism">{dictionary.Aboutus}</p>{" "}
            </Link>

            <Link to="/">
              {" "}
              <img alt="logo" className="ism2" id="logo" src={logo}></img>
            </Link>
            <Link to="/products">
              {" "}
              <p className="ism">{dictionary.ourProducts}</p>{" "}
            </Link>

            <Link to="/contact">
              {" "}
              <p className="ism">{dictionary.contact}</p>
            </Link>
          </div>
          <div className="lang">
            <LanguageSelector></LanguageSelector>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navi;
