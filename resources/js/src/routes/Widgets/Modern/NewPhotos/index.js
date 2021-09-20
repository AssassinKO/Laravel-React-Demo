import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import Button from '@material-ui/core/Button';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    color: theme.palette.common.white,
    '& .Cmt-card-content': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  badgeRoot: {
    backgroundColor: alpha(theme.palette.common.dark, 0.38),
    color: theme.palette.common.white,
    fontSize: 14,
    padding: '2px 10px',
    borderRadius: 4,
    letterSpacing: 0.5,
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 1,
  },
  btnRoot: {
    height: 40,
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: alpha(theme.palette.warning.main, 0.8),
      color: theme.palette.common.white,
    },
  },
}));

const NewPhotos = () => {
  const classes = useStyles();
  return (
    <CmtCard
      backgroundColor={['#179EBC -18.96%', '#2100EE 108.17%']}
      gradientDirection="288.62deg"
      className={classes.cardRoot}>
      <CmtCardContent>
        <Box component="span" className={classes.badgeRoot}>
          $20/month
        </Box>
        <Box display="flex" alignItems="center" mb={6}>
          <CmtImage src={'/images/dashboard/new-photo.png'} />
          <Box ml={{ xs: 3, xl: 5 }} component="h1" fontSize={{ xs: 28, md: 32, xl: 36 }}>
            248
          </Box>
        </Box>
        <Box mb={3}>
          <Typography component="div" variant="h2">
            New Photos Added this week
          </Typography>
        </Box>
        <Box component="p" mb={{ xs: 5, xl: 7 }}>
          Now kickstart with your next design. Subscribe today and save $20/month
        </Box>
        <Box mt="auto">
          <Button htmltype="submit" variant="contained" color="secondary" className={classes.btnRoot}>
            Subscribe
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default NewPhotos;
