import React from 'react';

import { 
  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icon, 
  MicIcon, 
  HeadphoneIcon, 
  SettingsIcon 
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Juliano Soares</strong>
          <span>#1234</span>
        </UserData>
      </Profile>

      <Icon>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icon>
    </Container>
  )
}

export default UserInfo;