import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import PortfolioDetails from './PortfolioDetails';

import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';

import { crypto } from '../../../../@fake-db';
import OverallBalance from './OverallBalance';
import ActionButtons from './ActionButtons';

const useStyles = makeStyles(theme => ({
  subTitle: {
    color: theme.palette.text.secondary,
  },
}));

const PortfolioBalance = () => {
  const classes = useStyles();

  return (
    <CmtAdvCard>
      <CmtCardHeader
        title={'Your Portfolio Balance'}
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}
      />
      <CmtAdvCardContent
        title={<OverallBalance />}
        subTitle={'Overall balance'}
        subTitleProps={{
          variant: 'body2',
          component: 'p',
          className: classes.subTitle,
        }}
        extraContent={<ActionButtons />}
        reverseDir>
        <PortfolioDetails title={'Portfolio Distribution'} data={crypto.wallets} />
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default PortfolioBalance;
