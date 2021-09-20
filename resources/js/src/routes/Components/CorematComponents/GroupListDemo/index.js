import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import GroupListView from './GroupListView';
import GroupListlContextProvider from './GroupListlContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtGroupListDemo = () => {
  return (
    <GroupListlContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <GroupListView />
      </CorematComponentDemo>
    </GroupListlContextProvider>
  );
};

export default CmtGroupListDemo;
