import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const NotificationContextProvider = ({ children }) => {
  const [showExtraMedia, setExtraMediaVisibility] = useState(true);
  const [showFooter, setFooterVisibility] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  return (
    <CorematContext.Provider
      value={{
        showExtraMedia,
        setExtraMediaVisibility,
        showFooter,
        setFooterVisibility,
        loadMore,
        setLoadMore,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default NotificationContextProvider;
