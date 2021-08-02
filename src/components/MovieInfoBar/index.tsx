import React from 'react';

// Helpers
import { calcTime, convertMoney } from '../../helpers';

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

// Types
type Props = {
  time: number,
  budget: number,
  revenue: number
};

// Component
const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running Time: {calcTime(time)}</p>
      </div>
      <div className="column">
        Budget: {convertMoney(budget)}
      </div>
      <div className="column">
        Revenue: {convertMoney(revenue)}
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar
