import React from 'react';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';

import RevenueProgress from './RevenueProgress';
import WorldMap from './WorldMap';
import RevenueInfo from './RevenueInfo';
import GridContainer from '../../../../@jumbo/components/GridContainer';

const useStyles = makeStyles(theme => ({
  revenueInfoGrid: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      order: 2,
      borderLeft: `2px solid ${theme.palette.borderColor.main}`,
      marginBottom: -12,
      marginTop: -56,
    },
  },
  mapGrid: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
}));

const RevenueOverview = () => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader title="Revenue Overview" />
      <CmtCardContent>
        <GridContainer>
          <Grid item xs={12} md={3}>
            <RevenueProgress />
          </Grid>
          <Grid item xs={12} md={3} className={classes.revenueInfoGrid}>
            <RevenueInfo />
          </Grid>
          <Grid item xs={12} md={6} className={classes.mapGrid}>
            <WorldMap />
          </Grid>
        </GridContainer>
      </CmtCardContent>
    </CmtCard>
  );
};

export default RevenueOverview;
