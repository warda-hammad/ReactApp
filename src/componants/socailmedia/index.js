import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SocialMedia,
  Social,
  Icon,
  InfoSpan,
  SocialP,
  SocialPSpan,
} from "./style.js";
function Socailmedia() {
  const [social, setsocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setsocial(res.data.social);
    });
  }, []);
  const socialItem = social.map((item) => {
    return (
      <Social key={item.id} item={item.id}>
        <Icon className={item.icon}></Icon>
        <SocialP>
          <SocialPSpan>{item.title}</SocialPSpan>
          <InfoSpan>{item.body}</InfoSpan>
        </SocialP>
      </Social>
    );
  });
  return <SocialMedia>{socialItem}</SocialMedia>;
}

export default Socailmedia;
