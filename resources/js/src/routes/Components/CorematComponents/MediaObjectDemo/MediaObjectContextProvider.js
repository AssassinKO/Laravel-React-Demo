import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const MediaObjectContextProvider = ({ children }) => {
  const [position, setPosition] = useState('top');
  const [showAvatar, setAvatarVisibility] = useState(true);
  const [showActions, setActionsVisibility] = useState(true);
  const [showFooter, setFooterVisibility] = useState(false);
  const [showChildren, setChildrenVisibility] = useState(true);

  return (
    <CorematContext.Provider
      value={{
        position,
        setPosition,
        showAvatar,
        setAvatarVisibility,
        showActions,
        setActionsVisibility,
        showFooter,
        setFooterVisibility,
        showChildren,
        setChildrenVisibility,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default MediaObjectContextProvider;
