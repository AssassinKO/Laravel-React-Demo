import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';

const DemoSettings = () => {
  const { alignment, setAlignment } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Timeline">
      <SectionLegend title="Alignment">
        <AppRadioButton
          name="alignment"
          label="Left"
          value="left"
          checked={alignment === 'left'}
          onChange={event => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Center"
          value="center"
          checked={alignment === 'center'}
          onChange={event => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Right"
          value="right"
          checked={alignment === 'right'}
          onChange={event => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Zigzag"
          value="zigzag"
          checked={alignment === 'zigzag'}
          onChange={event => setAlignment(event.target.value)}
        />
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
