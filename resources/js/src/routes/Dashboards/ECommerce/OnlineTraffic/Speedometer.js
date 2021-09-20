import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { useTheme } from '@material-ui/core';

const Speedometer = () => {
  const theme = useTheme();
  return (
    <ReactSpeedometer
      value={500}
      maxSegmentLabels={0}
      segments={4}
      ringWidth={25}
      needleColor={theme.palette.text.secondary}
      needleHeightRatio={0.5}
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      segmentColors={['#E00930', '#FF8C00', '#FFCA41', '#8DCD03']}
      currentValueText={`27 Users online`}
      valueTextFontSize={'16px'}
      textColor={theme.palette.text.primary}
    />
  );
};

export default Speedometer;
