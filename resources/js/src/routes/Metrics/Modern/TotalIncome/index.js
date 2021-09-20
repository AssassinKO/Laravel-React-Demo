import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import TotalIncomeGraph from './TotalIncomeGraph';
import { metrics } from '../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContentRoot: {
    marginTop: 'auto',
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

const TotalIncome = () => {
  const classes = useStyles();
  const { income } = metrics;
  return (
    <CmtAdvCard className={classes.cardRoot}>
      <CmtCardHeader
        titleProps={{
          variant: 'inherit',
          component: 'h3',
          className: classes.titleRoot,
        }}
        title="INCOME LAST YEAR">
        <Box display="flex" alignItems="center" fontSize={14} color="#0795F4">
          <Box component="span">67%</Box>
          <ArrowDropUpIcon fontSize="small" />
        </Box>
      </CmtCardHeader>
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title="$23,658"
        titleProps={{
          variant: 'h1',
          component: 'div',
          className: classes.cardContentTitle,
        }}
        subTitle={'Total income'}
        subTitleProps={{
          variant: 'inherit',
          component: 'div',
          className: classes.subTitleRoot,
        }}
        reverseDir
        columnSizes={[5, 7]}>
        <Box ml={-8} mb={-6} mr={-6} mt={-1}>
          <TotalIncomeGraph data={income} />
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default TotalIncome;
