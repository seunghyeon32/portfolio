import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h2>ABOUT ME</h2>
      <div className="title">
        <h3 className="sky">현재를 즐기며 발전해가는</h3>
        <h3>개발자, 이승현</h3>
      </div>
      <pre>
{`"현재를 즐기자" 는 제 인생의 슬로건입니다. 
현재를 즐기며 열심히 살다보면, 긍정적인 미래가 만들어진다고 생각하기 때문입니다.

개발도 인생과 같다고 생각합니다.
현재 주어진 일, 하고 싶은 일들을 열심히 하며 살다보면
어제보다 나은 오늘의 내가 되기 때문입니다.

React, Vue.js를 활용한 웹 개발을 진행하며
UI/UX의 중요성에 대해 알게되었고 그 매력에 빠져
"프론트엔드 개발자"로 성장하고자 
현재를 즐기며 발전하고 있습니다.
`}
      </pre>
    </div>
  );
};

export default About;
