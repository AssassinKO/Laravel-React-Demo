import React from 'react';
import StatisticsModernCard from '../../../../@jumbo/components/Common/StatisticsModernCard';
import GroupIcon from '@material-ui/icons/Group';
import SubscribersGraph from './SubscribersGraph';

const NewSubscribers = () => {
  return (
    <StatisticsModernCard
      backgroundColor="#6200EE"
      titleIcon={<GroupIcon style={{ color: '#fff' }} />}
      title="85K+"
      subTitle="New Subscribers">
      <SubscribersGraph />
    </StatisticsModernCard>
  );
};

export default NewSubscribers;
