import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <div className="selfie">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/me02.png"}
            alt="selfie"
          />
        </div>
        <h2>안녕하세요</h2>
        <h2>Front-end Developer 이승현입니다</h2>
      </div>

      <div className="bubble-1" />
      <div className="bubble-2" />
    </div>
  );
};

export default Intro;
