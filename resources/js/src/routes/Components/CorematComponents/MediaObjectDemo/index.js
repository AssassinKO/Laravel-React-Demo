import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import MediaObjectView from './MediaObjectView';
import MediaObjectContextProvider from './MediaObjectContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtMediaObjectDemo = () => {
  return (
    <MediaObjectContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <MediaObjectView />
      </CorematComponentDemo>
    </MediaObjectContextProvider>
  );
};

export default CmtMediaObjectDemo;
