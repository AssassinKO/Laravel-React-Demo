import React from 'react';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtList from '../../../../@coremat/CmtList';

const statusColors = {
  online: '#8DCD03',
  away: '#FF8C00',
  offline: '#D9D9D9',
};

const useStyles = makeStyles(theme => ({
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 24,
    marginBottom: 24,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 1,
      width: 36,
      height: 4,
      backgroundColor: theme.palette.primary.main,
    },
    '& span': {
      color: theme.palette.text.secondary,
      marginLeft: 8,
    },
  },
  frdItem: {
    padding: 8,
    textAlign: 'center',
    cursor: 'pointer',
    width: '33.33%',
    '& .MuiAvatar-root': {
      width: '100%',
      height: '100%',
    },
  },
  avatarRoot: {
    position: 'relative',
    marginBottom: 6,
    '& > div': {
      position: 'relative',
      '&:before': {
        backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '40%',
      },
    },
  },
  dotRoot: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: `solid 2px ${theme.palette.common.white}`,
    position: 'absolute !important',
    right: 8,
    top: 8,
    zIndex: 1,
    '&:before': {
      display: 'none !important',
    },
  },
}));

const Friends = ({ friends }) => {
  const { total, frndProfiles, mutual } = friends;
  const classes = useStyles();

  return (
    <Box mb={4}>
      <Typography component="div" variant="h3" className={classes.titleRoot}>
        Friends -
        <Box component="span">
          {total} ({mutual} Mutual)
        </Box>
      </Typography>
      <Box width={1} overflow="hidden">
        <CmtList
          data={frndProfiles}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: -8,
          }}
          renderRow={(item, index) => (
            <Box className={classes.frdItem} key={index}>
              <Box className={classes.avatarRoot}>
                <CmtAvatar size={100} src={item.profile_pic} alt={item.name} />
                <Box className={classes.dotRoot} bgcolor={statusColors[item.status]} />
              </Box>
              <Box component="p" mb={2} color="text.secondary" fontSize={12}>
                {item.name}
              </Box>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default Friends;

Friends.prototype = {
  friends: PropTypes.object.isRequired,
};
