import React from 'react';
import { Box, Fab, Typography } from '@material-ui/core';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  upperPart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    position: 'relative',
  },
  lowerPart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
    '& .MuiTypography-root': {
      fontSize: 14,
    },
  },
  fabButton: {
    cursor: 'pointer',
    position: 'absolute',
    right: theme.spacing(4),
    zIndex: 1,
    height: 40,
    width: 40,
    bottom: -20,
  },
}));

const WordOfTheDay = () => {
  const classes = useStyles();

  return (
    <CmtCard>
      <Box className={classes.upperPart}>
        <Box fontWeight="fontWeightBold">Word of the Day</Box>
        <Typography component="div" variant="h1">
          be-nev-o-lent
        </Typography>
        <Box fontWeight="fontWeightBold">adjective</Box>
        <Fab className={classes.fabButton} color="secondary">
          <VolumeUpIcon />
        </Fab>
      </Box>
      <Box className={classes.lowerPart}>
        <Typography>Well meaning and kindly "he was something of a benevolent despot"</Typography>
        <Box mt={3}>
          <Button color="primary">Learn More</Button>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default WordOfTheDay;
