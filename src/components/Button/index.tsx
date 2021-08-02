import React from 'react';

// Styles
import { Wrapper } from './Button.styles';

// Types
type Props = {
  text: string,
  callback: (value: any) => void
};



// Component
const Button: React.FC<Props> = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
