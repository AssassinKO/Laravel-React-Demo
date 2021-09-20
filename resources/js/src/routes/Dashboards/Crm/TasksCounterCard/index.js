import React from 'react';
import CounterCard from '../../../../@jumbo/components/Common/CounterCard';

const TasksCounterCard = () => {
  return (
    <CounterCard
      icon={'/images/dashboard/tasksIcon.svg'}
      number="457"
      label="Tasks"
      labelProps={{
        fontSize: 16,
      }}
      backgroundColor={['#5AB9FE -18.96%', '#1372B7 108.17%']}
      gradientDirection="180deg"
    />
  );
};

export default TasksCounterCard;
