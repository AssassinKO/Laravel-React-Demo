import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const {
    barType,
    barStyle,
    barThickness,
    showPointer,
    pointerSize,
    showLabel,
    labelPosition,
    showValue,
    valuePosition,
  } = useContext(CorematContext);

  const getContainedColorCode = () => {
    if (barStyle === 'gradiant') {
      return `
  containedColor={['red', 'green', 'blue', 'yellow', 'purple']}
  gradientDirection="to right"`;
    }

    return `
  containedColor="#1a90ff"`;
  };

  const getSourceCode = () => {
    return (
      `
<CmtProgressBar
  onlyContained={${barType}}
  thickness={${barThickness}}
  pointer={${showPointer}}
  pointerSize={${pointerSize}}
  label="${showLabel ? 'Bar Label' : ''}"
  labelPos="${labelPosition}"
  hideValue={${!showValue}}
  valuePos="${valuePosition}"
  value={83}
  total={100}
  renderValue={(value, total) => {
    return (value + '/' + total);
  }}
  emptyColor={'#e9ecef'} ` +
      getContainedColorCode() +
      `
/>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
