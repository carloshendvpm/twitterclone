import React from 'react';
import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, BellIcon, HomeIcon, EmailIcon, SearchIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Carlos Henrique</strong>
          <span>600 tweets</span>
        </ProfileInfo>
      </Header>

    <ProfilePage/>

    <BottomMenu>
      <HomeIcon />
      <SearchIcon/>
      <BellIcon />
      <EmailIcon />
    </BottomMenu>

    </Container>
  );
}

export default Main;