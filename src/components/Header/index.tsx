import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

// Context
import { Context } from '../../context';

const Header: React.FC = () => {
  const [user] = useContext(Context);
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to='/moviebrowser/'>
          <LogoImg src={RMDBLogo} alt='rmbd logo' />
        </Link>
        {
          user ? (
            <span className='loggedin'>Logged In As: {user.username}</span>
          ) : (
            <Link to='/moviebrowser/login'>
              <span className='login'>Log In</span>
            </Link>
          )
        }
        <TMDBLogoImg src={TMDBLogo} alt='the movie database logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;
