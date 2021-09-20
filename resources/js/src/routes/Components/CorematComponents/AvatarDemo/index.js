import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import AvatarView from './AvatarView';
import AvatarContextProvider from './AvatarContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtAvatarDemo = () => {
  return (
    <AvatarContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <AvatarView />
      </CorematComponentDemo>
    </AvatarContextProvider>
  );
};

export default CmtAvatarDemo;
