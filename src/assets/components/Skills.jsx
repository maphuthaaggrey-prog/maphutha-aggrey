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
            <h3>Adobe Photoshop</h3>
            <div className="progress-bar">
              <div className="progress" data-width="35%"></div>
            </div>
          </div>
          <div className="skill">
            <h3>Illustrator</h3>
            <div className="progress-bar">
              <div className="progress" data-width="25%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>Git & Github</h3>
            <div className="progress-bar">
              <div className="progress" data-width="55%"></div>
            </div>
          </div>
        </div>

        <div className="developer-skills">
          <div className="skill">
            <h3>HTML5 & CSS</h3>
            <div className="progress-bar">
              <div className="progress" data-width="95%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>JavaScript (ES6+)</h3>
            <div className="progress-bar">
              <div className="progress" data-width="68%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>PHP & MySQL</h3>
            <div className="progress-bar">
              <div className="progress" data-width="60%"></div>
            </div>
          </div>

          <div className="skill">
            <h3>React & Next js</h3>
            <div className="progress-bar">
              <div className="progress" data-width="50%"></div>
            </div>
          </div>
          <div className="skill">
            <h3>SASS & SCSS</h3>
            <div className="progress-bar">
              <div className="progress" data-width="75%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
