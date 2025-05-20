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
            <h3>Figma</h3>
            <div className="progress-bar">
              <div className="progress" data-width="88%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>Adobe XD</h3>
            <div className="progress-bar">
              <div className="progress" data-width="85%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>VB.Net</h3>
            <div className="progress-bar">
              <div className="progress" data-width="75%"></div>
            </div>
          </div>
          <div className="skill">
            <h3>Git</h3>
            <div className="progress-bar">
              <div className="progress" data-width="65%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>Github </h3>
            <div className="progress-bar">
              <div className="progress" data-width="55%"></div>
            </div>
          </div>
        </div>

        <div className="developer-skills">
          <div className="skill">
            <h3>HTML CSS</h3>
            <div className="progress-bar">
              <div className="progress" data-width="95%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>Javascript</h3>
            <div className="progress-bar">
              <div className="progress" data-width="68%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>PHP mySQL</h3>
            <div className="progress-bar">
              <div className="progress" data-width="60%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>React.js</h3>
            <div className="progress-bar">
              <div className="progress" data-width="55%"></div>
            </div>
          </div>
          <div className="skill">
            <h3>Next js</h3>
            <div className="progress-bar">
              <div className="progress" data-width="15%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
