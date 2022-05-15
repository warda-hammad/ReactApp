import React from "react";
import {
  HomePage,
  H2Title,
  H4Title,
  Paragraph,
  SpanText,
  HomeButton,
} from "./style.js";
function Home() {
  return (
    <HomePage>
      <div className="title">
        <H2Title>Warda Hammad</H2Title>
        <H4Title>Creative Director</H4Title>
        <Paragraph>
          Iam a professional<SpanText> UX Designer</SpanText> and Front-End
          Developer creating modern and resposive designs to Web and Mobile. Let
          us work together. Thank you.
        </Paragraph>
        <HomeButton>Let's Begin</HomeButton>
      </div>
    </HomePage>
  );
}

export default Home;
