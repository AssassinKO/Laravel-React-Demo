import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtList from '../../../../@coremat/CmtList';

import { crm } from '../../../../@fake-db';
import TicketsItem from './TicketsItem';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';

const useStyles = makeStyles(() => ({
  perScrollbarRoot: {
    height: 282,
    marginRight: -24,
    marginLeft: -24,
  },
}));

const RecentTickets = () => {
  const classes = useStyles();
  return (
    <JumboCard title="Recent Tickets">
      <PerfectScrollbar className={classes.perScrollbarRoot}>
        <CmtList data={crm.tickets} renderRow={(item, index) => <TicketsItem key={index} item={item} />} />
      </PerfectScrollbar>
    </JumboCard>
  );
};

export default RecentTickets;
