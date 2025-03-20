import Hero from './assets/components/Hero'
import Header from './assets/components/Header'
import About from './assets/components/About'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Footer from './assets/components/Footer'
function App() {



  return (
    <>
          <Header />
          <section id="Hero">
              <Hero />
          </section>
          <section id="About">
              <About />
          </section>
              <Skills />
          <section id="Projects">
              <Projects />
          </section>
          <section id="Contact">
              <Footer />
          </section>

          
         
    </>
  )
}
export default App
