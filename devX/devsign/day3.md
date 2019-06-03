# Styling React

## Agenda

* styled components
  * create and use styled components
  * props
  * extending
  * pseudo*
  * animation

## Styled components

### Creating a styled component

```js
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;

  background-color: black;
  color: white;
`;
```

### Passing props

```js
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;

  background-color: ${props => props.backgroundColor || 'black'};
  color: white;
`;
```

### Extending

```js
import styled from 'styled-components';

const Button = styled.button`
  border: none;
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.backgroundColor || 'black'};
  color: white;
`;

const PrimaryInvertedButton = styled(Button)`
  background-color: ${props => props.backgroundColor || 'white'};
  color: black;
`;
```

### Pseudo*

#### Pseudo elements

```js
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;

  background-color: ${props => props.backgroundColor || 'white'};
  color: black;

  ::before {
    content: '😀'
  }
`;
```

#### Pseudo classes

```js
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;

  background-color: ${props => props.backgroundColor || 'white'};
  color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`;
```

### Animation

```js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const PrimaryButton = styled.button`
  border: none;

  background-color: black;
  color: white;

  animation: ${spin} 2s linear infinite;
`;
```


```js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = props => css`
  ${spin} 2s linear infinite;
`;

const PrimaryButton = styled.button`
  border: none;

  background-color: black;
  color: white;

  animation: ${animation}
`;
```
