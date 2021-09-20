import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  revenueInfoRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginLeft: -12,
      marginRight: -24,
    },
  },
  revenueTotal: {
    flex: 1,
    padding: 20,
    borderBottom: `2px solid ${theme.palette.borderColor.main}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      marginTop: -12,
    },
  },
  revenueRoot: {
    flex: 1,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginBottom: -12,
    },
  },
  revenueCol: {
    width: '50%',
    textAlign: 'center',
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.borderColor.main}`,
    },
  },
}));

const RevenueInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.revenueInfoRoot}>
      <div className={classes.revenueTotal}>
        <Typography component="div" variant="h1">
          $28734
        </Typography>
        <Box component="span" fontSize={12} color="text.disabled" mt={1}>
          Total Revenue
        </Box>
      </div>
      <div className={classes.revenueRoot}>
        <div className={classes.revenueCol}>
          <Typography component="div" variant="h1">
            23
          </Typography>
          <Box component="span" fontSize={12} color="text.disabled" mt={1}>
            Clients
          </Box>
        </div>
        <div className={classes.revenueCol}>
          <Typography component="div" variant="h1">
            7
          </Typography>
          <Box component="span" fontSize={12} color="text.disabled" mt={1}>
            Countries
          </Box>
        </div>
      </div>
    </div>
  );
};

export default RevenueInfo;
