import React from "react";
import styles from "../styles/css/section_about.scss"

const SectionAbout = () => {
  return (
    <div id="about" className="section section_about">
      <div className="inner_about grid_column">
        <h3 className="inner_title">About me</h3>
        {/* <div className="item_photo">
          <img
            className=""
            src="/pic.jpg"
            width="100%"
            alt="github"
          />
        </div> */}
        <div className="item_about">
          
          <p>최선을 다하는 멀티 개발자 황미선입니다</p>
          <p>프론트엔드, 웹 퍼블리셔, 디자이너 등 다양한 경험을 가졌습니다. <br/>
            필요한 포지션이라면 어디든 최선을 다하고<br/>
문제를 해결하고 프로젝트의 성장에 기여하는 것에 성취감을 느낍니다.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SectionAbout;
