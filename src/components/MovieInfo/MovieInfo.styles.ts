import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

// Types
type Props = {
  backdrop: string
};

// Styles
export const Wrapper = styled.div<Props>`
  background: ${({ backdrop }) => backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    text-align: center;
  }

  .score {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #000;
    font-weight: 800;
    margin: 0;
  }

  .scoreBg {
    width: 35px;
    height: 35px;
    background: var(--white);
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .rateMovie {
    align-items: left;
    justify-content: left;
    text-align: left;
    margin: 0 0 0 40px;
    width: 50%;
  }

  button {
    display: inline-block;
    margin: 0 20px;
    width: 30%;
    font-size: var(--fontSmall);
    height: 40px;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
