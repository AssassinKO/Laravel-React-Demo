import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const ButtonsContextProvider = ({ children }) => {
  const buttons = [
    { label: 'Delete', icon: 'delete', color: 'primary', tooltip: 'Delete' },
    { label: 'Send', icon: 'send', color: 'red' },
    { label: 'Add', icon: 'add', color: 'secondary' },
    { label: 'Publish', icon: 'publish', color: 'yellow' },
    { label: 'Save', icon: 'save', color: 'green' },
  ];

  const [enableTooltip, setTooltipState] = useState(false);
  const [buttonType, setButtonType] = useState('default');
  const [buttonSize, setButtonSize] = useState('medium');
  const [showLabel, setLabelVisibility] = useState(true);
  const [onClickType, setOnClickType] = useState('common');

  return (
    <CorematContext.Provider
      value={{
        buttons,
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
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default ButtonsContextProvider;
