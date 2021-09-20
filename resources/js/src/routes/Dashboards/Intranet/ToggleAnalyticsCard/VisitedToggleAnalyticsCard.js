import React, { useState } from 'react';
import ToggleHoverCard from '../../../../@jumbo/components/Common/ToggleHoverCard';
import Box from '@material-ui/core/Box';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import VisitedChart from './VisitedChart';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './index.style';
import { intranet } from '../../../../@fake-db';

const AnalyticContent = ({ hovered }) => {
  const classes = useStyles();

  return hovered ? (
    <Box className={classes.toggleAnalyticsContent}>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
        <Box className={classes.toggleAnalyticsContentInner} mr={{ sm: 16 }}>
          <Typography className={classes.titleRoot} component="div" variant="h1">
            963,35
          </Typography>
          <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
            <Box component="span">Rapid pace</Box>
            <Box display="flex" alignItems="center" component="span" ml={2} color={'#6200EE'}>
              35%
              <Box component="span" ml={2}>
                <TrendingUpIcon />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.toggleAnalyticsContentInner} ml={{ sm: 16 }}>
          <Typography className={classes.titleRoot} component="div" variant="h1">
            812,37
          </Typography>
          <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
            <Box component="span">Slow pace</Box>
            <Box display="flex" alignItems="center" component="span" ml={2} color={'#6200EE'}>
              14.5%
              <Box component="span" ml={2}>
                <TrendingDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box className={classes.toggleAnalyticsContent}>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
        <Box className={classes.toggleAnalyticsContentInner} mr={{ sm: 16 }}>
          <Typography className={classes.titleRoot} component="div" variant="h1">
            406,42
          </Typography>
          <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
            <Box component="span">Rapid pace</Box>
            <Box display="flex" alignItems="center" component="span" ml={2} color={'#ADDC4C'}>
              23%
              <Box component="span" ml={2}>
                <TrendingUpIcon />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.toggleAnalyticsContentInner} ml={{ sm: 16 }}>
          <Typography className={classes.titleRoot} component="div" variant="h1">
            206,12
          </Typography>
          <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
            <Box component="span">Slow pace</Box>
            <Box display="flex" alignItems="center" component="span" ml={2} color={'#C8372D'}>
              1.58%
              <Box component="span" ml={2}>
                <TrendingDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const VisitedToggleAnalyticsCard = () => {
  const { today, yesterday } = intranet.visitedChart;
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const classes = useStyles();

  return (
    <ToggleHoverCard
      className={clsx(classes.toggleCardRoot, classes.visitedDoubleToggle, toggled ? 'chart-active' : '')}
      title="Visited"
      isHovered={setHovered}
      isToggled={setToggled}
      hoverAction={
        <Box
          component="span"
          className={classes.toggleHoverBtn}
          style={{
            backgroundColor: hovered ? '#6200EE' : '#F2E7FE',
            color: hovered ? '#fff' : '#6200EE',
          }}>
          {hovered ? 'Yesterday' : 'Today'}
        </Box>
      }
      toggleAction={<ShowChartIcon color={toggled ? 'primary' : 'action'} />}>
      <AnalyticContent hovered={hovered} />

      {toggled && (
        <Box className={classes.dataChartRoot}>
          <VisitedChart
            data={hovered ? yesterday : today}
            color={hovered ? '#6200EE' : '#ADDC4C'}
            bgColor={hovered ? '#F2E7FE' : '#D7F5B1'}
          />
        </Box>
      )}
    </ToggleHoverCard>
  );
};

export default VisitedToggleAnalyticsCard;
