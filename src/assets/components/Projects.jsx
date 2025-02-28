import { projects } from '../Data/Projects'
import { useState, useEffect } from 'react'
const Projects = () => {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        const project = [...projects];
        setProjects(project);
    }, []);

    return ( 
        <>
        <section className="hero-about">
            <div className="about-hero">
                <p className="page-heading ">Projects</p>
                <div className="project-info">
                        {Projects.map((project) => (
                        <a href={project.link} target="_blank">  
                            <div className="project">
                                    <img
                                            src={project.image}
                                            loading="lazy"
                                            alt={project.project}
                                            className="project-image"
                                        />
                                        <p className="project-name">{project.project}</p>
                                        <p className="project-type">{project.type}</p>
                                        <p className="project-desc">{project.description}</p>
                                
                            </div>
                        </a>
               
                         ))}
                 </div>
            </div> 
        </section>   

        
        
        </>
     );
}
 
export default Projects;