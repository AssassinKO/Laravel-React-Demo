import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

import OrderTable from './OrderTable';
import { crypto } from '../../../../@fake-db';
import { getTodayDate, getYesterdayDate } from '../../../../@jumbo/utils/dateHelper';

const actions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Today',
    value: getTodayDate(),
  },
  {
    label: 'Yesterday',
    value: getYesterdayDate(),
  },
  {
    label: 'This Week',
    value: 'this_week',
  },
];

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    padding: '0 !important',
  },
  titleRoot: {
    letterSpacing: 0.15,
  },
  scrollbarRoot: {
    height: 347,
  },
}));

const OrderHistory = () => {
  const [tableData, setTableData] = useState(crypto.orders);
  const classes = useStyles();

  const filterTableData = event => {
    switch (event.value) {
      case getTodayDate(): {
        return setTableData(crypto.orders.filter(item => item.date === event.value));
      }
      case getYesterdayDate(): {
        return setTableData(crypto.orders.filter(item => item.date === event.value));
      }
      case 'this_week': {
        return setTableData(crypto.orders.filter(item => item.date !== getTodayDate() && item.date !== getYesterdayDate()));
      }
      default:
        return setTableData(crypto.orders);
    }
  };

  return (
    <CmtCard>
      <CmtCardHeader
        className="pt-4"
        title="Order History"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
        actionsPos="top-corner"
        actions={actions}
        actionHandler={filterTableData}
      />
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <OrderTable tableData={tableData} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default OrderHistory;
