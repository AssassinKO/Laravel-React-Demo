import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import NotificationView from './NotificationView';
import NotificationContextProvider from './NotificationContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtNotificationsDemo = () => {
  return (
    <NotificationContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <NotificationView />
      </CorematComponentDemo>
    </NotificationContextProvider>
  );
};

export default CmtNotificationsDemo;
