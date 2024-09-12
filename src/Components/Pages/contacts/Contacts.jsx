import React from 'react';
import { contact } from '../../../Assets/data/data';
import styled from './Contacts.module.css';

const Contacts = () => {
    return (
        <>
            <section className={`${styled.contacts} d-flex align-items-center py-5 mt-5`}>
                <div className="container ">
                    <div className={`${styled.title} text-center pb-5`}>
                        <h1>Contact Us</h1>
                    </div>
                    <div className={`row `}>
                        <div className="col-md-9">
                            <form>

                                <div className="input-box d-flex">
                                    <input type="text" className='form-control me-2 'placeholder='Name' />
                                    <input type="text" className='form-control' placeholder='E-mail' />
                                </div>
                                <div className="input-box my-3">
                                    <input type="text" className='form-control' placeholder='Subject' />
                                </div>
                                <div className="input-box">
                                    <textarea rows="8" className='form-control'></textarea>
                                </div>

                                <button className={` btn btn-warning form-control mt-3`}>Submit</button>
                            </form>


                        </div>
                        <div className="col-md-3">
                            {contact.map((d, i) => (

                                <div className={`${styled.card}  ms-4 `}>
                                    <h3 className='mb-4'>{d.icon}</h3>
                                    <p>{d.text1}</p>
                                    <p>{d.text2}</p>


                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}



export default Contacts;