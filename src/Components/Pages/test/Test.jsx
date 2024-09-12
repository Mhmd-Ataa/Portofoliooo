import React from 'react';
import styled from './test.module.css';
import { testimonials } from '../../../Assets/data/data';

const Test = () => {  

    return (
        <>


            <section classNameName='test'>
                <div classNameName="container">

                    <div id="carouselExample" className={`${styled.big} carousel slide d-flex  align-items-center `}>
                        <div className="carousel-inner">
                            <div className={`${styled.cursol} carousel-item active `}>

                                <div className='text-center d-flex flex-column align-items-center justify-content-center'>
                                <h1 className='mb-5'>"</h1>
                                <p className='text-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce <br/> faucibus ligula scelerisque, eleifend turpis in",</p>
                                <img src="../../../imgs/team-1.png" className="d-block m-auto p-1 mb-3" alt="..."/>
                                <h4>Alamin Musa</h4>
                                <h5>Front End Developer</h5>
                                </div>
                                
                            </div>
                            <div className={`${styled.cursol} carousel-item  `}>

                                <div className='text-center '>
                                <h1 className='mb-5'>"</h1>
                                <p className='text-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce <br/> faucibus ligula scelerisque, eleifend turpis in",</p>
                                <img src="../../../imgs/team-2.png" className="d-block m-auto p-1 mb-3" alt="..."/>
                                <h4>Alex Ander</h4>
                                <h5>Back End Developer</h5>
                                </div>
                                
                            </div>
                            <div className={`${styled.cursol} carousel-item  `}>

                                <div className='text-center '>
                                <h1 className='mb-5'>"</h1>
                                <p className='text-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce <br/> faucibus ligula scelerisque, eleifend turpis in",</p>
                                <img src="../../../imgs/team-3.png" className="d-block m-auto p-1 mb-3" alt="..."/>
                                <h4>GorkCoder</h4>
                                <h5>React Developer</h5>
                                </div>
                                
                            </div>
                           
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>

            </section>

        </>
    )
}


export default Test;