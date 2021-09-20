import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import TimelineView from './TimelineView';
import TimelineContextProvider from './TimelineContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtTimelineDemo = () => {
  return (
    <TimelineContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <TimelineView />
      </CorematComponentDemo>
    </TimelineContextProvider>
  );
};

export default CmtTimelineDemo;
