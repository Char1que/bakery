import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import item from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div>
            <Header/>
            <div className={item.not__found_page}>Not found page 404.
            <NavLink className={item.link} to="/">
                На главную
            </NavLink>
            </div>
            <Footer/>
        </div>
    );
};

export default NotFoundPage;