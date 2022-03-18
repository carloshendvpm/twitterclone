import React from 'react';

import { Container, Avatar, Banner, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed'
const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Carlos Henrique</h1>
        <h2>@hencarlosdvpm</h2>

        <p>Developer at <a href="#">@SDS</a></p>

        <ul>
          <li>
            <LocationIcon/>
            Recife, PE.
          </li>
          <li>
            <CakeIcon />
            Nascido em 6 de outubro de 2002.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>93</strong>
          </span>
          <span>
            <strong>1200</strong> seguidores
          </span>
        </Followage>

      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;