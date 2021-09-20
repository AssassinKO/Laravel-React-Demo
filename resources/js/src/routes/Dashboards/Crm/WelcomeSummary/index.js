import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

import GeneralInfo from './GeneralInfo';
import SiteAudienceInfo from './SiteAudienceInfo';
import SiteVisitsGraph from './SiteVisitsGraph';
import GridContainer from '../../../../@jumbo/components/GridContainer';

import { crm } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-card-content': {
      marginTop: -15,
    },
  },
  titleSpace: {
    marginBottom: 20,
    fontWeight: theme.typography.fontWeightBold,
  },
  order2: {
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  order3: {
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
}));

const WelcomeSummary = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Welcome EMA"
        titleProps={{
          variant: 'h2',
          component: 'div',
        }}
      />
      <CmtCardContent>
        <GridContainer>
          <Grid item xs={12} sm={6} md={3}>
            <GeneralInfo />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.order3}>
            <Typography component="div" variant="h5" className={classes.titleSpace}>
              Site Audience
            </Typography>
            <SiteAudienceInfo data={crm.siteAudiences} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.order2}>
            <Typography component="div" variant="h5" className={classes.titleSpace}>
              Site Visits
            </Typography>
            <SiteVisitsGraph />
          </Grid>
        </GridContainer>
      </CmtCardContent>
    </CmtCard>
  );
};

export default WelcomeSummary;
