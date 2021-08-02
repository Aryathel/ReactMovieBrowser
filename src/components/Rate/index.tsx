import React, { useState } from 'react';

// Styles
import { Wrapper } from './Rate.styles';

// Components
import Button from '../Button';

// Types
type Props = {
  callback: (value: any) => void;
};

// Component
const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <Wrapper>
      <input
        type='range'
        min='1'
        max='10'
        value={value}
        onChange={e => setValue(Number(e.currentTarget.value))}
      />
      {value}
      <Button callback={() => callback(value)} text='Rate Movie' />
    </Wrapper>
  );
};

export default Rate;
