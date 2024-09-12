import React from 'react';
import { services } from '../../../Assets/data/data';
import styled from './Services.module.css'

const Services = () => {
    return (
        <>

            <section className='services py-5 mt-5'>
                <div className="container ">
                    
                    <div className={`${styled.title}`}>
                        <h1 className='text-center'>Services</h1>
                    </div>
                    <div className="row ">
                        {services.map((d, i) => (
                            <div className="col-md-4 mt-4" key={i}>
                                <div className={`${styled.card} p-4`}>
                                    <h6 className='mb-4'>{d.icon}</h6>
                                    <h5>{d.title}</h5>
                                    <p className='w-75'>{d.desc}</p>
                                </div>
                            </div>


                        ))}

                    </div>
                </div>

            </section>


        </>
    )
}



export default Services;