import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ProfitGraph from './ProfitGraph';
import { eCommerce } from '../../../../@fake-db';

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

const YearlyProfitReport = () => {
  const { yearlyProfit } = eCommerce;
  const classes = useStyles();
  return (
    <CmtAdvCard>
      <CmtCardHeader title={yearlyProfit.title} />
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title={yearlyProfit.subTitle}
        titleProps={{
          variant: 'h1',
          component: 'div',
        }}
        subTitle={yearlyProfit.desc}
        subTitleProps={{
          variant: 'body2',
          component: 'p',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <ProfitGraph
          shadowColor={'rgba(0,188,212,0.8)'}
          centerText="$20k"
          textColor="#03DAC5"
          height={120}
          chartType="customDoughnut"
          backgroundColor={['#F44336', '#03DAC5']}
          borderColor={['#F44336', '#03DAC5']}
          hoverBorderColor={['#F44336', '#03DAC5']}
          hoverBorderWidth={[8, 2]}
          rotation={55}
          profitData={yearlyProfit.chartData}
        />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default YearlyProfitReport;
