import "./Index.scss";
import { useRef } from "react";

// components
import Intro from "../components/Intro";
import Nav from "../components/Nav";
// import About from "../components/About";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";

// Index Page
const Index = () => {
  const skillRef = useRef();
  const projectRef = useRef();

  const scroll = (num) => {
    if (num === 0) {
      // 맨 위로
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (num === 2) {
      // 스킬
      window.scrollTo({
        top: skillRef?.current?.offsetTop,
        behavior: "smooth",
      });
    } else if (num === 3) {
      // 프로젝트
      window.scrollTo({
        top: projectRef?.current?.offsetTop,
        behavior: "smooth",
      });
    } else {
      // 맨 아래로
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <Nav scroll={scroll} />
      <Intro />
      {/* <About /> */}
      <Skills skillRef={skillRef} />
      <ProjectList projectRef={projectRef} />
      <Contact />
    </div>
  );
};

export default Index;
