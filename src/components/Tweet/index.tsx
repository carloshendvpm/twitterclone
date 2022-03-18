import React from 'react';

import { Container, 
  Retweeted, 
  RetweetIcon, 
  Body, 
  Avatar, 
  Content, 
  Header, 
  Description, 
  ImageContent, 
  Icons,
  Status, 
  CommentIcon, 
  RocketseatIcon, 
  LikeIcon, 
  Dot } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Carlos Henrique</strong>
            <span>@hencarlosdvpm</span>
            <Dot/>
            <time>17 de março</time>
          </Header>
          <Description>O que estou pensando vai aqui</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              18
            </Status>
            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;