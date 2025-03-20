import myPhoto from '../images/picture.png'
import gitHub from '../images/icons8-github 1.png'
import gMail from '../images/icons8-gmail (1) 1.png'
import linkedIn from '../images/Vector.png'
import whatsapp from '../images/Vector-1.png'
import React, { useState, useEffect } from "react";
import cv from '../Data/CV MAPHUTHA AC.pdf'
const Hero = () => {

    const binaryText = "110101010101110111101010"; 
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        const timer = setTimeout(() => {
          if (index < binaryText.length) {
            setDisplayText((prev) => prev + binaryText.charAt(index)); 
            setIndex((prev) => prev + 1); 
          } else {

            setDisplayText("");
            setIndex(0);
          }
        }, 70);
    
        return () => clearTimeout(timer); 
      }, [index, binaryText]);
    
    return ( 
        <div id="hero-section">
            <section className="hero-container">
                <div className="introduction">
                    <h1>Hi,</h1>
                    <h1>I'm Aggrey</h1>
                    <h1>Maphutha</h1>
                    <h3>UI/UX DESIGNER AND FRONT-END DEVELOPER</h3>
                    <div className="download">
                            <a  href={cv} download><button>Download CV</button></a>
                    </div>
                    <div className="social-icons">
                       <a href="https://github.com/maphuthaaggrey-prog" target="_blank"><img src={gitHub} className='icon'/></a>
                       <a href="https://www.linkedin.com/in/maphutha-chikane/" target="_blank"><img src={linkedIn} className='icon'/></a>
                       <a href="mailto:maphuthaaggrey83@gmail.com"><img src={gMail} className='icon'/></a>
                       <a href="https://wa.link/hxnh0o" target="_blank"><img src={whatsapp} className='icon'/></a>
                    </div>
                    <div className="typing-container">
                        <span>{displayText}</span>
                        <span className="cursor">|</span>
                    </div>
                </div>
                <div className="image-container">
                    <img src={myPhoto} className="myphoto" />
                    <div className="circle"></div>
                </div>
            </section>
        </div>

     );
}
 
export default Hero;