import React from 'react';
import StatisticItem from './StatisticItem';
import GridContainer from '../../../../@jumbo/components/GridContainer';

const StatisticList = ({ statisticList }) => {
  return (
    <GridContainer>
      {statisticList.map((item, index) => (
        <StatisticItem item={item} key={index} />
      ))}
    </GridContainer>
  );
};

export default StatisticList;
