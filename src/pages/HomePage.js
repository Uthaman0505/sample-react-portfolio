import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Uthaman</span>
        </h1>
        <p className="home-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio
          tenetur, autem, eius repellendus sunt voluptate ex sit quam assumenda
          deserunt est vitae quidem iste, inventore pariatur corporis qui
          cumque.
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
