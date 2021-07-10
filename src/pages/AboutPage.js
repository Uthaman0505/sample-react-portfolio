import React from "react";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="aboutpage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skills-container">
        <SkillsSection skill={"Javascript"} progress={"90%"} width={"90"} />
        <SkillsSection skill={"Typescript"} progress={"70%"} width={"70"} />
        <SkillsSection skill={"Java"} progress={"60%"} width={"60"} />
        <SkillsSection skill={"HTML"} progress={"50%"} width={"50"} />
        <SkillsSection skill={"CSS"} progress={"30%"} width={"30"} />
        <SkillsSection skill={"Python"} progress={"10%"} width={"10"} />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web Design"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores sint debitis sequi in necessitatibus accusamus."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores sint debitis sequi in necessitatibus accusamus."
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores sint debitis sequi in necessitatibus accusamus."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
