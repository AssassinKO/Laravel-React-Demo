import React from 'react';
import StatisticsCardWithBg from '../../../../@jumbo/components/Common/StatisticsCardWithBg';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrafficGraph from './TrafficGraph';

const AvgDailyTraffic = () => {
  return (
    <StatisticsCardWithBg
      backgroundColor="#0795F4"
      icon={<TimelineIcon style={{ color: '#fff' }} />}
      title="756+"
      subTitle="Avg Daily Traffic">
      <TrafficGraph />
    </StatisticsCardWithBg>
  );
};

export default AvgDailyTraffic;
