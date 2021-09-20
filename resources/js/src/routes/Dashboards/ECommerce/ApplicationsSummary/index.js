import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import ApplicationsGraph from './ApplicationsGraph';
import { eCommerce } from '../../../../@fake-db';
import ApplicationList from './ApplicationList';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '& .Cmt-card-content': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 3,
    },
  },
});

const ApplicationsSummary = () => {
  const { applicationsList, pieData, colors } = eCommerce.applicationsData;
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader className="pt-5" title="Application">
        <ApplicationList applicationsList={applicationsList} />
      </CmtCardHeader>
      <CmtCardContent>
        <ApplicationsGraph pieData={pieData} colors={colors} />
      </CmtCardContent>
    </CmtCard>
  );
};

export default ApplicationsSummary;
