import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import Button from '@material-ui/core/Button';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  btnRoot: {
    height: 40,
  },
}));

const FlyingBird = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box display="flex" alignItems="center" mb={5}>
          <Box mr={{ xs: 4, xl: 6 }}>
            <CmtImage src={'/images/dashboard/fling-bird.png'} alt="flying" />
          </Box>
          <Box flex={1}>
            <Typography component="div" variant="h2">
              Flying bird
            </Typography>
            <Box mt={1} component="p" color="text.secondary">
              Bob Bush
            </Box>
          </Box>
        </Box>
        <Box component="p" mb={4} color="text.secondary">
          Some description about the card. This widget could be used to describe a project, a product, user’s profile or may
          be more.
        </Box>
        <Box mt="auto">
          <Button variant="outlined" color="primary" className={classes.btnRoot} htmltype="submit">
            View Profile
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default FlyingBird;
