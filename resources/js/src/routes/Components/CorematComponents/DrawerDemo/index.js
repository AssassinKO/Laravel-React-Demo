import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import DrawerView from './DrawerView';
import DrawerContextProvider from './DrawerContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtDrawerDemo = () => {
  return (
    <DrawerContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <DrawerView />
      </CorematComponentDemo>
    </DrawerContextProvider>
  );
};

export default CmtDrawerDemo;
