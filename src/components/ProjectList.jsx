import "./ProjectList.scss";
import Project from "./Project";

const ProjectList = ({ projectRef }) => {
  const projects = [
    {
      name: "pocket",
      title: "Pocket:folio",
      subtitle: "3D 포트폴리오 전시장",
      date: "2022.10.11 ~ 2022.11.21",
      member: 6,
      gifcount: 7,
      link: "https://github.com/seunghyeon32/Pocket-folio",
      content: `<span>Pocket:folio</span>는 Pocket과 Portfolio의 합성어로 자신의 포트폴리오를 <span>3D공간인 포켓에 전시</span>하고 공유하는 서비스입니다.<br/>
                포켓에서 본인의 개성을 표현하고, 다른 유저들과 소통할 수 있습니다.<br/><br/>
                
                
                <span>✨ 이런 역할을 했어요 ! </span><br/>
                - <span>소셜 로그인 </span><br/>
                &nbsp &nbsp + <span>session storage</span>에 token 저장 <br/>
                &nbsp &nbsp + 토큰이 만료된 경우, <span>refresh token</span>으로 새로운 <span>access token</span>요청 <br/>
                &nbsp &nbsp + 회원정보수정<br/>
                - <span>CSS, javascript </span>를 활용한 <span>carousel</span><br/>
                - <span>3D 오브젝트 </span>와 <span>포트폴리오</span> 연결<br/>
                - <span>포켓</span> 사이드 바<br/>
                &nbsp &nbsp + 방명록 <span>CRD</span> 및 비공개 설정<br/>
                &nbsp &nbsp + <span>URL 복사</span> <br/>
                &nbsp &nbsp + 포켓 수정 <span>UI 및 오브젝트 pagenation</span> <br/>
                &nbsp &nbsp + 파도타기를 위한 <span>API 연결</span> <br/>
                - <span>Figma</span>를 활용한 웹 디자인<br/>
                - <span>React, styled components</span>를 활용한 웹 퍼블리싱<br/>

                <br/><span>🏆 SSAFY 자율프로젝트 우수상 (1등)</span>
                `,
    },
    {
      name: "chuanione",
      title: "ChuAniOne",
      subtitle: "빅데이터 기반 애니메이션 추천 서비스",
      date: "2022.08.22 ~ 2022.10.07",
      member: 6,
      gifcount: 8,
      link: "https://github.com/seunghyeon32/ChuAniOne",
      content: `<span>츄애니원</span>은 유저들의 선호도를 기반으로 잠재요인의 값을 구하여
                각각의 유저에게 애니메이션을 맞춤형으로 제공하는 <span>애니메이션 추천 서비스</span>이다.<br/><br/>
                
                <span>✨ 이런 역할을 했어요 ! </span><br/>
                - <span>Stompjs</span>를 활용한 오픈채팅<br/>
                &nbsp &nbsp + 채팅방 <span>CRUD 및 API연결</span><br/>
                - 검색을 위한 키워드 및 카테고리 기반 <span>필터링</span><br/>
                - 애니메이션 상세정보 조회 <span>Modal</span><br/>
                &nbsp &nbsp + 좋아요, 싫어요, 찜<br/>
                &nbsp &nbsp + 리뷰 <span>CRUD</span><br/>
                &nbsp &nbsp + 비슷한 작품 <span>API 연결</span><br/>
                &nbsp &nbsp + 톡톡<span> CRD</span><br/>
                - <span>Figma</span>를 활용한 웹 디자인<br/>
                - <span>React, styled components</span>를 활용한 웹 퍼블리싱<br/>

                <br/><span>🏆 SSAFY 특화프로젝트 우수상 (2등)</span>
                `,
    },
    {
      name: "honjaya",
      title: "혼자야?",
      subtitle: "비대면 아바타 미팅 서비스",
      date: "2022.07.11 ~ 2022.08.19",
      member: 5,
      gifcount: 8,
      link: "https://github.com/seunghyeon32/Honjaya",
      content: `<span>혼자야?</span>는 랜덤 미팅 서비스와 <span>게이미피케이션</span>을
                접목시켜 사용자들의 접근성을 높이고, 랜덤 대화 주체 추천, 유저
                상호 평가 등의 <span>유저 친화적</span> 컨텐츠를 제공하는 스낵 서비스 입니다.<br/><br/>
                
                <span>✨ 이런 역할을 했어요 ! </span><br/>
                - <span>OpenVidu(webRTC)</span>를 활용한 화상채팅 <br/>
                &nbsp &nbsp + 내부 통신을 이용한 <span>투표로직 </span> <br/>
                &nbsp &nbsp + 지시자와 아바타 간의 <span>비공개 채팅</span>  <br/>
                - 회원가입 <span>유효성 검사</span><br/>
                - <span>Figma</span>를 활용한 웹 디자인<br/>
                - <span>React, styled components</span>를 활용한 웹 퍼블리싱<br/>

                <br/><span>🏆 SSAFY 공통프로젝트 우수상 (3등)</span>
                `,
    },
  ];

  return (
    <div className="project-container" ref={projectRef}>
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <Project project={project} key={idx} />
      ))}
    </div>
  );
};

export default ProjectList;
