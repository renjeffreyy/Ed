import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

const Title = styled.p`
  font-size: 5rem;
  text-align: center;
`;

const TimerDisplay = styled.p`
  font-size: 5rem;
  text-align: center;
`;

const Timer = () => {
  return (
    <div>
      <Title>How Long will it take Edward to build his PC!?</Title>
      <TimerDisplay>
        <Moment
          interval={1000}
          local
          date="2020-04-24T17:00-0500"
          durationFromNow
        />
      </TimerDisplay>
    </div>
  );
};
export default Timer;
