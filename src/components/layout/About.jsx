import './About.scss'

const About = () => {
  return (
    <div className="about-container">
      <h2>ABOUT ME</h2>
      <div className="title">
        <h3 className="sky">하늘색</h3>
        <h3>개발자, 이승현</h3>
      </div>

      <div className="content">
        <div className="content-text">
          <h1>1</h1>
          <h2>긍정</h2>
        </div>
        <pre className="description">
          긍정적인 에너지로 주위를 행복하게 만드는 에너지를 가진 사람입니다.
        </pre>
      </div>

      <div className="content">
        <div className="content-text">
          <h1>2</h1>
          <h2>무한</h2>
        </div>
        <pre className="description">
          무한한 가능성을 가진 사람입니다.
        </pre>
      </div>

      <div className="content">
        <div className="content-text">
          <h1>3</h1>
          <h2>신뢰</h2>
        </div>
        <pre className="description">
          신뢰를 바탕으로 본인의 업무에 충실한 사람입니다.
        </pre>
      </div>
    </div>
  );
};

export default About;
