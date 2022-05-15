import React from "react";
import {
  AboutSection,
  AboutInfo,
  InfoTitle,
  InfoSpan,
  Dir,
  InfoDes,
} from "./style.js";
function About() {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <InfoTitle>
            <InfoSpan>This is</InfoSpan> Me
          </InfoTitle>
          <Dir>Creative Director</Dir>
          <InfoDes>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
            dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDes>
          <InfoDes>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDes>
        </AboutInfo>
      </div>
    </AboutSection>
  );
}

export default About;
