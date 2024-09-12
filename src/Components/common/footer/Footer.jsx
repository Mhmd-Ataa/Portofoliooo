import React from 'react';
import { social } from "../../../Assets/data/data";
import styled from './Footer.module.css'


const Footer = () => {
    return (
        <>
            <footer className='py-5 bg-black text-center '>
                {social.map((d, i) => (
                    <>
                        <i className='mx-2' style={{color:"orange"}}>{d.icon}</i>
                        
                    </>
                ))}
                <p className='mt-4'>Lorem ipsum dolor sit  elit.</p>


            </footer>

        </>
    )
}


export default Footer;