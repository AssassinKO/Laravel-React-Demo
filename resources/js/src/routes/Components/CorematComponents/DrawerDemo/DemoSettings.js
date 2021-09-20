import React, { useContext, useEffect } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import {
  BackgroundSettingSection,
  CollapsibleSection,
  OverlaySettingSection,
  SectionLegend,
  SettingsComponent,
} from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';

const DemoSettings = () => {
  const { open, setOpen, variant, setVariant, direction, setDirection } = useContext(CorematContext);

  useEffect(() => {
    setOpen(true);
  }, [direction, setOpen]);

  const boolOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  const directions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  const variants = [
    { label: 'Permanent', value: 'permanent' },
    { label: 'Persistent', value: 'persistent' },
    { label: 'Temporary', value: 'temporary' },
  ];

  return (
    <SettingsComponent title="Cmt Drawer">
      <CollapsibleSection heading="Drawer" open>
        <SectionLegend title="Open">
          {boolOptions.map((item, index) => (
            <AppRadioButton
              key={index}
              name="open"
              label={item.label}
              value={item.value}
              checked={open === item.value}
              onChange={() => setOpen(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Anchor">
          {directions.map((item, index) => (
            <AppRadioButton
              key={index}
              name="anchor"
              label={item.label}
              value={item.value}
              checked={direction === item.value}
              onChange={() => setDirection(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Show Avatar">
          {variants.map((item, index) => (
            <AppRadioButton
              key={index}
              name="variant"
              label={item.label}
              value={item.value}
              checked={variant === item.value}
              onChange={() => setVariant(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  );
};

export default DemoSettings;
