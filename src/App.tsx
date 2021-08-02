import React from 'react';

// Routing
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Header from './components/Header';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

// Context
import UserProvider from './context';

// Styles
import { GlobalStyle } from './GlobalStyle';

// The main app object that everything goes into.
const App: React.FC = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
