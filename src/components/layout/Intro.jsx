import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      
      <div className="intro">
        <h2>안녕하세요 Front-end Developer 이승현입니다</h2>
        <h3>제 포트폴리오 페이지에 오신 것을 환영합니다 😉</h3>
      </div>
      
      <div className="selfie">
        <img src={process.env.PUBLIC_URL + "/assets/images/selfie.png"} />
      </div>
      

      <div className="bubble-1" />
      <div className="bubble-2" />
    </div>
  );
};

export default Intro;
