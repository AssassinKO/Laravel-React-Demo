import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  cardRoot: {
    position: 'relative',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#ffffff',
    height: 72,
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
  },
  iconBlock: {
    display: 'block',
  },
}));

const CitiesBgCard = () => {
  const classes = useStyles();
  const data = [
    {
      icon: <LocationCityIcon className={classes.iconBlock} />,
      title: '11 Cities',
    },
    {
      icon: <FreeBreakfastIcon className={classes.iconBlock} />,
      title: '2987 Coffees',
    },
  ];
  return (
    <CmtCard className={classes.cardRoot} backgroundImage={'/images/cities-bg.png'}>
      <CmtCardContent>
        <Box className={classes.root}>
          {data.map((option, index) => (
            <Box key={index} className={classes.itemRow}>
              <Box mr={2}>{option.icon}</Box>
              <Typography component="div" variant="h1">
                {option.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CitiesBgCard;
