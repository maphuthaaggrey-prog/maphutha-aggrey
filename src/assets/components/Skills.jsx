import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {

    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((element) => {
      const targetWidth = element.getAttribute('data-width');
      element.style.width = '0';
      setTimeout(() => {
        element.style.width = targetWidth; 
      }, 200);
    });
  }, []);

  return (
    <section className="about-hero">
      <h5>SKILLS</h5>
      <p className="page-heading" style={{ fontSize: '25px' }}>Technical Skills</p>
      <div className="divider-line"></div>
      <div className="progress-container">
        <div className="designer-skills">
          <div className="skill">
              <div className="skills-text">
                <h3>Figma</h3>
                <h3>90%</h3>
              </div>
            <div className="progress-bar">
              <div className="progress" data-width="90%"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skills-text">
              <h3>Adobe XD</h3>
              <h3>85%</h3>
            </div>
            <div className="progress-bar">
              <div className="progress" data-width="85%"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skills-text">
                <h3>Adobe Photoshop</h3>
                <h3>35%</h3>
            </div>
            <div className="progress-bar">
              <div className="progress" data-width="35%"></div>
            </div>
          </div>

          <div className="skill">
          <div className="skills-text">
              <h3>Git & Github</h3>
              <h3>75%</h3>
          </div>
            <div className="progress-bar">
              <div className="progress" data-width="65%"></div>
            </div>
          </div>
        </div>

        <div className="developer-skills">
          <div className="skill">
              <div className="skills-text">
                <h3>HTML5 & CSS</h3>
                <h3>95%</h3>
              </div>
            <div className="progress-bar">
              <div className="progress" data-width="95%"></div>
            </div>
          </div>

          <div className="skill">
          <div className="skills-text">

            <h3>JavaScript (ES6+)</h3>
            <h3>68%</h3>
            </div>
            <div className="progress-bar">
              <div className="progress" data-width="68%"></div>
            </div>
          </div>
          
          <div className="skill">
          <div className="skills-text">
            <h3>React JS</h3>
            <h3>60%</h3>
          </div>
            <div className="progress-bar">
              <div className="progress" data-width="56%"></div>
            </div>
          </div>

          <div className="skill">
          <div className="skills-text">
            <h3>PHP & MySQL</h3>
            <h3>40%</h3>
          </div>
            <div className="progress-bar">
              <div className="progress" data-width="40%"></div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;
