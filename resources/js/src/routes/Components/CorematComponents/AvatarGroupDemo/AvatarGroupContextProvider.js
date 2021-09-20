import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const AvatarGroupContextProvider = ({ children }) => {
  const [expandable, setExpandable] = useState(false);
  const [moreVisibleAction, setMoreVisibleAction] = useState('hover');
  const [placeholderLength, setPlaceholderLength] = useState(1);
  const [size, setSize] = useState('medium');

  return (
    <CorematContext.Provider
      value={{
        expandable,
        setExpandable,
        moreVisibleAction,
        setMoreVisibleAction,
        placeholderLength,
        setPlaceholderLength,
        size,
        setSize,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default AvatarGroupContextProvider;
