import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 150px;
  height: 45px;
  display: flex;
  margin: 23px auto;
  justify-content: center;
  background-color: #a8dadc;
  border-radius: 8px;
  font-family: 'Courier';
  font-size: 2rem;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  padding: 5px;
`;

const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.buttonText}</ButtonStyle>;
};
export default Button;
