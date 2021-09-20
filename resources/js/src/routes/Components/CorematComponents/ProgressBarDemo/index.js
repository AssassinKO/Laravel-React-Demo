import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import ProgressBarView from './ProgressBarView';
import ProgressBarContextProvider from './ProgressBarContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtProgressBarDemo = () => {
  return (
    <ProgressBarContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <ProgressBarView />
      </CorematComponentDemo>
    </ProgressBarContextProvider>
  );
};

export default CmtProgressBarDemo;
