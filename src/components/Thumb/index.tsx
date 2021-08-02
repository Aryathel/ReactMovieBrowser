import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.styles';

// Types
type Props = {
  image: string,
  movieId?: number,
  clickable: boolean
};

// Component
const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    { clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumbnail' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumbnail' />
    )}
  </div>
);

export default Thumb;
