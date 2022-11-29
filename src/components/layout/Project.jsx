import "./Project.scss";

const Project = () => {
  const projects = [
    {
      name: "pocket",
      title: "Pocket:folio",
      subtitle: "3D 포트폴리오 전시장",
      date: "2022.10.11 ~ 2022.11.21",
      member: 6,
      gifcount: 7,
      content: "",
    },
    {
      name: "chuanione",
      title: "ChuAniOne",
      subtitle: "빅데이터 기반 애니메이션 추천 서비스",
      date: "2022.08.22 ~ 2022.10.07",
      member: 6,
      gifcount: 8,
    },
    {
      name: "honjaya",
      title: "혼자야?",
      subtitle: "비대면 아바타 미팅 서비스",
      date: "2022.07.11 ~ 2022.08.19",
      member: 5,
      gifcount: 11,
      content: `<span>혼자야?</span>는 랜덤 미팅 서비스와 게이미피케이션을
                접목시켜 사용자들의 접근성을 높이고, 랜덤 대화 주체 추천, 유저
                상호 평가 등의 유저 친화적 컨텐츠를 제공하는 스낵 서비스 입니다.`,
    },
  ];

  return (
    <div className="project-container">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div className="project-item">
          <h1>{project.title}</h1>
          {project.subtitle && <h2>{project.subtitle}</h2>}
          <p>
            {project.date} {`( ${project.member}인 프로젝트 )`}
          </p>
          <div className="project">
            <div className="carousel-container">
              <div className="carousel">
                {(() => {
                  let arr = [];
                  for (let i = 0; i <= project.gifcount; i++) {
                    arr.push(
                      <img
                        className="project-png"
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/images/${project.name}/${i}.gif`
                        }
                        alt="gif"
                      />
                    );
                  }
                  return arr;
                })()}
              </div>
            </div>

            <div className="project-description">
              <div
                className="project-content"
                dangerouslySetInnerHTML={{ __html: project.content }}
              >
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
