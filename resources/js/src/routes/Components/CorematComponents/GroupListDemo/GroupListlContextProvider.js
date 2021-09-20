import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const GroupListlContextProvider = ({ children }) => {
  const [isGrid, setGrid] = useState(false);
  const [isExpandable, setExpandable] = useState(false);

  return (
    <CorematContext.Provider
      value={{
        isGrid,
        setGrid,
        isExpandable,
        setExpandable,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default GroupListlContextProvider;
