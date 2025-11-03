import { useEffect, useState } from 'react';
import Hero from './assets/components/Hero';
import Header from './assets/components/Header';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Footer from './assets/components/Footer';
import Certs from './assets/components/Certs';
import Chatbot from "./assets/components/Chatbot";
import ProjectModal from './assets/components/ProjectModal';
import { Helmet } from "react-helmet";

function App() {
  const [pageTitle, setPageTitle] = useState("Maphutha Aggrey");
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal from any component
  const openModal = (project) => {
    setModalData(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "Maphutha Aggrey";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    switch (currentSection) {
      case "biography":
        setPageTitle("Maphutha Aggrey");
        break;
      case "featuredprojects":
        setPageTitle("Projects");
        break;
      case "technicalskills":
        setPageTitle("Skills");
        break;
      case "contact":
        setPageTitle("Contact");
        break;
      default:
        setPageTitle("Aggrey");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.05 } 
    );

    const hiddenSections = document.querySelectorAll('section');
    hiddenSections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      
      <Header />

      <section id="biography" className="hidden">
        <Hero />
      </section>

      <section id="featuredprojects" className="hidden">
        <Projects openModal={openModal} /> {/* Pass openModal as prop */}
      </section>

      <section id="technicalskills" className="hidden">
        <Skills />
        <Certs />
      </section>

      <section id="contact" className="hidden">
        <Footer />
      </section>

      <Chatbot />

      <ProjectModal 
            isOpen={isModalOpen}
            project={modalData}
            onClose={closeModal}
        />
    </>
  );
}

export default App;