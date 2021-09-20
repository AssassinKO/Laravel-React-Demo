import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const BackDropContextProvider = ({ children }) => {
  const [showConcealedIcon, setConcealedIconVisibility] = useState(true);
  const [showExtrasContainer, setExtrasContainerVisibility] = useState(true);
  const [showSubHeader, setSubHeaderVisibility] = useState(true);

  return (
    <CorematContext.Provider
      value={{
        showConcealedIcon,
        setConcealedIconVisibility,
        showExtrasContainer,
        setExtrasContainerVisibility,
        showSubHeader,
        setSubHeaderVisibility,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default BackDropContextProvider;
