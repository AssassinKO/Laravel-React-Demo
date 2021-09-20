import React, { useContext } from 'react';
import MouldifiContext from '../../contextProvider/CorematContext';
import { CollapsibleSection, SectionLegend } from '../index';
import AppRadioButton from '../../Common/formElements/AppRadioButton';
import AppSwitch from '../../Common/formElements/AppSwitch';

const BackgroundSettingSection = () => {
  const { showBackground, setBackgroundVisibility, backgroundStyle, setBackgroundStyle } = useContext(MouldifiContext);

  return (
    <CollapsibleSection heading="Background">
      <SectionLegend>
        <AppSwitch
          label="Show Background"
          checked={showBackground}
          onChange={event => setBackgroundVisibility(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend title="Background Style">
        <AppRadioButton
          name="background-style"
          label="Solid Color"
          checked={backgroundStyle === 'color'}
          value="color"
          onChange={event => setBackgroundStyle(event.target.value)}
        />

        <AppRadioButton
          name="background-style"
          label="Gradient"
          checked={backgroundStyle === 'gradient'}
          value="gradient"
          onChange={event => setBackgroundStyle(event.target.value)}
        />

        <AppRadioButton
          name="background-style"
          label="Image"
          checked={backgroundStyle === 'image'}
          value="image"
          onChange={event => setBackgroundStyle(event.target.value)}
        />
      </SectionLegend>
    </CollapsibleSection>
  );
};

export default BackgroundSettingSection;
