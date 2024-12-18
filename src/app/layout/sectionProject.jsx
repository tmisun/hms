import React from "react";
import styles from "../styles/css/section_project.scss"
import Card from "../component/card";

const SectionProject = () => {
  const projectList = [
    {
      index: 1,
      title: "Naver Vibe",
      image: "/image/linemusic4.jpg",
      
      // video: "/test.mp4",
      description: "MAU 100만 음원서비스의 프론트엔드 개발",
      url: "https://vibe.naver.com/",
      tagList: ["Vue.js","Node.js","Webpack"],
      className: "card_vibe",
    }, {
      index: 2,
      title: "Line Music",
      // image: "https://vos.line-scdn.net/landpress-content-v2-3nxhz7t0ul0e2qovs5d1gli4/1691135191015.webp",
      // image: "/testline2.jpg",
      image: "/image/linemusic.jpg",
      // image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/25eed6105007395.5f707af8d97bb.jpg",
      // video: "/vibe02.mov",
      description: "500만 이용자 보유 일본 음원서비스의 프론트엔드 개발",
      url: "https://music.line.me/webapp/",
      tagList: ["Vue.js","Node.js","Webpack"],
      className: "card_line",
    }, {
      index: 3,
      title: "Polycom RCM",
      image: "/image/polycom3.avif",
      // video: "/vibe.mp4",
      description: "회의 관리 서비스의 프론트엔드와 백엔드 개발",
      url: "",
      tagList: ["AngularJS","jQuery","Bootstrap","Java"],
      className: "card_poly",
    }, {
      index: 4,
      title: "NAVER",
      image: "/image/naver2.png",
      // video: "/vibe01.mov",
      description: "네이버 서비스의 UI개발",
      url: "https://www.naver.com/",
      tagList: ["Vue.js","Node.js","Webpack"],
      className: "card_naver",
    },
    
  ];

  return (
    <div id="work" className="section section_project">
      {/* <div className="title_work grid_column">
        <h3 className="title">WORK</h3>
      </div> */}
      {/* <h2 className={styles.title}>Projects</h2> */}
      {projectList.map((project, index) => <Card key={index} card={project}></Card>)}
      <div className="project_fix"></div>
    </div>
  );
};

export default SectionProject;