import React from 'react';
import { Box } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  countryCellItem: {
    padding: 12,
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.dark, 0.04),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderRadius: 4,
      '& .text-hover': {
        color: theme.palette.text.primary,
      },
    },
    '&.active': {
      backgroundColor: alpha(theme.palette.common.dark, 0.04),
    },
  },
}));

const CountryListItem = ({ country }) => {
  const { flagCode, name, visitors, badgeColor } = country;
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.countryCellItem}>
      <Box display="flex" alignItems="center">
        <i className={`flag flag-24 flag-${flagCode}`} />
        <Box color="text.disabled" className="text-hover" px={3}>
          {name}
        </Box>
      </Box>
      <Box px={2} display="flex" alignItems="center">
        <Box mx={3}>{visitors}</Box>
        <Box component="span" ml={3} height={10} width={10} bgcolor={badgeColor} borderRadius="50%" />
      </Box>
    </Box>
  );
};

export default CountryListItem;
