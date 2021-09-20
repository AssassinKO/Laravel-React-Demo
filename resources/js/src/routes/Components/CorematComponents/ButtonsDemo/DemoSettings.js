import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';
import Box from '@material-ui/core/Box';
import { FormHelperText } from '@material-ui/core';

const DemoSettings = () => {
  const {
    enableTooltip,
    setTooltipState,
    buttonType,
    setButtonType,
    buttonSize,
    setButtonSize,
    showLabel,
    setLabelVisibility,
    onClickType,
    setOnClickType,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Buttons">
      <SectionLegend title="Button Type">
        <AppRadioButton
          name="button-type"
          label="Default"
          checked={buttonType === 'default'}
          value="default"
          onChange={event => setButtonType(event.target.value)}
        />

        <AppRadioButton
          name="button-type"
          label="Icon Button"
          checked={buttonType === 'icon-button'}
          value="icon-button"
          onChange={event => setButtonType(event.target.value)}
        />

        <AppRadioButton
          name="button-type"
          label="Combo"
          checked={buttonType === 'combo'}
          value="combo"
          onChange={event => setButtonType(event.target.value)}
        />
      </SectionLegend>

      <SectionLegend title="Button Size">
        <Box>
          <Box display="flex">
            <AppRadioButton
              name="button-size"
              label="Small"
              value="small"
              checked={buttonSize === 'small'}
              onChange={event => setButtonSize(event.target.value)}
            />
            <AppRadioButton
              name="button-size"
              label="Medium"
              value="medium"
              checked={buttonSize === 'medium'}
              onChange={event => setButtonSize(event.target.value)}
            />
            <AppRadioButton
              name="button-size"
              label="Large"
              value="large"
              checked={buttonSize === 'large'}
              onChange={event => setButtonSize(event.target.value)}
            />
          </Box>
          {buttonSize === 'large' && (
            <FormHelperText>Large size will be apply only normal button not icon button</FormHelperText>
          )}
        </Box>
      </SectionLegend>

      <SectionLegend title="Icon Button Label">
        <AppSwitch
          label="Show label below icon button"
          checked={showLabel}
          onChange={event => setLabelVisibility(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend title="Tooltip">
        <AppSwitch
          label="Enable Tooltip for All Buttons"
          checked={enableTooltip}
          onChange={event => setTooltipState(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend title="Button Click Function Type">
        <AppRadioButton
          name="function-type"
          label="Common"
          checked={onClickType === 'common'}
          value="common"
          onChange={event => setOnClickType(event.target.value)}
        />

        <AppRadioButton
          name="function-type"
          label="Individual"
          checked={onClickType === 'individual'}
          value="individual"
          onChange={event => setOnClickType(event.target.value)}
        />
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
