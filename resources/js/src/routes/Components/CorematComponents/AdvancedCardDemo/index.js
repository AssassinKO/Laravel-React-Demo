import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import AdvComponentView from './AdvComponentView';
import AdvCardContextProvider from './AdvCardContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtAdvancedCardDemo = () => {
  return (
    <AdvCardContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <AdvComponentView />
      </CorematComponentDemo>
    </AdvCardContextProvider>
  );
};

export default CmtAdvancedCardDemo;
