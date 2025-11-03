import { projects } from '../Data/Projects'
import { useState, useEffect } from 'react'

const Projects = ({ openModal }) => {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        const project = [...projects];
        setProjects(project);
    }, []);

    const truncateDescription = (text, maxLength = 120) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return ( 
        <>
            <section className="hero-about">
                <div className="about-hero">
                    <h5>PROJECTS</h5>
                    <p className="page-heading">Featured Projects</p>
                    <div className="project-info">
                        {Projects.map((project, index) => (
                            <div 
                                key={index}
                                className="project-card" 
                                onClick={() => openModal(project)}
                            >  
                                <div className="project">
                                    <img
                                        src={project.image}
                                        loading="lazy"
                                        alt={project.project}
                                        className="project-image"
                                    />
                                    <div className="project-details">
                                        <p className="project-name">{project.project}</p>
                                        <p className="project-type">{project.type}</p>
                                    </div>
                                    <p className="project-desc">
                                        {truncateDescription(project.description)} <span>See Details</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="powered"></div>
                    </div>
                </div> 
            </section>   
        </>
    );
}
 
export default Projects;