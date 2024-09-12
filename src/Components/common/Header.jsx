import React from 'react';
import { useState } from 'react';
import logo from "../../Assets/imgs/logo.png";
import { navlink } from "../../Assets/data/data";
import { Link } from 'react-router-dom';
import styled from './Header.module.css';
import { Menu } from '@mui/icons-material';


const Header = () => {

    const [responsive, setResponsive] = useState(false)
    return (
        <>
            <header className={`${styled.header}   fixed-top `}>
                <div className="container d-flex  justify-content-between px-3">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className={`${responsive ? styled.hideMenu : styled.nav}  `}>
                        {navlink.map((link, i) => (
                            <Link to={link.url} key={i}>{link.text}</Link>
                        ))}
                    </div>

                    <div className={`${styled.toggle} align-items-center`} onClick={() => setResponsive(!responsive)}>
                        <Menu className='icon mt-0'></Menu>
                    </div>
                </div>

            </header>



        </>
    )
}



export default Header;