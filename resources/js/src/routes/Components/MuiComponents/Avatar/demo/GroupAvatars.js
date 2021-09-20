import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Travis Howard" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Cindy Baker" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Agnes Walker" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Trevor Henderson" src={'https://via.placeholder.com/150x150'} />
    </AvatarGroup>
  );
}
