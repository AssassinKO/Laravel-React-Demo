import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppCheckbox from '../../../../@jumbo/components/Common/formElements/AppCheckBox';
import AppSlider from '../../../../@jumbo/components/Common/formElements/AppSlider';
import Box from '@material-ui/core/Box';

const DemoSettings = () => {
  const {
    expandable,
    setExpandable,
    moreVisibleAction,
    setMoreVisibleAction,
    placeholderLength,
    setPlaceholderLength,
    size,
    setSize,
  } = useContext(CorematContext);

  const lengthArray = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
  ];

  const actionTypes = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
  ];

  const sizes = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  return (
    <SettingsComponent title="Cmt Avatar Group">
      <SectionLegend title="Expandable">
        <AppCheckbox
          label={'Expand on Hover'}
          checked={expandable}
          onChange={event => setExpandable(event.target.checked)}
        />
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

      <SectionLegend title="More Visible Action">
        {actionTypes.map((item, index) => (
          <AppRadioButton
            key={index}
            name="action-type"
            label={item.label}
            value={item.value}
            checked={moreVisibleAction === item.value}
            onChange={() => setMoreVisibleAction(item.value)}
          />
        ))}
      </SectionLegend>

      <SectionLegend title="Placeholder Char Length ">
        {lengthArray.map((item, index) => (
          <AppRadioButton
            key={index}
            name="placeholder-length"
            label={item.label}
            value={item.value}
            checked={placeholderLength === item.value}
            onChange={() => setPlaceholderLength(item.value)}
          />
        ))}
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
