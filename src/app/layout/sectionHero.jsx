"use client";

import "../styles/css/section_hero.scss";
import { useEffect, useRef } from 'react';

const SectionHero = () => {


  
  return (
    <div id="home" className="section section_hero">
      {/* <div class="hero_test">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 900 950"><path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 68"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M105 10C28-9-29 40 34 56c62 16 91-29 66-29"></path><path d="M109 16C82-20-56 21 30 55s105-27 75-45"></path></g></svg>
      </div> */}
      <div className="inner">
        <div className="code_container">
          <div className="num_area"></div>
          
          <div className="code_area">

            {/* <pre>{`<html>\n<body>\n`}</pre>
            <pre>{`function main {}`}</pre> */}

            <div className="code">
              {/* <h1></h1> */}
              <p className="text_sm">&lt;Hi, I'm Sun /&gt;
                {/* <i class="icon_lft"></i> <i class="icon_rgt"></i> */}
              </p>
              <p className="text_xl">Frontend</p>
              {/* <p><span className="icon_bracket">{'{'} </span> 황미선 <span className="icon_bracket">{'}'} </span> 입니다</p> */}
              <p className="text_xl">Developer_ </p>

              <span className="icon_bling"></span>
              
            </div>
            {/* <pre>{`</body>\n</html>`}</pre> */}
            
          </div>
          
        </div>
        <a class="icon_scroll" href="/#project">
          <span class="blind" >Scroll to projects</span></a>
        {/* <span className="father"><span className="icon_cursor"></span></span> */}

        {/* code concept */}
        {/* <div className="hero_area">
          <div className="text" ref={container}>
          </div>

        </div> */}

        {/* original */}
          {/* <div className="hero_wrapper">
            <p className="name_area">MEISHAN HUANG</p>
            <p className="title_area">
              <span className="desc">Front<em className="desc_icon"></em>end  <span className="desc_line"></span></span> 
              <span className="desc2">Developer</span> 
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default SectionHero;
