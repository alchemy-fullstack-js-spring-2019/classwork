import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 0.2rem;
  padding: 0.8rem;

  &::before {
    content: 'Before!!!';
  }

  &:hover {
    background-color: yellow;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.bgColor || 'steelblue'};
  color: white;
`;
