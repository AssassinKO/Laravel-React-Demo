import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import {
  BackgroundSettingSection,
  OverlaySettingSection,
  SettingsComponent,
} from '../../../../@jumbo/components/CorematDemosComponents';
import { Box } from '@material-ui/core';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const { revealed, setRevealed } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Reveal Card">
      <Box display="flex" flexWrap="wrap" alignItems="center" mb={4} mt={-2} color="text.secondary">
        <AppSwitch label="Open Reveal Card" checked={revealed} onChange={event => setRevealed(event.target.checked)} />
      </Box>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  );
};

export default DemoSettings;
