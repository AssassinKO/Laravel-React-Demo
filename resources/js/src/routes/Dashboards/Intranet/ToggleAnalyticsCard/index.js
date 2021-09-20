import React, { useState } from 'react';
import ToggleHoverCard from '../../../../@jumbo/components/Common/ToggleHoverCard';
import Box from '@material-ui/core/Box';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import DataChart from './DataChart';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './index.style';

const AnalyticContent = ({ hovered, analyticData, primaryColor, secondaryColor }) => {
  const classes = useStyles();

  return hovered ? (
    <div className={classes.toggleAnalyticsContent}>
      <div className={classes.toggleAnalyticsContentInner}>
        <Typography className={classes.titleRoot} component="div" variant="h1">
          {analyticData.onHover.amount}
        </Typography>
        <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
          <span>{analyticData.label}</span>
          <span
            className="ml-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: primaryColor.solid,
            }}>
            {analyticData.onHover.percentage}
            <span className="ml-2">
              <TrendingUpIcon />
            </span>
          </span>
        </Box>
      </div>
    </div>
  ) : (
    <div className={classes.toggleAnalyticsContent}>
      <div className={classes.toggleAnalyticsContentInner}>
        <Typography className={classes.titleRoot} component="div" variant="h1">
          {analyticData.amount}
        </Typography>
        <Box display="flex" alignItems="center" component="p" color="text.secondary" whiteSpace="nowrap" fontSize={16}>
          <span>{analyticData.label}</span>
          <span
            className="ml-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: secondaryColor.solid,
            }}>
            {analyticData.percentage}
            <span className="ml-2">
              <TrendingDownIcon />
            </span>
          </span>
        </Box>
      </div>
    </div>
  );
};

const ToggleAnalyticsCard = ({ data }) => {
  const { title, hoverButton, primaryColor, secondaryColor, analyticData, chartData } = data;
  const { current, past } = chartData;
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const classes = useStyles();

  return (
    <ToggleHoverCard
      className={clsx(classes.toggleCardRoot, toggled ? 'chart-active' : '')}
      title={title}
      isHovered={setHovered}
      isToggled={setToggled}
      hoverAction={
        <span
          className={classes.toggleHoverBtn}
          style={{
            backgroundColor: hovered ? primaryColor.solid : primaryColor.light,
            color: hovered ? hoverButton.hoverColor : hoverButton.color,
          }}>
          {hovered ? hoverButton.hoverText : hoverButton.text}
        </span>
      }
      toggleAction={<ShowChartIcon color={toggled ? 'primary' : 'action'} />}>
      <AnalyticContent
        hovered={hovered}
        analyticData={analyticData}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />

      {toggled && (
        <div className={classes.dataChartRoot}>
          <DataChart
            data={hovered ? past : current}
            color={hovered ? primaryColor.solid : secondaryColor.solid}
            bgColor={hovered ? primaryColor.light : secondaryColor.light}
          />
        </div>
      )}
    </ToggleHoverCard>
  );
};

export default ToggleAnalyticsCard;
