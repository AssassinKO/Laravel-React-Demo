import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const SearchContextProvider = ({ children }) => {
  const [onlyIcon, setOnlyIcon] = useState(false);
  const [showBorder, setBorder] = useState(true);
  const [iconPosition, setIconPosition] = useState('right');
  const [alignment, setAlignment] = useState('left');

  return (
    <CorematContext.Provider
      value={{
        showBorder,
        setBorder,
        onlyIcon,
        setOnlyIcon,
        iconPosition,
        setIconPosition,
        alignment,
        setAlignment,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default SearchContextProvider;
