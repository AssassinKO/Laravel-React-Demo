import React from 'react';

import { Typography } from '@material-ui/core';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  textError: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.error.main,
    marginLeft: 8,
    marginTop: 4,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const OverallBalance = () => {
  const classes = useStyles();

  return (
    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography component="div" variant="h1">
        $179,626
      </Typography>
      <Typography component="span" variant="h4" className={classes.textError}>
        23%
        <TrendingDownIcon fontSize="small" />
      </Typography>
    </div>
  );
};

export default OverallBalance;
