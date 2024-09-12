import React from 'react';
import { Outlet } from 'react-router';
import Footer from './common/footer/Footer';
import Header from './common/Header';

const Layout = () => {
    return <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>

    </>
}


export default Layout;