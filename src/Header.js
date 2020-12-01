import './Header.css';
import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"  
import { default as KART } from './icons/iconfinder-icon.svg';
import { useStateValue } from './StateProvider';

function Header() {
    const [{kart}]=useStateValue();
    return (<header className="header">
    <div id="header-content">
        <Link to="/">
            <img alt="logo Amazon" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" />
        </Link>
      
      <div id="header-search">
        <input type="text" className="header_SearchInput"/>
        <SearchIcon className="header_serachIcon"/>
      </div>
      
      <div id="header_nav">
            <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_option_first">Hello,</span>
                    <span className="header_option_second">Sign In</span>
                </div>
            </Link>
            
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_option_first">Returns</span>
                    <span className="header_option_second">& Orders</span>
                </div>
            </Link>    
            
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_option_first">Your</span>
                    <span className="header_option_second">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header_link">
                <div id="header_optionKart">
                      <span className="header_option_second" id="header_kartcount">{kart.length}</span>
                      <img src={KART}/>
                </div>
            </Link> 
      </div>

    </div>
  
  </header>
    )
 
  
}

export default Header;
