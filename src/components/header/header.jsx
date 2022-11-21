import React from "react";
import logoImg from "../../image/logo.png";
import item from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className={item.wrap}>
        <div className={item.logo}>
          <img src={logoImg} alt="logo"/>
        </div>
        <nav className={item.container}>
          <Link to="/" className={item.under}>Главная</Link>
          <Link to="/production" className={item.under}>Производство</Link>
          <Link to="/catalog" className={item.under}>Каталог</Link>
          <Link to="/contacts"className={item.under}>Контакты</Link>
        </nav>
        <div className={item.nameBakery}>Куединский пекарь</div>
      </div>
  );
};
export default Header;
