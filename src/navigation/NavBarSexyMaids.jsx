import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

import logoImg from "../assets/logo-1024.png";

import styled from "styled-components";

const NavBarSMWrapper = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }

  #navbarBrandImg {
    img {
      height: 10vh;
    }
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <NavBarSMWrapper>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">
            <div id="navbarBrandImg">
              <img src={logoImg} alt="SexyMaids Logo" />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#news">Services</a>
                </li>
                <li>
                  <a href="#contact">Terms</a>
                </li>
                <li>
                  <a href="#about">Employment</a>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarSMWrapper>
    );
  }
}
