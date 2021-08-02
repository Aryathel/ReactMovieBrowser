import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

// Types
type Props = {
  movieTitle: string
};

// Component
const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/moviebrowser/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
