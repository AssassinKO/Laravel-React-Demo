import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import ExpendableCardView from './ExpendableCardView';
import ExpendableCardContextProvider from './ExpendableCardContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtExpendableCardDemo = () => {
  return (
    <ExpendableCardContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <ExpendableCardView />
      </CorematComponentDemo>
    </ExpendableCardContextProvider>
  );
};

export default CmtExpendableCardDemo;
