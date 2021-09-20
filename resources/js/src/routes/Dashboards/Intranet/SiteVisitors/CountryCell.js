import React from 'react';
import { Box } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  countryCellItem: {
    cursor: 'pointer',
    padding: 12,
    transition: 'all .2s',
    borderRadius: 4,
    '&:hover, &.active': {
      backgroundColor: alpha(theme.palette.common.dark, 0.04),
      '& .text-hover': {
        color: theme.palette.text.primary,
      },
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
  },
}));

const CountryListItem = ({ country, flagCode, ...rest }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={clsx(classes.countryCellItem, {
        active: flagCode === country.flagCode,
      })}
      {...rest}>
      <Box display="flex" alignItems="center">
        <i className={`flag flag-24 flag-${country.flagCode}`} />
        <Box color="text.disabled" className="text-hover" px={3}>
          {country.name}
        </Box>
      </Box>
      <Box px={2} display="flex" alignItems="center">
        <Box mx={3}>{country.visitors}</Box>
        <Box component="span" ml={3} height={10} width={10} bgcolor={country.badgeColor} borderRadius="50%" />
      </Box>
    </Box>
  );
};

export default CountryListItem;
