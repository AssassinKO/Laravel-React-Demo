import React from 'react';

import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  cardServicesView: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    marginLeft: -24,
    marginRight: -24,
    padding: 20,
    paddingTop: 0,
  },
  cardServices: {
    display: 'flex',
    alignItems: 'center',
  },
  cardServicesItem: {
    width: '33.33%',
    textAlign: 'center',
    padding: '4px 10px 10px 10px',
    '&:not(:first-child)': {
      borderLeft: `1px solid ${theme.palette.borderColor.main}`,
    },
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  cardContentRoot: {
    paddingTop: 24,
    display: 'flex',
    alignItems: 'flex-end',
    color: theme.palette.text.secondary,
  },
}));

const UserInfo = ({ userDetails }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.cardServicesView}>
        <Box className={classes.cardServices}>
          {Object.keys(userDetails.stats).map((item, index) => (
            <Box className={classes.cardServicesItem} key={index}>
              <Box
                component="span"
                fontSize={12}
                color="text.secondary"
                display="block"
                mb={1}
                className={classes.capitalize}>
                {item}
              </Box>
              <Box component="span" fontSize={14} color="text.primary" display="block">
                {userDetails.stats[item]}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.cardContentRoot}>
        <Box>{userDetails.bio}</Box>
        <Box ml={2}>
          <Fab size="medium" color="primary">
            <SendIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
