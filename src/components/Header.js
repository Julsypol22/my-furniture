import React from 'react';
import logo from "../img/Funiro..png"
import {NavLink} from 'react-router-dom'
import heart from "../img/Icon/Heart.svg"
import cart from "../img/Icon/Cart.svg"
import avatar from "../img/Icon/Avatar.svg"
import Carousel from './common/Carousel';
import magnifier from '../img/Icon/Searchmagnifier.svg'
import Dropdown from './common/DropdownMenu';






class Header extends React.Component {
  render () {
    return (
      <>
        <div className="header-bg">
          <div className="max_width header">
            <div className="head-wrap">
              <div className="logo">
                  <img src={logo} alt="logo"/>
              </div>
              <div className="header-menu">
                  <NavLink to="/">Products</NavLink>
                  <NavLink to="/">Rooms</NavLink>
                  {/* <Dropdown /> */}
                  <NavLink to="/">Inspirations</NavLink>
                  <input type="text" placeholder="Search for minimalist chair"/>
              </div>
            </div>
            
            <div className="header-icons">
              <img src={heart} alt="heart" />
              <img src={cart} alt="cart" />
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="carousel_wrap">
             <Carousel /> 
            <div className="modal_window">
              <div className="modal_heading">
                <h1>High-Quality Furniture Just For You</h1>
              </div>
              <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
              <button>Shop Now</button>
            </div>
          </div>
          
        </div>
        
      </>
    )
  }
}
export default Header;
