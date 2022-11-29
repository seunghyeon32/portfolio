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
                      <div className="project-png">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/images/${project.name}/${i}.gif`
                          }
                        />
                      </div>
                    );
                  }
                  return arr;
                })()}
              </div>
              <div>ds</div>
            </div>

            <div className="project-description">여기는 설명</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
