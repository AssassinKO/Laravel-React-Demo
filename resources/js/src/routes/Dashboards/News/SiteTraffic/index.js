import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { eCommerce } from '../../../../@fake-db';
import CmtList from '../../../../@coremat/CmtList';
import SiteTrafficItem from './SiteTrafficItem';
import SiteTrafficGraph from './SiteTrafficGraph';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.25,
    backgroundColor: alpha(theme.palette.success.main, 0.15),
    color: theme.palette.success.main,
    padding: '2px 10px',
    borderRadius: 30,
  },
  optionList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 24,

    '& > *:not(:last-child)': {
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        marginRight: 40,
      },
    },
  },
}));

const SiteTraffic = () => {
  const classes = useStyles();
  const { salesStatistic } = eCommerce;
  return (
    <CmtAdvCard>
      <CmtCardHeader
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}
        title={salesStatistic.title}>
        <Box component="span" className={classes.badgeRoot}>
          Live Updates
        </Box>
      </CmtCardHeader>
      <CmtAdvCardContent className={classes.cardContentRoot}>
        <CmtList
          className={classes.optionList}
          data={eCommerce.siteTraffic.siteTrafficList}
          renderRow={(item, index) => <SiteTrafficItem key={index} item={item} />}
        />
        <Box>
          <SiteTrafficGraph />
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default SiteTraffic;
