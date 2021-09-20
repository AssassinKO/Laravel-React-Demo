import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const ProgressBarContextProvider = ({ children }) => {
  const [barType, setBarType] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  const [barThickness, setBarThickness] = useState(4);
  const [showPointer, setPointerState] = useState(false);
  const [pointerSize, setPointerSize] = useState(8);
  const [showLabel, setLabelState] = useState(true);
  const [labelPosition, setLabelPosition] = useState('top-left');
  const [showValue, setValueState] = useState(true);
  const [valuePosition, setValuePosition] = useState('right');

  return (
    <CorematContext.Provider
      value={{
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
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default ProgressBarContextProvider;
