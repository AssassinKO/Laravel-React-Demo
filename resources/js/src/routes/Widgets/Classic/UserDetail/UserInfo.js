import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardServicesView: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  cardServices: {
    display: 'flex',
    alignItems: 'center',
  },
  cardServicesItem: {
    width: '33.33%',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  cardContentRoot: {
    paddingTop: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        <Box mb={2} component="p">
          {userDetails.bio}
        </Box>
        <Button color="primary">View Profile</Button>
      </Box>
    </Box>
  );
};

export default UserInfo;
