import React from 'react';
import About from '../Pages/about/About';
import Blog from '../Pages/blog/Blog';
import Portfolio from '../Pages/portfolio/Portfolio';
import Projects from '../Pages/projects/Projects';
import Services from '../Pages/services/Services';
import Hero from './hero/Hero';
import Contacts from '../Pages/contacts/Contacts'
import Test from '../Pages/test/Test';

const Home = () => {
    return(
        <>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Portfolio/>
        <Test/>
        <Blog/>
        <Contacts/>
        </>

    ) 
}



export default Home;