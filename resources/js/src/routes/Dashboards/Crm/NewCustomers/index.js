import React from 'react';
import { JumboCard } from '../../../../@jumbo/components/Common';
import CustomersList from './CustomersList';
import { newCustomers } from '../../../../@fake-db';

const NewCustomers = () => {
  return (
    <JumboCard title="New Customers">
      <CustomersList data={newCustomers} />
    </JumboCard>
  );
};

export default NewCustomers;
