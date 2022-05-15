import styled from "styled-components";
export const HomePage = styled.div`
  background: url("./../../images/Home/home-bg.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const H2Title = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const H4Title = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  width: 60%;
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin: 0 auto 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const SpanText = styled.span`
  color: #111;
`;
export const HomeButton = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #fff;
    color: #eb5424;
  }
`;
