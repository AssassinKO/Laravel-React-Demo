import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';
import { eCommerce } from '../../../../@fake-db';
import ItemCell from './ItemCell';

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const SimpleNotifications = () => {
  const { notifications } = eCommerce;
  return (
    <CmtCard>
      <CmtCardHeader className="pt-4" title="Simple Notifications" actionsPos="top-corner" actions={actions} />
      <CmtCardContent>
        <CmtList data={notifications} renderRow={(item, index) => <ItemCell item={item} key={index} />} />
      </CmtCardContent>
    </CmtCard>
  );
};

export default SimpleNotifications;
