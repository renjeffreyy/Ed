import React from 'react';
import styled from 'styled-components';

import Ed from '../assets/Ed.jpg';

const AboutTitle = styled.p`
  font-size: 3rem;
  text-align: center;
`;

const Img = styled.img`
  width: 60vw;
  margin: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.li`
  font-size: 2rem;
`;

const ListContainer = styled.ul`
  width: 50%;
  margin: auto;
  margin-bottom: 30px;
`;

const About = () => {
  return (
    <div>
      <Img src={Ed} />
      <AboutTitle>Why is Ed building a pc?</AboutTitle>
      <ListContainer>
        <List>He promised he would</List>
        <List>Get carried in games by his friends</List>
        <List>To avoid harassment</List>
        <List>Prove to us he is the cool Ed</List>
        <List>Play Minecraft at 144fps 4k resolution</List>
      </ListContainer>
    </div>
  );
};
export default About;
