import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import ActivitiesList from './ActivitiesList';
import { recentActivities } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { getDateText } from '../../../../@jumbo/utils/dateHelper';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-card-content': {
      padding: 0,
    },
  },
  titleRoot: {
    marginBottom: 0,
  },
  scrollbarRoot: {
    height: 750,
    paddingLeft: 24,
    paddingRight: 24,
  },
}));

const RecentActivities = () => {
  const classes = useStyles();

  const getActivityListByDate = () => {
    return recentActivities.map(activity => {
      activity.category = getDateText(activity.date);
      return activity;
    });
  };

  const activitiesList = getActivityListByDate();

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Recent Activities"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
      />
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <ActivitiesList activitiesList={activitiesList} />
        </PerfectScrollbar>
        <Box mx={6} mb={6} pt={3}>
          <Button color="primary">See All</Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default RecentActivities;
