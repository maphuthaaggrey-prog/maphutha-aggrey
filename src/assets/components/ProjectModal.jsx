import { useEffect } from 'react';

const ProjectModal = ({ isOpen, project, onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div 
            className="modal-backdrop" 
            onClick={handleBackdropClick}
        >
            <div className="modal-content">
                <button 
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <div className="modal-image-container">
                    <img
                        src={project.image}
                        alt={project.project}
                        className="modal-image"
                    />
                </div>
                
                <div className="modal-details">
                    <h2 className="modal-title">{project.project}</h2>
                    <p className="modal-type">{project.type}</p>

                    <p className="modal-description">{project.description}</p>

                    <p className="modal-tools">
                    {Array.isArray(project.tools) ? 
                            project.tools.map((tool, index) => (
                                <span key={index} className="tool-badge">{tool}</span>
                            ))
                            : project.tools
                        }
                    </p>

                    
                    {project.link && (
                        <div className="modal-actions">

                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="modal-link-btn"
                            >
                                Live site
                            </a>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;