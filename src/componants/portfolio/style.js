import styled from "styled-components";
export const Portfoliosection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 35px;
`;
export const SpanTitle = styled.span`
  font-weight: normal;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0;
`;
export const ListItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #eb5424;
    color: #fff;
  }

  @media (max-width: 575px) {
    display: block;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
`;
export const ActiveListItem = styled(ListItem)`
  background: #eb5424;
  color: #fff;
`;

export const BoxImage = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  &:hover > p {
    opacity: 1;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Overlay = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235, 84, 36, 0.5);
  font-size: 15px;
  opacity: 0;
`;

export const SeeImage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #eb5424;
    color: #fff;
  }
`;
