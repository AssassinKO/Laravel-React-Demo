import React, { useContext } from 'react';
import { CollapsibleSection, SectionLegend } from '../index';
import AppRadioButton from '../../Common/formElements/AppRadioButton';
import MouldifiContext from '../../contextProvider/CorematContext';
import AppSwitch from '../../Common/formElements/AppSwitch';
import { Box } from '@material-ui/core';
import AppSlider from '../../Common/formElements/AppSlider';

const OverlaySettingSection = () => {
  const { showOverlay, setOverlayVisibility, overlayStyle, setOverlayStyle, overlayOpacity, setOverlayOpacity } = useContext(
    MouldifiContext,
  );

  return (
    <CollapsibleSection heading="Overlay">
      <SectionLegend>
        <AppSwitch
          label="Show Overlay"
          checked={showOverlay}
          onChange={event => setOverlayVisibility(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend title="Overlay Style">
        <AppRadioButton
          name="overlay-style"
          label="Solid Color"
          checked={overlayStyle === 'color'}
          value="color"
          onChange={event => setOverlayStyle(event.target.value)}
        />

        <AppRadioButton
          name="overlay-style"
          label="Gradient"
          checked={overlayStyle === 'gradient'}
          value="gradient"
          onChange={event => setOverlayStyle(event.target.value)}
        />
      </SectionLegend>

      <SectionLegend title="Overlay Opacity" displayAsColumn>
        <Box display="flex" alignItems="center" width="100%">
          <Box mr={4} fontSize={16}>
            10%
          </Box>
          <AppSlider
            defaultValue={overlayOpacity * 10}
            scale={value => value / 10}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.5}
            min={1}
            max={9}
            onChange={(event, newValue) => setOverlayOpacity(newValue / 10)}
          />
          <Box ml={4} fontSize={16}>
            90%
          </Box>
        </Box>
      </SectionLegend>
    </CollapsibleSection>
  );
};

export default OverlaySettingSection;
