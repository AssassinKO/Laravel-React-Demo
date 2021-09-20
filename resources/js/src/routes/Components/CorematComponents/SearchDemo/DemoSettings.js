import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    showBorder,
    setBorder,
    onlyIcon,
    setOnlyIcon,
    iconPosition,
    setIconPosition,
    alignment,
    setAlignment,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Search">
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
          label="Right"
          value="right"
          checked={alignment === 'right'}
          onChange={event => setAlignment(event.target.value)}
        />
      </SectionLegend>

      <SectionLegend title="Border">
        <AppSwitch label="Show Border" checked={showBorder} onChange={event => setBorder(event.target.checked)} />
      </SectionLegend>

      <SectionLegend title="icon">
        <AppSwitch label="Show Icon Only" checked={onlyIcon} onChange={event => setOnlyIcon(event.target.checked)} />
      </SectionLegend>

      <SectionLegend title="Icon Position">
        <AppRadioButton
          name="icon-position"
          label="Left"
          value="left"
          checked={iconPosition === 'left'}
          onChange={event => setIconPosition(event.target.value)}
        />

        <AppRadioButton
          name="icon-position"
          label="Right"
          value="right"
          checked={iconPosition === 'right'}
          onChange={event => setIconPosition(event.target.value)}
        />
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
