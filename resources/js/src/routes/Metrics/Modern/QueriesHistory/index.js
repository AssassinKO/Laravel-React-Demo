import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import HistoryGraph from './HistoryGraph';
import { metrics } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  titleRoot: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
  },
  cardContentTitle: {
    marginBottom: 4,
  },
  subTitleRoot: {
    fontSize: 14,
    marginBottom: 0,
    color: theme.palette.text.secondary,
  },
}));

const QueriesHistory = () => {
  const classes = useStyles();
  const { queries } = metrics;
  return (
    <CmtAdvCard>
      <CmtCardHeader
        titleProps={{
          variant: 'inherit',
          component: 'h3',
          className: classes.titleRoot,
        }}
        title="Queries">
        <Box display="flex" alignItems="center" fontSize={14} color="#0795F4">
          <Box component="span">67%</Box>
          <ArrowDropUpIcon fontSize="small" />
        </Box>
      </CmtCardHeader>
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title="43,856"
        titleProps={{
          variant: 'h1',
          component: 'div',
          className: classes.cardContentTitle,
        }}
        subTitle={'Mail, Website and Call'}
        subTitleProps={{
          variant: 'inherit',
          component: 'div',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <HistoryGraph revenueHistory={queries} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default QueriesHistory;
