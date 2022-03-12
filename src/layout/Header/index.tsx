import React from "react";
import Image from "next/image";
import {
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsCurrencyDollar,
  BsPerson,
  BsHeart,
  BsFillCartFill,
} from "react-icons/bs";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

import {
  ToggleMenu,
  ToggleCart,
  ToggleFavorit,
  Span,
  Info,
  ButtonInfo,
  HeaderIcons,
  Col3,
  ButtonSearch,
} from "./styles";

const Header = () => {
  return (
    <>
      <body>
        {/* HEADER */}
        <header>
          {/* TOP HEADER */}
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li>
                  <a href="#">
                    <BsFillTelephoneFill size={12} color="#D10024" />{" "}
                    +021-95-51-84
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineMail size={12} color="#D10024" /> email@email.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsFillGeoAltFill size={12} color="#D10024" /> 1734
                    Stonecoal Road
                  </a>
                </li>
              </ul>
              <ul className="header-links pull-right">
                <li>
                  <a href="#">
                    <BsCurrencyDollar size={12} color="#D10024" /> USD
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsPerson size={12} color="#D10024" /> My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /TOP HEADER */}

          {/* MAIN HEADER */}
          <div id="header">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                  <div className="header-logo">
                    <a href="#" className="logo">
                      <Image
                        src={require("../../../img/logo.png")}
                        width={169}
                        height={70}
                      />
                    </a>
                  </div>
                </div>
                {/* /LOGO */}

                {/* SEARCH BAR */}
                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <ButtonSearch>Search</ButtonSearch>
                    </form>
                  </div>
                </div>
                {/* /SEARCH BAR */}

                {/* ACCOUNT */}
                <Col3>
                  <HeaderIcons>
                    {/* Wishlist */}
                    <ToggleFavorit>
                      <ButtonInfo>
                        <BsHeart
                          size={18}
                          color="#ffffff"
                          className="icon-favorite"
                        />
                        <Span>Your Wishlist</Span>
                        <Info>2</Info>
                      </ButtonInfo>
                    </ToggleFavorit>
                    {/* /Wishlist */}

                    {/* Cart */}
                    <ToggleCart>
                      <ButtonInfo>
                        <BsFillCartFill
                          size={18}
                          color="#ffffff"
                          className="icon-cart"
                        />
                        <Span>Your Cart</Span>
                        <Info>3</Info>
                      </ButtonInfo>
                    </ToggleCart>
                    {/* /Cart */}

                    {/* Menu Toogle */}
                    <ToggleMenu>
                      <ButtonInfo>
                        <AiOutlineMenu
                          size={18}
                          color="#ffffff"
                          className="icon-menu"
                        />
                        <Span>Menu</Span>
                      </ButtonInfo>
                    </ToggleMenu>
                    {/* /Menu Toogle */}
                  </HeaderIcons>
                </Col3>
                {/* /ACCOUNT */}
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* /MAIN HEADER */}
        </header>
        {/* /HEADER */}
      </body>
    </>
  );
};

export default Header;
