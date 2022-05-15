import styled from "styled-components";

export const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #111;
  padding: 20px 0;
`;
export const ParentNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 50%;
`;
export const LogoText = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 25px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const LinksLi = styled.li`
  padding: 10px 15px;
  @media (max-width: 1023px) {
    padding: 10px 10px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  color: #222;
  text-decoration: none;
  font-weight: bold;
`;

export const Input = styled.input`
  position: absolute;
  top: 13px;
  right: 25px;
  display: none;
  &:checked ~ ul {
    display: block;
  }
  &:checked ~ label {
    background: url("./../../images/Navbar/close.png") no-repeat;
    background-size: cover;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 13px;
  right: 25px;
  display: block;
  width: 15px;
  height: 15px;
  background: url("./../../images/Navbar/open.png") no-repeat;
  background-size: cover;
  padding: 20px;
  cursor: pointer;
  @media (min-width: 767px) {
    display: none;
  }
`;
