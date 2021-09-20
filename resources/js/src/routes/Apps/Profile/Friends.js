import React from 'react';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../../@coremat/CmtCard';
import Box from '@material-ui/core/Box';
import CmtGridView from '../../../@coremat/CmtGridView';
import CmtImage from '../../../@coremat/CmtImage';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const statusColors = {
  online: '#8DCD03',
  away: '#FF8C00',
  offline: '#D9D9D9',
};

const useStyles = makeStyles(theme => ({
  textUppercase: {
    textTransform: 'uppercase',
  },
  thumbRoot: {
    position: 'relative',
    borderRadius: 4,
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      width: '100%',
      height: '100%',
      display: 'block',
    },
  },
  thumbContent: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 8,
  },
  dotRoot: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
    width: 14,
    height: 14,
    border: `solid 2px ${theme.palette.common.white}`,
    borderRadius: '50%',
  },
  thumbTitle: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.common.white,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const Friends = ({ friends }) => {
  const { total, frndProfiles, mutual } = friends;
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader title="Friends">
        <Box className={classes.textUppercase} fontSize={10} color="text.secondary">{`${total} ( ${mutual} Mutual)`}</Box>
      </CmtCardHeader>
      <CmtCardContent>
        <CmtGridView
          itemPadding={24}
          responsive={{
            xs: 2,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
          }}
          data={frndProfiles}
          renderRow={(item, index) => (
            <Box key={index} className={classes.thumbRoot}>
              <CmtImage src={item.profile_pic} alt={item.name} />
              <Box className={classes.thumbContent}>
                <Box className={classes.dotRoot} bgcolor={statusColors[item.status]} />
                <Box className={classes.thumbTitle}>{item.name}</Box>
              </Box>
            </Box>
          )}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default Friends;

Friends.prototype = {
  friends: PropTypes.object.isRequired,
};
