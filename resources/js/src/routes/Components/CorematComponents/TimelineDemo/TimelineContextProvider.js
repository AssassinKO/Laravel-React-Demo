import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const TimelineContextProvider = ({ children }) => {
  const [alignment, setAlignment] = useState('left');

  return (
    <CorematContext.Provider
      value={{
        alignment,
        setAlignment,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default TimelineContextProvider;
