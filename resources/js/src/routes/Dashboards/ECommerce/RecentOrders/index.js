import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import RecentTable from './RecentTable';
import { eCommerce } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getTodayDate, getYesterdayDate } from '../../../../@jumbo/utils/dateHelper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

const actions = [
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
    height: 340,
  },
  badgeRoot: {
    color: theme.palette.common.white,
    borderRadius: 30,
    fontSize: 12,
    padding: '2px 10px',
    display: 'inline-block',
  },
}));

const RecentOrders = () => {
  const [tableData, setTableData] = useState(eCommerce.recentOrders);
  const [menu, setMenu] = useState('Today');
  const classes = useStyles();

  const filterTableData = event => {
    setMenu(event.label);
    switch (event.value) {
      case getTodayDate(): {
        return setTableData(eCommerce.recentOrders.filter(item => item.orderDate === event.value));
      }
      case getYesterdayDate(): {
        return setTableData(eCommerce.recentOrders.filter(item => item.orderDate === event.value));
      }
      case 'this_week': {
        return setTableData(
          eCommerce.recentOrders.filter(item => item.orderDate !== getTodayDate() && item.orderDate !== getYesterdayDate()),
        );
      }
      default:
        return setTableData(eCommerce.recentOrders);
    }
  };

  return (
    <CmtCard>
      <CmtCardHeader
        className="pt-4"
        title="Recent Orders"
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
        actionsPos="top-corner"
        actions={actions}
        actionHandler={filterTableData}>
        <Box className={classes.badgeRoot} component="span" bgcolor="#FFDE99">
          {menu}
        </Box>
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <RecentTable tableData={tableData} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default RecentOrders;
