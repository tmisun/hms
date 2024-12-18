import "../styles/css/header.scss";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="blind">YEEE</span>
        <Image
            className=""
            src="image/test.svg"
            alt="Vercel logomark"
            width={48}
            height={48}
          />
      </h1>
      <nav className="nav">
        <ul className="nav_list">
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
        </ul>
 
        {/* <ul className="nav_btm">
          <li>
            <a>
              <Image
                className=""
                src="/github.svg"
                alt="github"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a>
              <Image
                className=""
                src="/email.svg"
                alt="email"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul> */}
      </nav>
      
    </header>
  );
};

export default Header;
