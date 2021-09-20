import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import SearchView from './SearchView';
import SearchContextProvider from './SearchContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtSearchDemo = () => {
  return (
    <SearchContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <SearchView />
      </CorematComponentDemo>
    </SearchContextProvider>
  );
};

export default CmtSearchDemo;
