import React from 'react';
import { CryptoCard } from '../../../../@jumbo/components/Common';
import BitcoinGraph from './BitcoinGraph';

const BitcoinPurchaseHistory = () => {
  return (
    <CryptoCard title="Bitcoin Price" amount="$9,626" progress={{ value: '23%', icon: 'info', color: '#8DCD03' }}>
      <BitcoinGraph />
    </CryptoCard>
  );
};

export default BitcoinPurchaseHistory;
