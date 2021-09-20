import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import BackDropView from './BackDropView';
import BackDropContextProvider from './BackDropContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtBackDropDemo = () => {
  return (
    <BackDropContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <BackDropView />
      </CorematComponentDemo>
    </BackDropContextProvider>
  );
};

export default CmtBackDropDemo;
