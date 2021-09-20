import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';

import HistoryGraph from './HistoryGraph';
import { crm } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  cardContentTitle: {
    marginBottom: 4,
  },
  subTitleRoot: {
    fontSize: 12,
    marginBottom: 0,
    color: theme.palette.text.secondary,
  },
}));

const RevenueHistory = () => {
  const classes = useStyles();
  const { revenueHistory } = crm;
  return (
    <CmtAdvCard>
      <CmtCardHeader
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}
        title={'Total Revenue'}
      />
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title="$216,759"
        titleProps={{
          variant: 'h1',
          component: 'div',
          className: classes.cardContentTitle,
        }}
        subTitle={'YTD Revenue'}
        subTitleProps={{
          variant: 'inherit',
          component: 'div',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <HistoryGraph revenueHistory={revenueHistory} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default RevenueHistory;
