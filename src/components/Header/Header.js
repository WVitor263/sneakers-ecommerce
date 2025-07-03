
import React from 'react';
import './Header.css';
import avatar from '../../assets/images/image-avatar.png';
import cart from '../../assets/images/icon-cart.svg';
import menuHamburger from '../../assets/images/icon-menu.svg';
import closeMenu from '../../assets/images/icon-close.svg';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (


    <header className="header">


      <div className='header-left'>
        <button className="menu-hamburger" onClick={toggleMenu}>
          <img src={menuHamburger} alt="Abrir Menu" />
        </button>


        <a href='/' className="logo">
          <img src={logo} alt="sneakers logo" />
        </a>
      </div>

      

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>

        <button className="nav-close" onClick={toggleMenu}>

          <img src={closeMenu} alt="Fechar Menu" />

        </button>
        <ul className="nav-list" role='menu'>
          <li><a href="#" role='menuitem'>Collections</a></li>


          <li><a href="#" role='menuitem'>Men</a></li>


          <li><a href="#" role='menuitem'>Women</a></li>


          <li><a href="#" role='menuitem'>About</a></li>


          <li><a href="#" role='menuitem'>Contact</a></li>
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