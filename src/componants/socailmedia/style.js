import styled from "styled-components";
export const SocialMedia = styled.div`
  height: auto;
  overflow: hidden;
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${(props) => (props.item === 1 ? "#3b5998" : "")};
  background: ${(props) => (props.item === 2 ? "#498cbf" : "")};
  background: ${(props) => (props.item === 3 ? "#cc2127" : "")};
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;

export const SocialP = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const SocialPSpan = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const InfoSpan = styled.span`
  font-weight: normal;
`;
