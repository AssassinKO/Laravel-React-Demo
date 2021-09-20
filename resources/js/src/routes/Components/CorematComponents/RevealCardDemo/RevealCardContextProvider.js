import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const RevealCardContextProvider = ({ children }) => {
  const [revealed, setRevealed] = useState(false);
  const [showBackground, setBackgroundVisibility] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('color');
  const [showOverlay, setOverlayVisibility] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState('color');
  const [overlayOpacity, setOverlayOpacity] = useState(0.3);

  return (
    <CorematContext.Provider
      value={{
        revealed,
        setRevealed,
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

export default RevealCardContextProvider;
