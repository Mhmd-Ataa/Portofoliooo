import React from 'react';
import { project } from '../../../Assets/data/data';
import styled from './Project.module.css';
import CountUp from 'react-countup';


const Projects = () => {
    return (
        <>
            <div className={`${styled.projects} py-5 `}>
                <div className="container">
                   
                    <div className="row py-5">
                        {project.map((i, d) => (
                            <div className="col-md-3" key={d}>
                                <div className={`${styled.card} text-center`}>
                                    <h6>{i.icon}</h6>
                                    <h3>
                                        <CountUp enableScrollSpy duration={3} end={i.num}  />
                                    </h3>
                                    <p>{i.title}</p>


                                </div>
                            </div>
                        ))}


                    </div>

                </div>

            </div>
        </>
    )
}



export default Projects;