import React from 'react';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../@coremat/CmtAvatar';
import useStyles from './index.style';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { onUserSelect } from '../../../redux/actions/Chat';
import { useDispatch } from 'react-redux';
import CmtDropdownMenu from '../../../@coremat/CmtDropdownMenu';

const actions = [
  { label: 'End Chat', slug: 'end' },
  { label: 'Forward Chat', slug: 'forward' },
  { label: 'User Profile', slug: 'profile' },
];

const ContentHeader = ({ user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onOptionItemClick = item => {
    if (item.slug === 'end') {
      dispatch(onUserSelect(null));
    }
  };

  return (
    <Box className={classes.appContentHeader}>
      <IconButton className={classes.backBtn} onClick={() => dispatch(onUserSelect(null))}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Box display="flex" alignItems="center">
        <CmtAvatar size={40} src={user.profile_pic} alt={user.name} />
        <Box pl={4}>
          <Box display="flex" alignItems="center">
            <Typography className={classes.titleRoot} component="div" variant="h3">
              {user.name}
            </Typography>
            {user.favourite ? (
              <Box ml={2}>
                <StarIcon className={classes.starIconRoot} color="primary" />
              </Box>
            ) : (
              <Box ml={2}>
                <StarBorderIcon />
              </Box>
            )}
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              className={classes.statusDot}
              style={{
                backgroundColor: user.status === 'online' ? 'green' : 'grey',
              }}
            />
            <Box component="span" ml={1.5} fontSize={12} color="text.secondary">
              {user.status}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box ml="auto">
        <CmtDropdownMenu
          TriggerComponent={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          items={actions}
          onItemClick={onOptionItemClick}
        />
      </Box>
    </Box>
  );
};

export default ContentHeader;
