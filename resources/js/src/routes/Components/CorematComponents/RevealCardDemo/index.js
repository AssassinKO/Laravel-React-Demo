import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import RevealCardView from './RevealCardView';
import RevealCardContextProvider from './RevealCardContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtRevealCardDemo = () => {
  return (
    <RevealCardContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <RevealCardView />
      </CorematComponentDemo>
    </RevealCardContextProvider>
  );
};

export default CmtRevealCardDemo;
