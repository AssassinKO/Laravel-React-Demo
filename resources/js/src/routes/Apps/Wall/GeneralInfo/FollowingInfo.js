import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const FollowingInfo = ({ userDetail }) => {
  const [isFollow, setIsFollow] = useState(true);
  const { name, username } = userDetail;
  return (
    <Box mb={4}>
      <Box component="p" mb={4}>
        {`You are ${isFollow ? 'Following' : 'not Following'} ${name} @${username}`}{' '}
      </Box>
      <Button variant="contained" color="primary" onClick={() => setIsFollow(!isFollow)}>
        {isFollow ? 'Unfollow' : 'Follow'}
      </Button>
    </Box>
  );
};

export default FollowingInfo;

FollowingInfo.prototype = {
  userDetail: PropTypes.object.isRequired,
};
