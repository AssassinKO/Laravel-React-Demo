import React from 'react';
import SignupGraph from './SignupGraph';
import StatisticsClassicCard from '../../../../@jumbo/components/Common/StatisticsClassicCard';

const OnlineSignups = () => {
  return (
    <StatisticsClassicCard
      backgroundColor={['#E2EEFF -18.96%', '#fff 108.17%']}
      gradientDirection="180deg"
      color={'#0062FF'}
      title={'10,254'}
      subTitle={'Online Signups'}
      growth={1.5}>
      <SignupGraph />
    </StatisticsClassicCard>
  );
};

export default OnlineSignups;
