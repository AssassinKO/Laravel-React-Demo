import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Box } from '@material-ui/core';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      height: '100%',
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
}));

const CampaignCard = () => {
  const classes = useStyles();
  const { campaignStats } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box display="flex">
          <Box>
            <Typography component="div" variant="h4">
              {campaignStats.title}
            </Typography>
            <Box component="p" color="text.secondary" mt={1} mb={2}>
              {campaignStats.subTitle}
            </Box>
            <ArrowForwardIcon color="action" />
          </Box>
          <Box ml="auto" display="flex" flexDirection="column" justifyContent="flex-end">
            <ResponsiveContainer width={100} height={62}>
              <BarChart data={campaignStats.chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Bar dataKey="uv" stackId="a" fill="#0795F4" />
                <Bar dataKey="pv" stackId="a" fill="#03DAC5" />]
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CampaignCard;
