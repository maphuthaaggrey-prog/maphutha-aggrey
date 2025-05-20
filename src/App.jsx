import { useEffect, useState } from 'react';
import Hero from './assets/components/Hero';
import Header from './assets/components/Header';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Footer from './assets/components/Footer';
import Certs from './assets/components/Certs';
import { Helmet } from "react-helmet";

function App() {
  const [pageTitle, setPageTitle] = useState("Maphutha Aggrey");

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
      case "Hero":
        setPageTitle("Maphutha Aggrey");
        break; 
      case "About":
        setPageTitle("About");
        break;
      case "Projects":
        setPageTitle("Projects");
        break;
      case "Contact":
        setPageTitle("Contact");
        break;
      default:
        setPageTitle("Aggrey");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      
      <Header />
      <section id="biography">
        <Hero />
      </section>
      <section id="featuredprojects">
        <Projects />
      </section>
      <section id="technicalskills">
      <Skills />
      <Certs />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
