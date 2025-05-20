import { certificates } from '../Data/Certificates'
import { useState, useEffect } from 'react'
const Projects = () => {
    const [Certificates, setProjects] = useState([]);

    useEffect(() => {
        const certificate = [...certificates];
        setProjects(certificate);
    }, []);

    return ( 
        <>
        <section className="hero-about">
            <div className="about-hero">
            <h5>CERTIFICATES</h5>
            <p className="page-heading" style={{ fontSize: '25px' }}>Licenses & certifications</p>
                <div className="certificate-info">
                        {Certificates.map((certificate) => (
                        <a href={certificate.link} target="_blank">  
                            <div className="certificate">
                                    <img
                                            src={certificate.image}
                                            loading="lazy"
                                            alt={certificate.project}
                                            className="certificate-image"
                                        />
                            </div>
                        </a>
               
                         ))}
                         <div className="powered">
                         </div>
                 </div>
                 <p className='projects-count'>+10 Certificates</p>
            </div> 
        </section>   

        
        
        </>
     );
}
 
export default Projects;