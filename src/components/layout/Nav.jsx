import './Nav.scss'

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tab">ABOUT</div>
      <div className="tab">SKILLS</div>
      <div className="tab">PROJECT</div>
      <div className="tab">CONTACT</div>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="nav-container">
      <h3>Hyeon</h3>
      <Tabs/>
    </div>
  )
};

export default Nav;
