import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import ListView from './ListView';
import ListlContextProvider from './ListlContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtListDemo = () => {
  return (
    <ListlContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <ListView />
      </CorematComponentDemo>
    </ListlContextProvider>
  );
};

export default CmtListDemo;
