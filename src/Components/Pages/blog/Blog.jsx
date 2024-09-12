import React from 'react';
import { blog } from '../../../Assets/data/data';
import styled from './Blog.module.css'

const Blog = () => {
    return (
        <>
            <section className='blog py-5 mt-5'>
                <div className="container">
                    <div className={`${styled.title} text-center pb-4`}>
                        <h1>Blog</h1>
                    </div>
                    <div className="row">
                        {blog.map((d, i) => (
                            <div className="col-md-4">
                                <div className={`${styled.card} mb-3`}>
                                    <img src={d.cover} alt="" className='mb-3 w-100 ' />
                                    <div className="card-cont p-4">
                                        <h4>{d.title}</h4>
                                        <h5>By {d.author} {d.date}</h5>
                                        <p className='mt-4'>{d.desc}</p>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}


export default Blog;