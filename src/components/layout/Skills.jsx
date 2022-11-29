import "./Skills.scss";

const Skills = () => {
  const images = {
    front: [
      "html",
      "css",
      "js",
      "react",
      "redux",
      "typescript",
      "three",
      "stompjs",
      "vue",
      "webrtc",
      "sass",
    ],
    back: ["python", "django"],
    version: ["git", "github", "gitlab"],
    collaboration: ['jira', 'notion', 'figma'],
  };
  return (
    <div className="skill-container">
      <h2>Skills</h2>

      <div className="skills">
        <h3>Frontend</h3>
        <div className="skill-box">
          {images.front.map((item) => (
            <div className="skill">
              <img
                src={process.env.PUBLIC_URL + `/assets/images/${item}.png`}
                alt={item}
              />
            </div>
          ))}
        </div>

        <h3>Backend</h3>
        <div className="skill-box">
          {images.back.map((item) => (
            <div className="skill">
              <img
                src={process.env.PUBLIC_URL + `/assets/images/${item}.png`}
                alt={item}
              />
            </div>
          ))}
        </div>

        <h3>Version Control</h3>
        <div className="skill-box">
          {images.version.map((item) => (
            <div className="skill">
              <img
                src={process.env.PUBLIC_URL + `/assets/images/${item}.png`}
                alt={item}
              />
            </div>
          ))}
        </div>

        <h3>Collaboration</h3>
        <div className="skill-box">
          {images.collaboration.map((item) => (
            <div className="skill">
              <img
                src={process.env.PUBLIC_URL + `/assets/images/${item}.png`}
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
