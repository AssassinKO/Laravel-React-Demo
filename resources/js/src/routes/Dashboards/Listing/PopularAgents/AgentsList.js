import React from 'react';
import AgentItem from './AgentItem';
import CmtList from '../../../../@coremat/CmtList';
import { popularAgents } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AgentsList = () => {
  return (
    <PerfectScrollbar style={{ width: '100%' }}>
      <CmtList
        data={popularAgents}
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: -10,
          marginRight: -10,
        }}
        renderRow={(item, index) => <AgentItem key={index} item={item} />}
      />
    </PerfectScrollbar>
  );
};

export default AgentsList;
