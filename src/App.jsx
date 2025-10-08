import { useEffect, useState } from 'react';
import Hero from './assets/components/Hero';
import Header from './assets/components/Header';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Footer from './assets/components/Footer';
import Certs from './assets/components/Certs';
import Chatbot from "./assets/components/Chatbot";
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

    // 👇 Animate sections on scroll
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
        <Projects />
      </section>

      <section id="technicalskills" className="hidden">
        <Skills />
        <Certs />
      </section>

      <section id="contact" className="hidden">
        <Footer />
      </section>
      <Chatbot />
    </>
  );
}

export default App;
