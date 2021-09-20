import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import AvatarGroupView from './AvatarGroupView';
import AvatarGroupContextProvider from './AvatarGroupContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtAvatarGroupDemo = () => {
  return (
    <AvatarGroupContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <AvatarGroupView />
      </CorematComponentDemo>
    </AvatarGroupContextProvider>
  );
};

export default CmtAvatarGroupDemo;
