import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CmtList from '../../../../@coremat/CmtList';
import NewOrderItem from './NewOrderItem';
import { eCommerce } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-card-content': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  scrollbarRoot: {
    height: 392,
    [theme.breakpoints.up('sm')]: {
      height: 274,
    },
  },
}));

const NewOrders = () => {
  const { newOrders } = eCommerce;
  const classes = useStyles();

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={newOrders.title} subTitle={newOrders.desc} />

      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList
            data={newOrders.orderList}
            renderRow={(item, index) => {
              return <NewOrderItem key={index} item={item} itemIndex={index} />;
            }}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default NewOrders;
