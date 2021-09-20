import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import ObjectSummaryView from './ObjectSummaryView';
import ObjectSummaryContextProvider from './ObjectSummaryContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtObjectSummaryDemo = () => {
  return (
    <ObjectSummaryContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <ObjectSummaryView />
      </CorematComponentDemo>
    </ObjectSummaryContextProvider>
  );
};

export default CmtObjectSummaryDemo;
