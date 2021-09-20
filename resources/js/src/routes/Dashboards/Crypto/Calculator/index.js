import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { CurrencyCalculator } from '../../../../@jumbo/components/Common';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    '& .Cmt-card-content': {
      [theme.breakpoints.up('md')]: {
        paddingTop: 16,
      },
    },
  },
}));

const Calculator = () => {
  const classes = useStyles();

  return <CurrencyCalculator className={classes.cardRoot} title="Currency Calculator" />;
};

export default Calculator;
