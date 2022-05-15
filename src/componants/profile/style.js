import styled from "styled-components";
export const ProfileSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const SpanTitle = styled.span`
  font-weight: normal;
`;

export const Info = styled.div`
width: 50%;
float: left;
@media (max-width:768px) {
        width: 100%;
        float: none
        margin-bottom: 20px
}
`;

export const InfoList = styled.ul`
  list-style: none;
`;
export const Items = styled.li`
  margin-bottom: 8px;
`;

export const SpanItem = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;
export const Link = styled.a`
  text-decoration: none;
  font-weight: normal;
  color: #eb5424;
`;

export const Skills = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Skill = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const SkillTitle = styled.h2`
  float: left;
  margin: 0;
`;

export const PerTitle = styled.span`
  float: right;
  margin-right: 100px;
`;

export const PerLine = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const Pross = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0
width: ${(props) => (props.skill === 1 ? "100%" : "")}
width: ${(props) => (props.skill === 2 ? "90%" : "")}
width: ${(props) => (props.skill === 3 ? "80%" : "")}
`;
