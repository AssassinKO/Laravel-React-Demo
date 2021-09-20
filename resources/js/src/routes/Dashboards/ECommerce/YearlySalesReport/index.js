import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import SalesReportGraph from './SalesReportGraph';
import { eCommerce } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    marginTop: -30,
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: 4,
  },
}));

const YearlySalesReport = () => {
  const classes = useStyles();
  const { saleHistory } = eCommerce;
  return (
    <CmtAdvCard>
      <CmtCardHeader title={'This Year Sale Report'} />
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title="$685K+"
        titleProps={{
          variant: 'h1',
          component: 'div',
        }}
        subTitle={'Post 9 month data'}
        subTitleProps={{
          variant: 'body2',
          component: 'p',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <SalesReportGraph saleHistory={saleHistory} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default YearlySalesReport;
