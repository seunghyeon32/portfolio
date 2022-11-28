import "./index.scss";
import Intro from "../components/layout/Intro";
import Nav from "../components/layout/Nav";
import About from "../components/layout/About";
import Skills from "../components/layout/Skills";

// Index Page
const Index = () => {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <About />
      <Skills />
    </div>
  );
};

export default Index;
