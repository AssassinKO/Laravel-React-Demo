import React from 'react';
import RevenueGraph from './RevenueGraph';
import StatisticsClassicCard from '../../../../@jumbo/components/Common/StatisticsClassicCard';

const TotalRevenue = () => {
  return (
    <StatisticsClassicCard
      backgroundColor={['#E2FFE7 -18.96%', '#fff 108.17%']}
      gradientDirection="180deg"
      color={'#29CF6B'}
      title={'$15,366'}
      subTitle={'Total Revenue this year'}
      growth={-1.5}>
      <RevenueGraph />
    </StatisticsClassicCard>
  );
};

export default TotalRevenue;
