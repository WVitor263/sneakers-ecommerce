
import React from 'react';
import './Header.css';
import avatar from '../../assets/images/image-avatar.png';
import cart from '../../assets/images/icon-cart.svg';
import menuHamburger from '../../assets/images/icon-menu.svg';
import closeMenu from '../../assets/images/icon-close.svg';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // This component renders the header of the application
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (


    <header className="header">


      <div className='header-left'>
        <div className="menu-hamburger" onClick={toggleMenu}>
          <img src={menuHamburger} alt="menu" />
        </div>


        <div className="logo">
          <img src={logo} alt="sneakers logo" />
        </div>
      </div>

      

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>

        <div className="nav-close" onClick={toggleMenu}>

          <img src={closeMenu} alt="botton close" />

        </div>
        <ul className="nav-list">
          <li><a href="#">Collections</a></li>


          <li><a href="#">Men</a></li>


          <li><a href="#">Women</a></li>


          <li><a href="#">About</a></li>


          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="icons">
        <div className="cart">
          <img src={cart} alt="cart" />
          <span className="cart__count">3</span>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

      </div>

      {menuOpen && <div onClick={toggleMenu} className="overlay"></div>}

    </header>


  );
}