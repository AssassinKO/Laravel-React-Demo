import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import ActivitiesTimeLine from './ActivitiesTimeLine';
import { intranet } from '../../../../@fake-db';
import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
  },
  scrollbarRoot: {
    height: 300,
    marginRight: -24,
    paddingRight: 24,
    marginLeft: -24,
    paddingLeft: 24,
    marginTop: -5,
    paddingTop: 5,
  },
}));

const RecentActivities = () => {
  const classes = useStyles();
  const { userActivities } = intranet;
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Recent Activities" subTitle={`Last activity was ${timeFromNow(userActivities[0].date)}`} />
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <ActivitiesTimeLine data={userActivities} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default RecentActivities;
