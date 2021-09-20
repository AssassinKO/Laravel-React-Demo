import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import ButtonsView from './ButtonsView';
import ButtonsContextProvider from './ButtonsContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtButtonsDemo = () => {
  return (
    <ButtonsContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <ButtonsView />
      </CorematComponentDemo>
    </ButtonsContextProvider>
  );
};

export default CmtButtonsDemo;
