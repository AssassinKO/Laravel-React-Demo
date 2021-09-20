import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import Box from '@material-ui/core/Box';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtList from '../../../../@coremat/CmtList';
import CampaignCell from './CampaignCell';
import { marketingData } from '../../../../@fake-db/dashboards/widgets';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
      paddingBottom: 24,
    },
  },
  scrollbarRoot: {
    height: 305,
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.25,
    backgroundColor: alpha(theme.palette.warning.main, 0.15),
    color: theme.palette.warning.main,
    padding: '2px 10px',
    borderRadius: 30,
  },
}));

const actions = [
  {
    icon: <InfoIcon />,
    label: 'More Detail',
  },
  {
    icon: <ListIcon />,
    label: 'See All',
  },
];

const MarketingCampaign = () => {
  const classes = useStyles();

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Marketing Campaign"
        subTitle="Last update  30 min ago"
        actions={actions}
        actionHandleIcon={<ExpandMoreIcon />}>
        <Box component="span">Today</Box>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={marketingData} renderRow={(data, index) => <CampaignCell key={index} data={data} />} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default MarketingCampaign;
