import React from 'react';
import styled from 'styled-components';
import Screen from '../assets/computer-monitor.svg';

import Timer from './Timer.component';

import { device } from './MediaQuieries';

const Monitor = styled.img`
  position: absolute;
  /* height: 100vh; */
  width: 80vw;
  z-index: 10;
`;

const MonitorScreen = styled.div`
  background-color: #457b9d;
  width: 66vw;
  height: 50vw;
  z-index: 2;
  margin-bottom: 17vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const LandingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1faee;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 100vh;
  }

  @media ${device.mobileM} {
    height: 50vh;
  }
`;

const Title = styled.p`
  z-index: 3;
  font-size: 3rem;
  padding: 0;
  padding-top: 5vw;
  padding-bottom: 0;
  margin: 0 20px;
  color: #1d3557;
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;

  /* media queries  */

  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.mobileXL} {
    font-size: 1.7rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`;

const Landing = () => {
  return (
    <LandingDiv>
      <Monitor src={Screen} />
      <MonitorScreen>
        <Title>How long will it take Edward to build his PC!?</Title>
        <Timer />
      </MonitorScreen>
    </LandingDiv>
  );
};

export default Landing;
