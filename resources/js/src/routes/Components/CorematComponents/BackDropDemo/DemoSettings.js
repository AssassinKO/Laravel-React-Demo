import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    showConcealedIcon,
    setConcealedIconVisibility,
    showExtrasContainer,
    setExtrasContainerVisibility,
    showSubHeader,
    setSubHeaderVisibility,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Back Drop">
      <SectionLegend displayAsColumn>
        <AppSwitch
          label="Concealed Icon"
          checked={showConcealedIcon}
          onChange={event => setConcealedIconVisibility(event.target.checked)}
        />

        <AppSwitch
          label="Extras Container"
          checked={showExtrasContainer}
          onChange={event => setExtrasContainerVisibility(event.target.checked)}
        />

        <AppSwitch
          label="Sub Header"
          checked={showSubHeader}
          onChange={event => setSubHeaderVisibility(event.target.checked)}
        />
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
