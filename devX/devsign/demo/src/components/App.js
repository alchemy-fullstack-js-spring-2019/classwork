import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button, PrimaryButton } from './Buttons';

const spinFrames = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RedH1 = styled.h1`
  background-color: black;
  color: red;

  animation: ${spinFrames} ${props => props.duration || '5s'} linear infinite;
`;

const NavLink = styled.a`
  padding: 1rem;
  color: black;

  text-decoration: ${props => props.active ? 'underline' : 'none'}
`;

export default function App() {
  const [duration, updateDuration] = useState(1);

  return (
    <>
      <RedH1 duration={`${duration}s`}>Hi</RedH1>
      <nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#" active={true}>About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </nav>
      <Button onClick={() => updateDuration(duration + 5)}>Normal</Button>
      <PrimaryButton bgColor="red">Submit</PrimaryButton>
    </>
  );
}
