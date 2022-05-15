import styled from "styled-components";
export const WorkSecsion = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;
export const WorkTitle = styled.h2`
  font-size: 60px;
  margin: 0;
`;
export const TilteSpan = styled.span`
  font-weight: normal;
`;
export const Part = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === 1 ? "0" : "5%")};
  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 47%;
  }
`;

// .first {
//     margin-left: 0
// }

export const Icon = styled.i`
  color: #888;
  margin-bottom: 20px;
`;
export const PartTile = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;

export const HrLine = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #888;
  padding: 20px;
`;

// @media (min-width: 576px)and (max-width:768px) {
//     .work .last {
//         margin-left: 0
//     }
// }
