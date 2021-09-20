import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const CardContextProvider = ({ children }) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [avatarType, setAvatarType] = useState('avatar');
  const [showBackground, setBackgroundVisibility] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('color');
  const [showOverlay, setOverlayVisibility] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState('color');
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);
  const [extraActions, setExtraActions] = useState(false);
  const [showCardMedia, setCardMedia] = useState(false);
  const [showMainContent, setMainContent] = useState(true);
  const [showFooter, setFooterVisibility] = useState(true);

  return (
    <CorematContext.Provider
      value={{
        showAvatar,
        setShowAvatar,
        avatarType,
        setAvatarType,
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
        extraActions,
        setExtraActions,
        showCardMedia,
        setCardMedia,
        showMainContent,
        setMainContent,
        showFooter,
        setFooterVisibility,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default CardContextProvider;
