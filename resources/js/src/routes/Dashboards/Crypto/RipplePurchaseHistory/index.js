import React from 'react';

import { CryptoCard } from '../../../../@jumbo/components/Common';
import RippleGraph from './RippleGraph';

const RipplePurchaseHistory = () => {
  return (
    <CryptoCard title="Ripple Price" amount="$9,626" progress={{ value: '-8%', icon: 'info', color: '#E00930' }}>
      <RippleGraph />
    </CryptoCard>
  );
};

export default RipplePurchaseHistory;
