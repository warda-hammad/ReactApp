import styled from "styled-components";
export const AboutSection = styled.div`
  height: 500px;
  background: url("./../../images/creative/about-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 991px) {
    height: auto;
  }
`;

export const AboutInfo = styled.div`
  padding-top: 80px;
  width: 50%;
  float: right;
  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    float: none;
  }
`;

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  margin: 0;
`;

export const InfoSpan = styled.span`
  font-weight: normal;
`;

export const Dir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const InfoDes = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;
