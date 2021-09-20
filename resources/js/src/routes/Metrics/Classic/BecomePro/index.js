import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)',
    },
    '& .Cmt-card-content': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 3,
    },
  },
}));

const BecomePro = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box mb={6} className="Cmt-imgRoot">
          <CmtImage src={'/images/icons/system.png'} alt="Become a Pro!" />
        </Box>
        <Typography component="div" variant="h4">
          Become a Pro!
        </Typography>
        <Box component="p" my={2} fontSize={12}>
          Trial Ending soon
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default BecomePro;
