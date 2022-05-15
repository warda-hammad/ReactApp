import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  ParentNav,
  Logo,
  LogoText,
  Links,
  LinksLi,
  Anchor,
  Label,
  Input,
} from "./style.js";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <ParentNav>
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>
          <Links>
            <LinksLi>
              <Link
                to="/"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Home
              </Link>
            </LinksLi>
            <LinksLi>
              <Anchor href="#">Work</Anchor>
            </LinksLi>
            <LinksLi>
              <Anchor href="#">Portfolio</Anchor>
            </LinksLi>
            <LinksLi>
              <Anchor href="#">Profile</Anchor>
            </LinksLi>
            <LinksLi>
              <Anchor href="#">About</Anchor>
            </LinksLi>
            <LinksLi>
              <Link
                to="/contact"
                style={{
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Link>
            </LinksLi>
          </Links>
        </ParentNav>
        <Input type="checkbox" id="nav" />
        <Label for="nav"></Label>
      </div>
    </Nav>
  );
};

export default Navbar;
