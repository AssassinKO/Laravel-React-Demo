import React from 'react';
import CmtList from '../../../../@coremat/CmtList';
import { eCommerce } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import BrowserItem from './BrowserItem';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 24,
  },
  perScrollbarRoot: {
    maxHeight: 340,
  },
}));

const WebBrowsers = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.root}>
      <CmtCardHeader title="Browser" />
      <PerfectScrollbar className={classes.perScrollbarRoot}>
        <CmtList data={eCommerce.browserHistory} renderRow={(item, index) => <BrowserItem key={index} item={item} />} />
      </PerfectScrollbar>
    </CmtCard>
  );
};

export default WebBrowsers;
