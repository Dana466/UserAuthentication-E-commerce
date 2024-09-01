import React from 'react';
import { logoutUser } from '../utils/firebaseauthfcts';
import searchimage from '../assests/search.png';
import heartimage from '../assests/heart.png';
import cardimage from '../assests/cart.png';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/*const TopNav = () => {


  return (
    <div className="top_nav">
      <div className="container top_nav_container">
        <div className="top_nav_wrapper">
          <p className="tap_nav_p">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="top_nav_link">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};*/

const Nav = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile'); 
  };

  const handleSignout = async (e: React.FormEvent) => {
    e.preventDefault();

    const userConfirmed = window.confirm('Are you sure you want to logout?');
  
    if (userConfirmed) {
      try {
        await logoutUser(); 
      
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };
  

  return (
    <nav className="nav">
      <div className="container nav_container">
        <div className="nav_logo">EXCLUSIVE</div>
        <ul className="nav_list">
          <li className="nav_item"><a href="/" className="nav_link">Home</a></li>
          <li className="nav_item"><a href="/store" className="nav_link">store</a></li>
          <li className="nav_item"><a href="/profile" className="nav_link">profile</a></li>
          <li className="nav_item">
            <a href="./sign-up.html" className="nav_link" onClick={handleSignout}>Sign out</a>
          </li>
        </ul>
        <div className="nav_items">
          <form action="#" className="nav_form">
            <input
              type="text"
              className="nav_input"
              placeholder="search here...."
            />
            <img src={searchimage} alt="" className="nav_search" />
          </form>
          <img src={heartimage} alt="" className="nav_heart" />
          
            <img src={cardimage} alt="" className="nav_cart" />
            <FaUserCircle className='nav_user' onClick={ handleClick } size={35} />
          
        </div>
     
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <nav className="mobile_nav mobile_nav_hide">
      <ul className="mobile_nav_list">
        <li className="mobile_nav_item">
          <a href="/shop" className="mobile_nav_link">Home</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/store" className="mobile_nav_link">store</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/forget-password" className="mobile_nav_link">Contact</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/sign-up.html" className="mobile_nav_link">Sign Up</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/cart.html" className="mobile_nav_link">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div>
      
      <Nav />
      <MobileNav />
    </div>
  );
};

export default Header;