import React from 'react';
import { CorematComponentDemo } from '../../../../@jumbo/components/PageComponents';
import DemoSettings from './DemoSettings';
import CarouselView from './CarouselView';
import CarouselContextProvider from './CarouselContextProvider';
import DemoSourceCode from './DemoSourceCode';

const CmtCarouselDemo = () => {
  return (
    <CarouselContextProvider>
      <CorematComponentDemo SourceCodeComponent={<DemoSourceCode />} SettingsComponent={<DemoSettings />}>
        <CarouselView />
      </CorematComponentDemo>
    </CarouselContextProvider>
  );
};

export default CmtCarouselDemo;
