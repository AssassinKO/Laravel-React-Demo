import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const AdvCardContextProvider = ({ children }) => {
  const [extraContent, setExtraContent] = useState(true);
  const [extraActions, setExtraActions] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);
  const [avatarType, setAvatarType] = useState('avatar');
  const [showBackground, setBackgroundVisibility] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('color');
  const [showOverlay, setOverlayVisibility] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState('color');
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);
  const [contentAlignCenter, setContentAlignment] = useState(false);
  const [headerAlignCenter, setHeaderAlignment] = useState(false);
  const [reverseDirection, setContentDirection] = useState(false);
  const [showFooter, setFooterVisibility] = useState(true);

  return (
    <CorematContext.Provider
      value={{
        extraContent,
        setExtraContent,
        extraActions,
        setExtraActions,
        showAvatar,
        setShowAvatar,
        avatarType,
        setAvatarType,
        showChildren,
        setShowChildren,
        showBackground,
        setBackgroundVisibility,
        backgroundStyle,
        setBackgroundStyle,
        showOverlay,
        setOverlayVisibility,
        overlayStyle,
        setOverlayStyle,
        overlayOpacity,
        setOverlayOpacity,
        contentAlignCenter,
        reverseDirection,
        setContentDirection,
        setContentAlignment,
        headerAlignCenter,
        setHeaderAlignment,
        showFooter,
        setFooterVisibility,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default AdvCardContextProvider;
