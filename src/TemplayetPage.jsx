import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Outlet } from "react-router-dom";

const TemplayetPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default TemplayetPage;