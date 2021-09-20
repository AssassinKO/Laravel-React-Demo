import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { alpha, makeStyles } from '@material-ui/core/styles';

import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

import ProjectTable from './ProjectTable';

import { intranet } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
      paddingBottom: 24,
    },
  },
  scrollbarRoot: {
    height: 280,
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.25,
    backgroundColor: alpha(theme.palette.warning.main, 0.15),
    color: theme.palette.warning.main,
    padding: '2px 10px',
    borderRadius: 30,
  },
}));

const CurrentProjectsSummary = () => {
  const classes = useStyles();
  const { projectsList } = intranet;
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Current Projects List">
        <span className={classes.badgeRoot}>This week</span>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <ProjectTable data={projectsList} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CurrentProjectsSummary;
