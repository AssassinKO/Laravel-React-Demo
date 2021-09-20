import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const ExpendableCardContextProvider = ({ children }) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [avatarType, setAvatarType] = useState('avatar');
  const [showBackground, setBackgroundVisibility] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('color');
  const [showOverlay, setOverlayVisibility] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState('color');
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);
  const [extraActions, setExtraActions] = useState(false);
  const [showMainContent, setMainContent] = useState(true);
  const [showExpendableContent, setExpendableContent] = useState(true);
  const [showSocialButtons, setSocialButtonsVisibility] = useState(true);

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
        showMainContent,
        setMainContent,
        showExpendableContent,
        setExpendableContent,
        showSocialButtons,
        setSocialButtonsVisibility,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default ExpendableCardContextProvider;
