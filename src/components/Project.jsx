import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Project.scss";

const Project = ({ project }) => {
  const carouselRef = useRef();
  const [currentCnt, setCurrentCnt] = useState(0);

  const changeGif = (cnt) => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    item.className = "carousel-btn";
    setCurrentCnt(cnt);
  };

  useEffect(() => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    item.className = "carousel-btn active";

    carouselRef.current.style.transition = "all 0.6s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${
      currentCnt * carouselRef.current?.clientWidth
    }px)`;
  }, [currentCnt, project, carouselRef]);

  return (
    <div className="project-item">
      <h2>{project.title}</h2>
      {project.subtitle && <h3>{project.subtitle}</h3>}
      <p>
        {project.date} {`( ${project.member}인 프로젝트 )`}
      </p>
      <div className="project">
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {(() => {
              let arr = [];
              for (let i = 0; i <= project.gifcount; i++) {
                arr.push(
                  <img
                    className="project-png"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/${project.name}/${i}.gif`
                    }
                    alt="gif"
                  />
                );
              }
              return arr;
            })()}
          </div>

          <div className="carousel-buttons">
            {(() => {
              let arr = [];
              for (let i = 0; i <= project.gifcount; i++) {
                arr.push(
                  <div
                    className="carousel-btn"
                    id={`btn${project.name}${i}`}
                    onClick={() => changeGif(i)}
                  />
                );
              }
              return arr;
            })()}
          </div>
        </div>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
    </div>
  );
};

export default Project;
