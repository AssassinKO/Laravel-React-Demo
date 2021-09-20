import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    color: theme.palette.common.white,
    marginBottom: 14,
  },
  textUpper: {
    textTransform: 'uppercase',
  },
}));

const PhotosCard = () => {
  const classes = useStyles();
  return (
    <CmtCard backgroundColor={['#FF9F0E', '#EC1809']}>
      <CmtCardContent>
        <Box mb={{ xs: 5, xl: 7 }} component="p" color="white" fontSize={10} className={classes.textUpper}>
          Photos
        </Box>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          523
        </Typography>
        <Box component="p" color="white">
          +18 New this week
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PhotosCard;
