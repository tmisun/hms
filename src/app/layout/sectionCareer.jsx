import React from "react";
import styles from "../styles/css/section_career.scss"

const SectionCareer = () => {
  const careerList = [
    {
      index: 1,
      title: "NAVER CHINA",

      job: "프론트엔드 개발자",
      time: "2021.01-2023.06",
      location: "북경",
      text: "Naver Vibe, Line Music 등 음원서비스의 프론트엔드 개발",
      image: "/sun/logo_naver.png",
      url: "",
    },{
      index: 2,
      title: "유커넝아카데미",

      job: "UI 디자이너",
      time: "2016.11-2018.12 ",
      location: "북경",
      text: "IT 아카데미의 홈페이지, 메모 서비스의 디자인",
      image: "/sun/logo_you.png",
      url: "",
    },{
      index: 3,
      title: "POLYCOM CHINA",
      job: "개발자",
      time: "2013.07-2016.09",
      location: "북경",
      text: "회의 관리 서비스의 프론트엔드와 백엔드 개발, 기기 모니터링 서비스의 디자인 지원",
      image: "/sun/logo_polycom.png",
      url: "",
    },{
      index: 1,
      title: "NHN CHINA",
      job: "UI개발자",
      time: "2011.01-2013.05",
      location: "북경",
      text: "네이버 다양한 서비스의 웹퍼블리싱, 웹접근성 개선",
      image: "/sun/logo_nhn.png",
      url: "",
    },
    
  ];
  
  return (
    <div id="experience" className="section section_career">
      <div className="grid_column">
        <h3 className="inner_title">Experience</h3>
      </div>
      <div className="inner_career">
        
        {careerList.map((career, index) => (

        <div className="item_career grid_column">
          
          <div className="time_area">   
            <div>{career.time}</div>
          </div>
          <div className="logo_area">
              <img
                className=""
                src={career.image}
                alt="github"
                width={64}
              />
            </div>
          <div className="info_area">
            <h3 className="title">{career.title}</h3>
            {/* <div>{career.time}</div> */}
            <div className="job">{career.job}</div>
            <div className="text">{career.text}</div>
            {/* <a className="">업무내용 보기</a> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SectionCareer;
