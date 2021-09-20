import React from 'react';

import CounterCard from '../../../../@jumbo/components/Common/CounterCard';

const FilesCounterCard = () => {
  return (
    <CounterCard
      icon={'/images/dashboard/filesIcon.svg'}
      number="42"
      label="Files"
      labelProps={{
        fontSize: 16,
      }}
      backgroundColor={['#F25247 -18.96%', '#B72D23 108.17%']}
      gradientDirection="180deg"
    />
  );
};

export default FilesCounterCard;
