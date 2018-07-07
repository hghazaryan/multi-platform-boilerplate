import React from 'react';
import { Image, View, Text } from 'react-primitives';
import styled from 'styled-components';


const ButtonElement = styled.button`
    height: 50px;
    padding: 0 10px;
    border-radius: 3px;
	background-color: #595959;
`;

const textStyle = {
    lineHeight: 50,
    color: '#FFFFFF',
    textAlign: 'center'
};


const Button = ({ relative }) => (
  <ButtonElement>
  	<img src="/photo.jpg" alt={relative} />
  	<span style={textStyle}>Luke, I am your <strong className="relative">{relative}</strong>.</span>
  </ButtonElement>
);

Button.defaultProps = {
    relative: 'father'
};

export default Button;
