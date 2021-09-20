import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Speedometer from './Speedometer';
import Box from '@material-ui/core/Box';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& .Cmt-card-content': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  badgeRoot: {
    fontSize: 12,
    backgroundColor: alpha(theme.palette.warning.main, 0.1),
    color: theme.palette.warning.main,
    padding: '5px 12px',
    borderRadius: 30,
  },
  speedometerRoot: {
    '& text': {
      fill: theme.palette.text.primary + '!important',
    },
    '& .current-value': {
      paddingTop: 20,
    },
    '& g.pointer': {
      fill: theme.palette.text.primary + '!important',
    },
  },
}));

const OnlineTraffic = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={'Traffic'} />
      <CmtCardContent>
        <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box className={classes.speedometerRoot}>
            <Speedometer />
          </Box>

          <Box textAlign="center" mt={4}>
            <Box className={classes.badgeRoot} component="span">
              Moderate Level
            </Box>
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default OnlineTraffic;
