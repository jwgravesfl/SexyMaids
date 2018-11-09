import React, { Component } from "react";

import styled from "styled-components";

import bgImg from "../assets/landingPageDesktop.jpg";
import bgImgMobile from "../assets/landingPageMobile.jpg";

const HomeWrapper = styled.div`
  background-image: url(${bgImg});
  background-color: yellow;
  height: 87vh;

  @media (max-width: 600px) {
    background-image: url(${bgImgMobile});
    height: 87vh;
  }

  #sMTagLine {
    @media (max-width: 600px) {
      position: absolute;
      top: 10vh;
      width: 100vw;
      text-align: center;
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div id="sMTagLine">Have a Sexy Lady do your dirty jobs</div>
      </HomeWrapper>
    );
  }
}
