import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { CollapsibleSection, SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    barType,
    setBarType,
    barStyle,
    setBarStyle,
    barThickness,
    setBarThickness,
    showPointer,
    setPointerState,
    pointerSize,
    setPointerSize,
    showLabel,
    setLabelState,
    labelPosition,
    setLabelPosition,
    showValue,
    setValueState,
    valuePosition,
    setValuePosition,
  } = useContext(CorematContext);

  const types = [
    { label: 'Only Contained', value: true },
    { label: 'Full Width', value: false },
  ];

  const styles = [
    { label: 'Default', value: 'default' },
    { label: 'Gradiant', value: 'gradiant' },
  ];

  const heightOptions = [4, 8, 12];
  const pointerSizes = [8, 12, 16];

  const positionOptions = [
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Center', value: 'bottom-center' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  return (
    <SettingsComponent title="Cmt Progress Bar">
      <CollapsibleSection heading="Bar Settings" open>
        <SectionLegend title="Bar Type">
          {types.map((item, index) => (
            <AppRadioButton
              key={index}
              name="bar-type"
              label={item.label}
              value={item.value}
              checked={barType === item.value}
              onChange={() => setBarType(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Bar Style">
          {styles.map((item, index) => (
            <AppRadioButton
              key={index}
              name="bar-style"
              label={item.label}
              value={item.value}
              checked={barStyle === item.value}
              onChange={() => setBarStyle(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Bar Thickness (Height)">
          {heightOptions.map((option, index) => (
            <AppRadioButton
              key={index}
              name="bar-thickness"
              label={option}
              value={option}
              checked={barThickness === option}
              onChange={() => setBarThickness(option)}
            />
          ))}
        </SectionLegend>

        <SectionLegend>
          <AppSwitch label="Show Pointer" checked={showPointer} onChange={event => setPointerState(event.target.checked)} />
        </SectionLegend>

        <SectionLegend title="Pointer Size">
          {pointerSizes.map((option, index) => (
            <AppRadioButton
              key={index}
              name="pointer-size"
              label={option}
              value={option}
              checked={pointerSize === option}
              onChange={() => setPointerSize(option)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Label">
        <SectionLegend>
          <AppSwitch label="Show Label" checked={showLabel} onChange={event => setLabelState(event.target.checked)} />
        </SectionLegend>

        <SectionLegend title="Label Position">
          {positionOptions.map((item, index) => (
            <AppRadioButton
              key={index}
              style={{ minWidth: 160 }}
              name="label-position"
              label={item.label}
              value={item.value}
              checked={labelPosition === item.value}
              onChange={() => setLabelPosition(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Value">
        <SectionLegend>
          <AppSwitch label="Show Value" checked={showValue} onChange={event => setValueState(event.target.checked)} />
        </SectionLegend>

        <SectionLegend title="Value Position">
          {positionOptions.map((item, index) => (
            <AppRadioButton
              key={index}
              style={{ minWidth: 160 }}
              name="value-position"
              label={item.label}
              value={item.value}
              checked={valuePosition === item.value}
              onChange={() => setValuePosition(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>
    </SettingsComponent>
  );
};

export default DemoSettings;
