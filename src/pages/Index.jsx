import "./index.scss";
import Intro from "../components/layout/Intro";
import Nav from "../components/layout/Nav";
import About from "../components/layout/About";

// Index Page
const Index = () => {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <About />
    </div>
  );
};

export default Index;
