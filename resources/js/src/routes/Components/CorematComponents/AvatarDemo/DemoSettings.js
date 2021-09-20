import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import { capitalizeFLetter } from '../../../../@jumbo/utils/commonHelper';
import Box from '@material-ui/core/Box';
import AppSlider from '../../../../@jumbo/components/Common/formElements/AppSlider';

const DemoSettings = () => {
  const { variant, setVariant, size, setSize, color, setColor } = useContext(CorematContext);

  const variants = [
    { label: 'Circular', value: 'circular' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
  ];

  const sizes = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  const colors = [
    'amber',
    'brown',
    'orange',
    'purple',
    'primary',
    'red',
    'green',
    'blue',
    'grey',
    'yellow',
    'secondary',
    'random',
  ];

  return (
    <SettingsComponent title="Cmt Avatar">
      <SectionLegend title="Variants">
        {variants.map((item, index) => (
          <AppRadioButton
            key={index}
            name="avatar-variant"
            label={item.label}
            value={item.value}
            checked={variant === item.value}
            onChange={() => setVariant(item.value)}
          />
        ))}
      </SectionLegend>

      <SectionLegend title="Sizes">
        {sizes.map((item, index) => (
          <AppRadioButton
            key={index}
            name="avatar-size"
            label={item.label}
            value={item.value}
            checked={size === item.value}
            onChange={() => setSize(item.value)}
          />
        ))}

        <AppRadioButton name="avatar-size" label="Custom" checked={typeof size === 'number'} onChange={() => setSize(80)} />
      </SectionLegend>

      {typeof size === 'number' && (
        <SectionLegend>
          <Box flex={1}>
            <Box fontSize={12} mb={1}>
              Set custom size
            </Box>

            <AppSlider
              defaultValue={80}
              getAriaValueText={() => size}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              min={30}
              max={100}
              onChange={(event, newValue) => setSize(newValue)}
            />
            <Box display="flex" justifyContent="space-between" mt={-2} mb={2}>
              <Box fontSize={12}>30px</Box>

              <Box fontSize={12}>100px</Box>
            </Box>
          </Box>
        </SectionLegend>
      )}

      <SectionLegend title="Colors">
        {colors.map((option, index) => (
          <AppRadioButton
            key={index}
            style={{ minWidth: 135 }}
            name="avatar-color"
            label={capitalizeFLetter(option)}
            value={option}
            checked={color === option}
            onChange={() => setColor(option)}
          />
        ))}
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
