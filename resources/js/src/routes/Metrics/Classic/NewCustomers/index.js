import React from 'react';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HoverInfoCard from '../../../../@jumbo/components/Common/HoverInfoCard';

const NewCustomers = () => {
  return (
    <HoverInfoCard
      backgroundColor="#8DCD03"
      icon={<SupervisedUserCircleIcon style={{ color: '#ffffff' }} />}
      title="New Customers"
      subTitle={543}
    />
  );
};

export default NewCustomers;
