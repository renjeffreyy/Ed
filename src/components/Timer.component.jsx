import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { device } from './MediaQuieries';

const TimerDisplay = styled.p`
  z-index: 2;
  font-size: 2rem;
  text-align: center;
  color: #e63946;

  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 5;

  /* typewritter effect */
  border-right: 6px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 5s steps(44) 1s 1 normal both,
    blinkTextCursor 800ms steps(44) infinite normal;

  @keyframes typewriter {
    0% {
      width: 0;
    }
    100% {
      width: 15em;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  /* media queries */
  @media ${device.Laptop} {
    font-size: 2rem;
  }

  @media ${device.tablet} {
    font-size: 1.75rem;
  }
  @media ${device.mobileXL} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobileM} {
    font-size: 0.87rem;
  }
  @media ${device.mobileS} {
    font-size: 0.87rem;
  }
`;

const Timer = () => {
  return (
    <TimerDisplay>
      <Moment
        interval={1000}
        local
        date="2020-04-24T17:00-0500"
        durationFromNow
      />
    </TimerDisplay>
  );
};
export default Timer;
