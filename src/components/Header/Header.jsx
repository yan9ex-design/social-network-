import React from 'react';
import s from './Header.module.css';
 const Header = () => {
    return (
        <header className={s.header}>
        <img className={s.header_logo} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.946239694.1710720000&semt=ais" alt="img"></img>
      </header>
    );
 }
 
 export default Header;