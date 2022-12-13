import "./Nav.scss";

const Tabs = ({ scroll }) => {
  return (
    <div className="tabs">
      <p className="tab" onClick={() => scroll(1)}>
        ABOUT
      </p>
      <p className="tab" onClick={() => scroll(2)}>
        SKILLS
      </p>
      <p className="tab" onClick={() => scroll(3)}>
        PROJECT
      </p>
      <p className="tab" onClick={scroll}>
        CONTACT
      </p>
    </div>
  );
};

const Nav = ({ scroll }) => {
  return (
    <div className="nav-container">
      <h4 onClick={() => scroll(0)}>Hyeon</h4>
      <Tabs scroll={scroll} />
    </div>
  );
};

export default Nav;
