import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

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
  /* fade in animation */
  /* animation: fadeInAnimation 2s ease 5s 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      visibility: visible;
      font-size: 2rem;
      opacity: 0;
    }

    50% {
      font-size: 7rem;
    }
    100% {
      visibility: visible;
      opacity: 1;
      font-size: 2rem;
    }
  } */
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
