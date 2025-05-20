import myPhoto from '../images/aggrey.jpg'
import gitHub from '../images/icons8-github 1.png'
import gMail from '../images/icons8-gmail (1) 1.png'
import linkedIn from '../images/Vector.png'
import whatsapp from '../images/Vector-1.png'
import React, { useState, useEffect } from "react";

const Hero = () => {

    
    return ( 
        <div id="hero-section">
            <section className="hero-container">
 
                <div className="introduction">
                <div className="image-container">
                <div className="available-for-work">
                      <p><span></span>Avaibale for Work</p>
                    </div>
                    <img src={myPhoto} className="myphoto" />

                    <div className="circle"></div>
                </div>

                    <h3>UI/UX DESIGNER AND FRONT-END DEVELOPER</h3>
                    <div className="hint-skills">
                      <p><span></span>Turn UI designs into code</p>
                      <p><span></span>Mockups and prototypes</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="about-me ">
                  <h5>BIO</h5>
                <h1>Hi, I'm Aggrey Maphutha</h1>
                    <div className="hero-story scroll">

                        <p className="about-text ">I'm Aggrey Maphutha, a 23-year-old aspiring software developer from Ga-Masemola,
                            Limpopo. I am currently in my final year at Nkangala TVET College, where I am pursuing a
                            qualification in Information Technology and Computer Science.
                        </p>
                        <p className="about-text "> Outside of my academic pursuits, I enjoy staying updated on the latest tech
                            trends, and exploring new technologies. I also take pride in my problem-solving abilities,
                            adaptability, and dedication to continuous learning. I’m
                            excited about the future and look forward to contributing to the tech industry as a software
                            developer.</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://github.com/maphuthaaggrey-prog" target="_blank"><img src={gitHub} className='icon'/></a>
                      <a href="https://www.linkedin.com/in/maphutha-chikane/" target="_blank"><img src={linkedIn} className='icon'/></a>
                      <a href="mailto:maphuthaaggrey83@gmail.com"><img src={gMail} className='icon'/></a>
                      <a href="https://wa.link/hxnh0o" target="_blank"><img src={whatsapp} className='icon'/></a>
                    </div>


                </div>

            </section>
        </div>

     );
}
 
export default Hero;