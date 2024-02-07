import React from 'react';
import styles from './header.module.css';
import headerLogo from "../Header/headers-img/header_logo.svg";
import userIcon from "../Header/headers-img/user-icon.svg";
import searchIcon from "../Header/headers-img/search-icon.svg";
import heartIcon from "../Header/headers-img/heart-icon.svg";
import cartIcon from "../Header/headers-img/cart-icon.svg";



const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__logoConteiner}>
          <img src={headerLogo} alt="logo" />
          <h2>Furniro</h2>
        </div>
        
        <nav className={styles.header__navbar}> 
          <a className={styles.header__navbar_item} href="#">Home</a>
          <a className={styles.header__navbar_item} href="#">Shop</a>
          <a className={styles.header__navbar_item} href="#">About</a>
          <a className={styles.header__navbar_item} href="#">Contact</a>
        </nav>
        
        <div  className={styles.header__userMenu_conteiner}>
            <img src={ userIcon } alt="user icon" className="header__user-menu-item" />
            <img src={ searchIcon } alt="serch icon" className="header__user-menu-item" />
            <img src={ heartIcon} alt="like`s icon" className="header__user-menu-item" />
            <img src={ cartIcon } alt="cart icon" className="header__user-menu-item" />
        </div>
    </div>
  )
}

export default Header
