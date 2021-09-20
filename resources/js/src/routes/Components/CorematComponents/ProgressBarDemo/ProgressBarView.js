import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';
import { JumboCard } from '../../../../@jumbo/components/Common';

const ProgressBarView = () => {
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

  const getContainedColor = () => {
    if (barStyle === 'gradiant') {
      return {
        containedColor: ['red', 'green', 'blue', 'yellow', 'purple'],
        gradientDirection: 'to right',
      };
    }

    return {
      containedColor: '#1a90ff',
    };
  };

  return (
    <JumboCard>
      <CmtProgressBar
        onlyContained={barType}
        thickness={barThickness}
        pointer={showPointer}
        pointerSize={pointerSize}
        label={showLabel ? 'Bar Label' : ''}
        labelPos={labelPosition}
        hideValue={!showValue}
        valuePos={valuePosition}
        value={83}
        total={100}
        renderValue={(value, total) => {
          return `${value} / ${total}`;
        }}
        emptyColor={'#e9ecef'}
        {...getContainedColor()}
      />
    </JumboCard>
  );
};

export default ProgressBarView;
