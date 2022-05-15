import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Paragraph } from "../home/style.js";
import {
  ProfileSection,
  Title,
  SpanTitle,
  InfoList,
  Info,
  Items,
  SpanItem,
  Link,
  Skills,
  SkillTitle,
  Skill,
  Paragraph,
  PerLine,
  Pross,
  PerTitle,
} from "./style.js";
function Profile() {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setskills(res.data.profile));
  }, []);
  const skill = skills.map((s) => {
    return (
      <Skill key={s.id}>
        <SkillTitle>{s.name}</SkillTitle>
        <PerTitle>{s.per}</PerTitle>
        <PerLine>
          <Pross skill={s.id}></Pross>
        </PerLine>
      </Skill>
    );
  });
  return (
    <ProfileSection>
      <div className="container">
        <Info>
          <Title>
            <SpanTitle>My </SpanTitle>Profile
          </Title>
          <InfoList>
            <Items>
              <SpanItem>Name</SpanItem>
              Warda Hammad
            </Items>
            <Items>
              <SpanItem>Birthday</SpanItem>
              4/4/2000
            </Items>
            <Items>
              <SpanItem>Address</SpanItem>
              Egypt
            </Items>
            <Items>
              <SpanItem>Phone</SpanItem>
              4444 5555 6666
            </Items>
            <Items>
              <SpanItem>Email</SpanItem>
              email@email.com
            </Items>
            <Items>
              <SpanItem>Website</SpanItem>
              <Link href="www.google.com">www.google.com</Link>
            </Items>
          </InfoList>
        </Info>

        <Skills>
          <Title>
            Some <SpanTitle>skills</SpanTitle>
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </Paragraph>
          {skill}
        </Skills>
      </div>
    </ProfileSection>
  );
}

export default Profile;
