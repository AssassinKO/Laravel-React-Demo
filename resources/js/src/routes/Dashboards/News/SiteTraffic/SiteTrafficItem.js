import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer',
    marginRight: 15,
  },
});

const SiteTrafficItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box bgcolor={item.bgColor} color={item.color} className={classes.avatar}>
        {item.icon}
      </Box>
      <Box fontSize={16} fontWeight={700} color="text.primary">
        {item.label}
      </Box>
    </Box>
  );
};
export default SiteTrafficItem;
