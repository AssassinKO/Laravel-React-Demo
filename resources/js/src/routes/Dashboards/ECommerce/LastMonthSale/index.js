import React from 'react';
import SaleGraph from './SaleGraph';
import StatisticsClassicCard from '../../../../@jumbo/components/Common/StatisticsClassicCard';

const LastMonthSale = () => {
  return (
    <StatisticsClassicCard
      backgroundColor={['#E2E3FF -18.96%', '#fff 108.17%']}
      gradientDirection="180deg"
      color={'#4200FF'}
      title={'$3,755'}
      subTitle={'Last Month Sale'}
      growth={3.5}>
      <SaleGraph />
    </StatisticsClassicCard>
  );
};

export default LastMonthSale;
