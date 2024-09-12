import React, { useState } from 'react';
import { portfolio } from '../../../Assets/data/data';
import styled from './Portfolio.module.css';



const allCateg = ['all', ...new Set(portfolio.map((item) => item.category))]

const Portfolio = () => {
    
    const [list, setList] = useState(portfolio);
    const [category, setCateg] = useState(allCateg);

    function filterItems(category) {
        const newItem = portfolio.filter((item) => item.category === category)
        setList(newItem);

        if (category === 'all') {
            setList(portfolio)
        }

    }

    return (
        <>
            <article className='my-5 py-5'>
                <div className="container">


                    <div className={`${styled.title}`}>
                        <h1 className='text-center'>Portfolio</h1>
                    </div>

                    <div className='btns d-flex justify-content-center my-4  flex-wrap'>
                        {category.map((category, i) => (
                            <button className={`${styled.bttn} btn btn-outline-warning mx-2 mb-3`} onClick={() => filterItems(category)} key={i}>
                                {category}

                            </button>

                        ))}

                    </div>

                    <div className="content ">
                        <div className="row">
                            {list.map((item, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className={`${styled.box} position-relative`}>
                                        <div className="img ">
                                            <img src={item.cover} className='w-100 ' />
                                        </div>

                                        <div className={`${styled.overlay} position-absolute d-flex flex-column justify-content-center  align-items-center`}>
                                            <h3>{item.title}</h3>
                                            <span>{item.name}</span>
                                        </div>
                                    </div>

                                </div>


                            ))}

                        </div>


                    </div>
                </div>
            </article>

        </>
    )
}


export default Portfolio;