import "./Index.scss";
import Intro from "../components/layout/Intro";
import Nav from "../components/layout/Nav";
import About from "../components/layout/About";
import Skills from "../components/layout/Skills";
import Project from "../components/layout/Project";

// Index Page
const Index = () => {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default Index;
