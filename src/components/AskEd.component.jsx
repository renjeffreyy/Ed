import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button.component';

import Ed from '../assets/Ed.jpg';
import Ed2 from '../assets/Ed2.jpg';
import { device } from './MediaQuieries';

const Img = styled.img`
  width: 80vw;
  margin: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  z-index: -1;
  border-radius: 16px;
`;

const Answer = styled.p`
  text-align: left;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 2.5rem;
  padding: 20px;

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

const Container = styled.div`
  width: 80vw;
  height: 60vw;
  margin-left: auto;
  margin-right: auto;
  display: grid;
`;

const AskEd = () => {
  const [phrase] = useState([
    'No not yet',
    'I Am sTilL DoiNg ReSearCh',
    "No because I'm wack",
    'Uhhhhhhhhhhhh......',
    "I DoN't kNow iF I'm rEaDy",
  ]);
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <Container>
        {!display ? <Img src={Ed} /> : <Img src={Ed2} />}
        <Answer>Everyone: Did you build a pc Ed?</Answer>
        <Answer>
          {display
            ? 'Ed: ' + phrase[Math.floor(Math.random() * phrase.length)]
            : 'Ed:'}
        </Answer>
      </Container>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        buttonText="Ask Ed"
      />
    </div>
  );
};

export default AskEd;
