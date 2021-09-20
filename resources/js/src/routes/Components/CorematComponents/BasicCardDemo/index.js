import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import BasicCardView from './BasicCardView';
import CardContextProvider from './CardContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtBasicCardDemo = () => {
  return (
    <CardContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <BasicCardView />
      </CorematComponentDemo>
    </CardContextProvider>
  );
};

export default CmtBasicCardDemo;
