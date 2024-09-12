import React from 'react';
import { about } from '../../../Assets/data/data';
import styled from './About.module.css'


const About = () => {
    return (
        <>

            <section className={`${styled.about} mt-2 `}>
                <div className="container">
                    <div className={`${styled.roww} row  align-items-center `}>

                        {about.map((index, i) => (
                            <>
                                <div className={`col-md-4 ${styled.second} `}>
                                    <div className="img ">
                                        <img src={index.cover} alt="" className="w-100"/>
                                    </div>
                                </div>

                                <div className="col-md-7 ">
                                    <div className={`${styled.title}  `}>
                                        <h1>About Me</h1>
                                    </div>
                                    <div className="aboutContent mb-4">
                                        <p>{index.desc}</p>
                                        <p>{index.desc1}</p>
                                    </div>

                                    <button className='btn btn-outline-warning'>Download CV</button>

                                </div>

                            </>
                        ))}
                    </div>
                </div>





            </section>

        </>
    )
}


export default About;