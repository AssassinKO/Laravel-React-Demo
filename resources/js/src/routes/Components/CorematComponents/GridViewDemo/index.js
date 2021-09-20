import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import GridView from './GridView';
import GridContextProvider from './GridContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtGridViewDemo = () => {
  return (
    <GridContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <GridView />
      </CorematComponentDemo>
    </GridContextProvider>
  );
};

export default CmtGridViewDemo;
