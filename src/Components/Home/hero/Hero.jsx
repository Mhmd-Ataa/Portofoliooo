import React from 'react';
import Typewriter from 'typewriter-effect';
import { home } from "../../../Assets/data/data";
import styled from "../hero/Hero.module.css"


const Hero = () => {
    return(
        <>
          <section className={`${styled.hero} d-flex align-items-center `}>
              {home.map((text , i) =>(
                  <div className={`${styled.heroContainer} text-center  `}>
                      <h3>{text.text}</h3>
                      <h1>                        
                            <Typewriter options={{strings : [`${text.name}` , `${text.post}`,`${text.design}` ] , autoStart:true , loop:true}}></Typewriter>
                      </h1>
                      <p>{text.desc}</p>
                      <button className='btn btn-outline-warning'>Download CV</button>
                  </div>

              ))}


          </section>
        </>

    ) 
}



export default Hero;