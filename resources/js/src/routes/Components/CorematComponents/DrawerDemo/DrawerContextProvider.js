import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const DrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [variant, setVariant] = useState('temporary');
  const [direction, setDirection] = useState('left');
  const [showBackground, setBackgroundVisibility] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('color');
  const [showOverlay, setOverlayVisibility] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState('color');
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);

  return (
    <CorematContext.Provider
      value={{
        open,
        setOpen,
        variant,
        setVariant,
        direction,
        setDirection,
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
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default DrawerContextProvider;
