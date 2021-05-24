import React from 'react';
import SpanIcon from './spanIcon/SpanIcon';
import Header from './styles';
import NavBar from './navbar/NavBar';

function HeaderSpotify() {
  return (
    <Header>
      <SpanIcon />
      <NavBar />
    </Header>
  );
}

export default HeaderSpotify;
