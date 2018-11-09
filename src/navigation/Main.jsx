import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBarSM from "./NavBarSexyMaids";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Terms from "../components/Terms";
import Employment from "../components/Employment";

import styled from "styled-components";

const MainWrapper = styled.div`
  #mainViewer {
    height: 100vh;
  }
`;

export class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <BrowserRouter>
          <div id="mainViewer">
            <NavBarSM />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/terms" component={Terms} />
              <Route path="/employment" component={Employment} />
            </Switch>
          </div>
        </BrowserRouter>
      </MainWrapper>
    );
  }
}

export default Main;
